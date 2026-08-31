import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { ArchiveToggle } from "@/components/filters/ArchiveToggle";
import FilterOptionItemAccordion from "@/components/filters/FilterOptionItemAccordion";
import FilterOptionItemCombobox from "@/components/filters/FilterOptionItemCombobox";
import FilterOverlay from "@/components/filters/FilterOverlay";
import FilterSection from "@/components/filters/FilterSection";
import type ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import type FilterCategory from "@/interfaces/filters/FilterCategory";
import type SearchFilter from "@/interfaces/filters/SearchFilter";

const { mockUseMediaQuery, mockUseIsMounted } = vi.hoisted(() => ({
  mockUseMediaQuery: vi.fn(),
  mockUseIsMounted: vi.fn(),
}));

vi.mock("@/hooks/useMediaQuery", () => ({
  useMediaQuery: (query: string) => mockUseMediaQuery(query),
}));

vi.mock("@/hooks/useIsMounted", () => ({
  default: () => mockUseIsMounted(),
}));

vi.mock("@/components/shadcn/ui/accordion", () => ({
  Accordion: ({ children }: any) => <div data-slot="accordion">{children}</div>,
  AccordionItem: ({ children }: any) => <div>{children}</div>,
  AccordionTrigger: ({ children }: any) => <button>{children}</button>,
  AccordionContent: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/drawer", () => ({
  Drawer: ({ children }: any) => <div>{children}</div>,
  DrawerContent: ({ children }: any) => <div>{children}</div>,
  DrawerHeader: ({ children }: any) => <div>{children}</div>,
  DrawerTitle: ({ children }: any) => <div>{children}</div>,
  DrawerDescription: ({ children }: any) => <div>{children}</div>,
  DrawerFooter: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/popover", () => ({
  Popover: ({ children }: any) => <div>{children}</div>,
  PopoverTrigger: ({ children, render }: any) => (
    <div>{render || children}</div>
  ),
  PopoverContent: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/command", () => ({
  Command: ({ children }: any) => <div>{children}</div>,
  CommandInput: (props: any) => <input {...props} />,
  CommandList: ({ children }: any) => <div>{children}</div>,
  CommandEmpty: ({ children }: any) => <div>{children}</div>,
  CommandGroup: ({ children }: any) => <div>{children}</div>,
  CommandItem: ({ children, onSelect }: any) => (
    <div onClick={onSelect}>{children}</div>
  ),
}));

describe("Filters", () => {
  beforeEach(() => {
    mockUseIsMounted.mockReturnValue(true);
    mockUseMediaQuery.mockReturnValue(false);
  });

  const sampleCategories: FilterCategory[] = [
    {
      sectionName: "Language",
      urlParam: "lang",
      selectedValue: "ts",
      onChange: vi.fn(),
      options: [
        { slug: "all", entryName: "All Languages" },
        { slug: "ts", entryName: "TypeScript" },
        { slug: "py", entryName: "Python" },
      ],
    },
    {
      sectionName: "Category",
      urlParam: "cat",
      selectedValue: "all",
      onChange: vi.fn(),
      options: [
        { slug: "all", entryName: "All Categories" },
        { slug: "web", entryName: "Web Development" },
      ],
    },
  ];

  const sampleSearchFilter: SearchFilter = {
    searchTerm: "test search",
    onChange: vi.fn(),
  };

  const sampleArchiveFilter: ArchiveFilter = {
    hasArchivedMaterials: true,
    showArchived: false,
    onToggle: vi.fn(),
  };

  describe("ArchiveToggle", () => {
    test("should render switch with label and handle toggle", () => {
      const onToggle = vi.fn();
      const html = renderToStaticMarkup(
        <ArchiveToggle showArchived={false} onToggle={onToggle} />,
      );

      expect(html).toContain("Display archived");
      expect(html).toContain('role="switch"');
      expect(html).toContain('aria-checked="false"');
    });

    test("should render checked state when showArchived is true", () => {
      const html = renderToStaticMarkup(
        <ArchiveToggle showArchived={true} onToggle={vi.fn()} />,
      );

      expect(html).toContain('aria-checked="true"');
    });
  });

  describe("FilterOptionItemAccordion", () => {
    test("should render categories and active option labels", () => {
      const html = renderToStaticMarkup(
        <FilterOptionItemAccordion filterCategories={sampleCategories} />,
      );

      expect(html).toContain("Language");
      expect(html).toContain("TypeScript");
      expect(html).toContain("Category");
      expect(html).toContain("All Categories");
      expect(html).toContain("Python");
      expect(html).toContain("Web Development");
    });
  });

  describe("FilterOptionItemCombobox", () => {
    test("should render combobox button with section and active option name", () => {
      const html = renderToStaticMarkup(
        <FilterOptionItemCombobox
          selectedFilterCategory={sampleCategories[0]}
        />,
      );

      expect(html).toContain("Language");
      expect(html).toContain("TypeScript");
      expect(html).toContain("Search Filter...");
      expect(html).toContain("No Filter Found.");
      expect(html).toContain("Python");
    });
  });

  describe("FilterOverlay", () => {
    test("should return null when not mounted", () => {
      mockUseIsMounted.mockReturnValue(false);

      const html = renderToStaticMarkup(
        <FilterOverlay
          filterCategories={sampleCategories}
          basePath="/projects"
          isOpen={true}
          toggle={vi.fn()}
          areFiltersApplied={false}
        />,
      );

      expect(html).toBe("");
    });

    test("should render mobile drawer when isDesktop is false", () => {
      mockUseMediaQuery.mockReturnValue(false);

      const html = renderToStaticMarkup(
        <FilterOverlay
          filterCategories={sampleCategories}
          basePath="/projects"
          isOpen={true}
          toggle={vi.fn()}
          areFiltersApplied={true}
          archiveFilter={sampleArchiveFilter}
        />,
      );

      expect(html).toContain("Filters");
      expect(html).toContain(
        "When applying filters, archived items are displayed automatically.",
      );
      expect(html).toContain("Clear All");
      expect(html).toContain("Display archived");
    });

    test("should render desktop side panel when isDesktop is true", () => {
      mockUseMediaQuery.mockReturnValue(true);

      const html = renderToStaticMarkup(
        <FilterOverlay
          filterCategories={sampleCategories}
          basePath="/projects"
          isOpen={true}
          toggle={vi.fn()}
          areFiltersApplied={false}
          archiveFilter={sampleArchiveFilter}
        />,
      );

      expect(html).toContain("Filters");
      expect(html).toContain("Clear All");
      expect(html).toContain("disabled");
    });
  });

  describe("FilterSection", () => {
    test("should render search input, filter trigger, clear button, and accordion trigger", () => {
      const html = renderToStaticMarkup(
        <FilterSection
          name="Projects"
          basePath="/projects"
          searchFilter={sampleSearchFilter}
          filterCategories={sampleCategories}
          areFiltersApplied={false}
        />,
      );

      expect(html).toContain("Search &amp; Filter Projects");
      expect(html).toContain(
        'placeholder="Search for Projects name or metadata"',
      );
      expect(html).toContain("Filters");
      expect(html).toContain("Clear All");
      expect(html).toContain("pointer-events-none opacity-50");
    });

    test("should render archive toggle and modified header message when archiveFilter has archived materials", () => {
      const html = renderToStaticMarkup(
        <FilterSection
          name="Certificates"
          basePath="/certificates"
          searchFilter={sampleSearchFilter}
          filterCategories={sampleCategories}
          areFiltersApplied={true}
          archiveFilter={sampleArchiveFilter}
        />,
      );

      expect(html).toContain("Search, Filter and View Archived Certificates");
      expect(html).toContain("Display archived");
      expect(html).not.toContain("pointer-events-none opacity-50");
    });
  });
});
