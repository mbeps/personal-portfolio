import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import DetailsTable from "@/components/ui/DetailsTable";
import DynamicBreadcrumb from "@/components/ui/DynamicBreadcrumb";
import ExpandCollapseButton from "@/components/ui/ExpandCollapseButton";
import Grid from "@/components/ui/Grid";
import LoadingAnimation from "@/components/ui/LoadingAnimation";
import NextSectionButton from "@/components/ui/NextSectionButton";
import PageDescription from "@/components/ui/PageDescription";
import Scroll from "@/components/ui/Scroll";
import SidePanel from "@/components/ui/SidePanel";
import StringList from "@/components/ui/StringList";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/test-path"),
}));

// Mock useIsMounted hook with controllable return value
const mockUseIsMounted = vi.fn(() => true);
vi.mock("@/hooks/useIsMounted", () => ({
  default: () => mockUseIsMounted(),
}));

describe("UI Components Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseIsMounted.mockReturnValue(true);
  });

  describe("DetailsTable", () => {
    test("renders string values correctly", () => {
      const details = [
        { heading: "Location", value: "London, UK" },
        { heading: "Role", value: "Software Engineer" },
      ];
      const html = renderToStaticMarkup(<DetailsTable details={details} />);

      expect(html).toContain("Location");
      expect(html).toContain("London, UK");
      expect(html).toContain("Role");
      expect(html).toContain("Software Engineer");
      expect(html).toContain(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4",
      );
    });

    test("renders array values as an unordered list", () => {
      const details = [
        {
          heading: "Key Achievements",
          value: [
            "Built feature A",
            "Optimized database queries",
            "Reduced latency by 40%",
          ],
        },
      ];
      const html = renderToStaticMarkup(<DetailsTable details={details} />);

      expect(html).toContain("Key Achievements");
      expect(html).toContain("<ul");
      expect(html).toContain("list-disc");
      expect(html).toContain("<li>Built feature A</li>");
      expect(html).toContain("<li>Optimized database queries</li>");
      expect(html).toContain("<li>Reduced latency by 40%</li>");
    });

    test("renders ReactNode elements as values", () => {
      const details = [
        {
          heading: "Custom Element",
          value: <span className="custom-badge">Special Value</span>,
        },
      ];
      const html = renderToStaticMarkup(<DetailsTable details={details} />);

      expect(html).toContain("Custom Element");
      expect(html).toContain('<span class="custom-badge">Special Value</span>');
    });

    test("applies custom className via twMerge", () => {
      const details = [{ heading: "Status", value: "Active" }];
      const html = renderToStaticMarkup(
        <DetailsTable
          details={details}
          className="custom-table-class grid-cols-1"
        />,
      );

      expect(html).toContain("custom-table-class");
      expect(html).toContain("grid-cols-1");
      expect(html).toContain("md:grid-cols-2");
    });

    test("renders empty container when details list is empty", () => {
      const html = renderToStaticMarkup(<DetailsTable details={[]} />);
      expect(html).toContain("<div");
      expect(html).not.toContain("<h4>");
    });
  });

  describe("DynamicBreadcrumb", () => {
    test("renders single breadcrumb item without separator", () => {
      const breadcrumbs = [{ name: "Home", path: "/" }];
      const html = renderToStaticMarkup(
        <DynamicBreadcrumb breadcrumbs={breadcrumbs} />,
      );

      expect(html).toContain("Home");
      expect(html).toContain('href="/"');
      expect(html).not.toContain("ChevronRight");
      expect(html).not.toContain('role="presentation"');
    });

    test("renders multiple breadcrumbs with links and separators", () => {
      const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Education", path: "/education" },
        { name: "BSc Computer Science" },
      ];
      const html = renderToStaticMarkup(
        <DynamicBreadcrumb breadcrumbs={breadcrumbs} />,
      );

      expect(html).toContain('href="/"');
      expect(html).toContain("Home");
      expect(html).toContain('href="/education"');
      expect(html).toContain("Education");
      expect(html).toContain("BSc Computer Science");
      // Non-link item does not render an anchor href for BSc Computer Science
      expect(html).not.toContain('href="BSc Computer Science"');
      // Contains separators between items
      expect(html).toContain('role="presentation"');
    });

    test("handles empty breadcrumb array gracefully", () => {
      const html = renderToStaticMarkup(<DynamicBreadcrumb breadcrumbs={[]} />);
      expect(html).toContain("<nav");
      expect(html).toContain("<ol");
    });
  });

  describe("ExpandCollapseButton", () => {
    test("renders collapsed state properly (isExpanded = false)", () => {
      const handleToggle = vi.fn();
      const html = renderToStaticMarkup(
        <ExpandCollapseButton isExpanded={false} onToggle={handleToggle} />,
      );

      expect(html).toContain("Show More");
      expect(html).not.toContain("Show Less");
      expect(html).toContain('data-state="closed"');
      expect(html).toContain('aria-expanded="false"');
      expect(html).toContain('type="button"');
    });

    test("renders expanded state properly (isExpanded = true)", () => {
      const handleToggle = vi.fn();
      const html = renderToStaticMarkup(
        <ExpandCollapseButton isExpanded={true} onToggle={handleToggle} />,
      );

      expect(html).toContain("Show Less");
      expect(html).not.toContain("Show More");
      expect(html).toContain('data-state="open"');
      expect(html).toContain('aria-expanded="true"');
    });

    test("applies custom className", () => {
      const html = renderToStaticMarkup(
        <ExpandCollapseButton
          isExpanded={false}
          onToggle={() => {}}
          className="my-custom-btn-class"
        />,
      );

      expect(html).toContain("my-custom-btn-class");
      expect(html).toContain("text-red-700");
    });
  });

  describe("Grid", () => {
    test("renders even number of items without odd centering wrapper", () => {
      const items = [
        <div key="1">Item 1</div>,
        <div key="2">Item 2</div>,
        <div key="3">Item 3</div>,
        <div key="4">Item 4</div>,
      ];
      const html = renderToStaticMarkup(<Grid items={items} />);

      expect(html).toContain("Item 1");
      expect(html).toContain("Item 2");
      expect(html).toContain("Item 3");
      expect(html).toContain("Item 4");
      expect(html).toContain("grid-gap:20px");
      expect(html).not.toContain("md:col-span-2");
    });

    test("renders odd number of items with last item centered across 2 columns", () => {
      const items = [
        <div key="1">Card 1</div>,
        <div key="2">Card 2</div>,
        <div key="3">Card 3</div>,
      ];
      const html = renderToStaticMarkup(<Grid items={items} />);

      expect(html).toContain("Card 1");
      expect(html).toContain("Card 2");
      expect(html).toContain("Card 3");
      expect(html).toContain("flex justify-center md:col-span-2");
      expect(html).toContain("w-full md:w-1/2");
    });

    test("applies custom gap prop dynamically", () => {
      const items = [<div key="1">Card 1</div>];
      const html = renderToStaticMarkup(<Grid items={items} gap={36} />);

      expect(html).toContain("grid-gap:36px");
    });

    test("renders empty items array", () => {
      const html = renderToStaticMarkup(<Grid items={[]} />);
      expect(html).toContain("grid grid-cols-1 md:grid-cols-2");
    });
  });

  describe("LoadingAnimation", () => {
    test("renders centered bounce loader with full height container", () => {
      const html = renderToStaticMarkup(<LoadingAnimation />);

      expect(html).toContain(
        "flex h-[calc(100vh-10rem)] w-full items-center justify-center",
      );
      expect(html).toContain("rounded-lg");
    });
  });

  describe("NextSectionButton", () => {
    test("renders anchor link to next section hash with animated arrow", () => {
      const html = renderToStaticMarkup(
        <NextSectionButton section="about-section" />,
      );

      expect(html).toContain('href="#about-section"');
      expect(html).toContain("slow-bounce");
      expect(html).toContain("animate-bounce");
    });

    test("handles special characters or empty section name", () => {
      const html = renderToStaticMarkup(<NextSectionButton section="skills" />);
      expect(html).toContain('href="#skills"');
    });
  });

  describe("PageDescription", () => {
    test("renders paragraph with description text", () => {
      const description =
        "Explore my projects, experience, and educational background.";
      const html = renderToStaticMarkup(
        <PageDescription description={description} />,
      );

      expect(html).toContain(description);
      expect(html).toContain("text-center text-lg text-neutral-500 md:text-xl");
    });

    test("handles empty string description", () => {
      const html = renderToStaticMarkup(<PageDescription description="" />);
      expect(html).toContain(
        '<p class="text-center text-lg text-neutral-500 md:text-xl"></p>',
      );
    });
  });

  describe("Scroll", () => {
    test("renders empty fragment", () => {
      const html = renderToStaticMarkup(<Scroll />);
      expect(html).toBe("");
    });
  });

  describe("SidePanel", () => {
    test("returns null when not mounted", () => {
      mockUseIsMounted.mockReturnValue(false);
      const html = renderToStaticMarkup(
        <SidePanel isOpen={true} toggle={() => {}} title="Filters">
          <div>Panel Content</div>
        </SidePanel>,
      );

      expect(html).toBe("");
    });

    test("renders open panel when mounted with isOpen=true", () => {
      mockUseIsMounted.mockReturnValue(true);
      const html = renderToStaticMarkup(
        <SidePanel
          isOpen={true}
          toggle={() => {}}
          title="Filter Materials"
          className="extra-panel-cls"
          secondaryClassName="extra-sec-cls"
        >
          <div data-testid="panel-inner">Select Categories</div>
        </SidePanel>,
      );

      expect(html).toContain("Filter Materials");
      expect(html).toContain("Select Categories");
      expect(html).toContain("translate-x-0");
      expect(html).not.toContain("translate-x-full");
      expect(html).toContain("extra-panel-cls");
      expect(html).toContain("extra-sec-cls");
      expect(html).toContain("Close");
    });

    test("renders closed panel when mounted with isOpen=false", () => {
      mockUseIsMounted.mockReturnValue(true);
      const html = renderToStaticMarkup(
        <SidePanel isOpen={false} toggle={() => {}} title="Filter Materials">
          <div>Hidden Content</div>
        </SidePanel>,
      );

      expect(html).toContain("translate-x-full");
      expect(html).not.toContain("translate-x-0");
      expect(html).toContain("Filter Materials");
    });
  });

  describe("StringList", () => {
    test("renders list of strings with circle bullet icons", () => {
      const items = ["First item", "Second item", "Third item"];
      const html = renderToStaticMarkup(<StringList items={items} />);

      expect(html).toContain("First item");
      expect(html).toContain("Second item");
      expect(html).toContain("Third item");
      expect(html).toContain("<ul");
      expect(html).toContain("flex list-none flex-col gap-6 text-lg");
      expect(html).toContain("<li");
    });

    test("handles empty items array", () => {
      const html = renderToStaticMarkup(<StringList items={[]} />);
      expect(html).toContain(
        '<ul class="flex list-none flex-col gap-6 text-lg"></ul>',
      );
    });
  });
});
