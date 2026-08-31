import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import DesktopNavbarSection from "@/components/navbar/desktop-navbar-section";
import HomeButton from "@/components/navbar/home-button";
import MobileNavbarSection from "@/components/navbar/mobile-navbar-section";
import Navbar from "@/components/navbar/navbar";
import NavbarItem from "@/components/navbar/navbar-item";
import NavbarOverlay from "@/components/navbar/navbar-overlay";
import ThemeToggle from "@/components/navbar/theme-toggle";
import developerName from "@/constants/developer-name";
import { NAV_ITEMS, ROUTES } from "@/constants/routes";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useNavbarStore } from "@/hooks/use-navbar-store";

const { mockNavbarState } = vi.hoisted(() => {
  const state = {
    isOpen: false,
    toggle: () => {
      state.isOpen = !state.isOpen;
    },
    open: () => {
      state.isOpen = true;
    },
    close: () => {
      state.isOpen = false;
    },
  };
  return { mockNavbarState: state };
});

vi.mock("@/hooks/use-navbar-store", () => {
  const useNavbarStore = (selector?: any) =>
    selector ? selector(mockNavbarState) : mockNavbarState;
  useNavbarStore.getState = () => mockNavbarState;
  useNavbarStore.setState = (partial: any) => {
    Object.assign(mockNavbarState, partial);
  };
  return { useNavbarStore };
});

// Mock next/navigation
const mockPathname = vi.fn(() => "/");
const mockRouterPush = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
  useRouter: () => ({
    push: mockRouterPush,
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
}));

// Mock next-themes
const mockSetTheme = vi.fn();
let mockCurrentTheme = "dark";
let mockResolvedTheme = "dark";
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: mockCurrentTheme,
    resolvedTheme: mockResolvedTheme,
    setTheme: mockSetTheme,
  }),
}));

// Mock useMediaQuery
vi.mock("@/hooks/use-media-query", () => ({
  useMediaQuery: vi.fn(() => false),
}));

vi.mock("@/components/shadcn/ui/tooltip", () => ({
  Tooltip: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children, render }: any) => (
    <div>{render || children}</div>
  ),
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  TooltipProvider: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children, render }: any) => (
    <div>{render || children}</div>
  ),
  DropdownMenuContent: ({ children }: any) => <div>{children}</div>,
  DropdownMenuItem: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/context-menu", () => ({
  ContextMenu: ({ children }: any) => <div>{children}</div>,
  ContextMenuTrigger: ({ children, render }: any) => (
    <div>{render || children}</div>
  ),
  ContextMenuContent: ({ children }: any) => <div>{children}</div>,
  ContextMenuItem: ({ children }: any) => <div>{children}</div>,
}));

describe("Navbar Components Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPathname.mockReturnValue("/");
    mockCurrentTheme = "dark";
    mockResolvedTheme = "dark";
    useNavbarStore.setState({ isOpen: false });
    vi.mocked(useMediaQuery).mockReturnValue(false);
  });

  describe("HomeButton", () => {
    test("renders link to homepage with developer name", () => {
      const html = renderToStaticMarkup(<HomeButton />);

      expect(html).toContain(`href="${ROUTES.HOME.path}"`);
      expect(html).toContain(developerName);
      expect(html).toContain("<h2");
    });
  });

  describe("NavbarItem", () => {
    test("applies font-bold when link is active (matching pathname)", () => {
      mockPathname.mockReturnValue("/projects");
      const html = renderToStaticMarkup(
        <NavbarItem href="/projects">Projects</NavbarItem>,
      );

      expect(html).toContain('href="/projects"');
      expect(html).toContain("Projects");
      expect(html).toContain("font-bold");
    });

    test("applies font-normal when link is inactive (not matching pathname)", () => {
      mockPathname.mockReturnValue("/about");
      const html = renderToStaticMarkup(
        <NavbarItem href="/projects">Projects</NavbarItem>,
      );

      expect(html).toContain('href="/projects"');
      expect(html).toContain("Projects");
      expect(html).toContain("font-normal");
    });

    test("contains animated hover underline indicator", () => {
      const html = renderToStaticMarkup(
        <NavbarItem href="/skills">Skills</NavbarItem>,
      );

      expect(html).toContain("bg-red-500");
      expect(html).toContain("-translate-x-full");
      expect(html).toContain("md:group-hover:translate-x-0");
    });
  });

  describe("DesktopNavbarSection", () => {
    test("renders only items with isMain: true", () => {
      const mockItems = [
        {
          label: "Main Item 1",
          path: "/main1",
          isMain: true,
          description: "Main 1",
        },
        {
          label: "Secondary Item",
          path: "/secondary",
          isMain: false,
          description: "Secondary",
        },
        {
          label: "Main Item 2",
          path: "/main2",
          isMain: true,
          description: "Main 2",
        },
      ];

      const html = renderToStaticMarkup(
        <DesktopNavbarSection items={mockItems} />,
      );

      expect(html).toContain("Main Item 1");
      expect(html).toContain('href="/main1"');
      expect(html).toContain("Main Item 2");
      expect(html).toContain('href="/main2"');
      expect(html).not.toContain("Secondary Item");
      expect(html).not.toContain('href="/secondary"');
      expect(html).toContain("hidden lg:block");
    });

    test("renders correctly with full NAV_ITEMS list", () => {
      const html = renderToStaticMarkup(
        <DesktopNavbarSection items={NAV_ITEMS} />,
      );

      const mainItems = NAV_ITEMS.filter((item) => item.isMain);
      for (const item of mainItems) {
        expect(html).toContain(item.label);
        expect(html).toContain(`href="${item.path}"`);
      }
    });
  });

  describe("MobileNavbarSection", () => {
    test("renders hamburger menu icon when isOverlayOpen is false", () => {
      const html = renderToStaticMarkup(
        <MobileNavbarSection isOverlayOpen={false} toggleOverlay={() => {}} />,
      );

      expect(html).toContain("lg:hidden");
      expect(html).toContain("<svg");
      expect(html).not.toContain("IoMdClose");
    });

    test("renders close icon when isOverlayOpen is true", () => {
      const html = renderToStaticMarkup(
        <MobileNavbarSection isOverlayOpen={true} toggleOverlay={() => {}} />,
      );

      expect(html).toContain("lg:hidden");
      expect(html).toContain("<svg");
    });
  });

  describe("NavbarOverlay", () => {
    test("returns null when not on mobile (isMobile = false)", () => {
      vi.mocked(useMediaQuery).mockReturnValue(false);
      const html = renderToStaticMarkup(
        <NavbarOverlay isOpen={true} toggle={() => {}} items={NAV_ITEMS} />,
      );

      expect(html).toBe("");
    });

    test("renders open mobile overlay when isMobile is true and isOpen is true", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      const html = renderToStaticMarkup(
        <NavbarOverlay isOpen={true} toggle={() => {}} items={NAV_ITEMS} />,
      );

      expect(html).toContain("translate-x-0");

      const mainItems = NAV_ITEMS.filter((item) => item.isMain);
      for (const item of mainItems) {
        expect(html).toContain(item.label);
      }
    });

    test("renders closed mobile overlay with translate-x-full when isOpen is false", () => {
      vi.mocked(useMediaQuery).mockReturnValue(true);
      const html = renderToStaticMarkup(
        <NavbarOverlay isOpen={false} toggle={() => {}} items={NAV_ITEMS} />,
      );

      expect(html).toContain("translate-x-full");
    });
  });

  describe("ThemeToggle", () => {
    test("renders Sun button when resolvedTheme is dark", () => {
      mockResolvedTheme = "dark";
      mockCurrentTheme = "dark";
      const html = renderToStaticMarkup(<ThemeToggle />);

      expect(html).toContain("bg-black");
      expect(html).toContain("Right Click");
      expect(html).toContain("Light");
      expect(html).toContain("Dark");
      expect(html).toContain("System");
    });

    test("renders Moon button when resolvedTheme is light", () => {
      mockResolvedTheme = "light";
      mockCurrentTheme = "light";
      const html = renderToStaticMarkup(<ThemeToggle />);

      expect(html).toContain("bg-white");
      expect(html).toContain("Right Click");
    });
  });

  describe("Navbar Complete Header", () => {
    test("renders main header with all nested subcomponents", () => {
      useNavbarStore.setState({ isOpen: false });
      const html = renderToStaticMarkup(<Navbar />);

      expect(html).toContain("<header");
      expect(html).toContain(developerName);
      expect(html).toContain("transition-duration:700ms");
    });

    test("renders with 1000ms transition duration when overlay is open", () => {
      useNavbarStore.getState().open();
      const html = renderToStaticMarkup(<Navbar />);

      expect(html).toContain("transition-duration:1000ms");
    });
  });
});
