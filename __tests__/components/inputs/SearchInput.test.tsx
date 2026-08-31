import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import SearchInput from "@/components/inputs/SearchInput";

// Mock useIsMounted
const mockUseIsMounted = vi.fn(() => true);
vi.mock("@/hooks/useIsMounted", () => ({
  default: () => mockUseIsMounted(),
}));

describe("SearchInput Component Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseIsMounted.mockReturnValue(true);
  });

  test("returns null when not mounted", () => {
    mockUseIsMounted.mockReturnValue(false);
    const html = renderToStaticMarkup(
      <SearchInput searchTerm="test" updateSearchTerm={vi.fn()} />,
    );

    expect(html).toBe("");
  });

  test("renders input with active search term and clear button when mounted", () => {
    const handleUpdate = vi.fn();
    const html = renderToStaticMarkup(
      <SearchInput
        searchTerm="Next.js"
        updateSearchTerm={handleUpdate}
        placeholder="Filter articles..."
        className="custom-search-input"
      />,
    );

    expect(html).toContain('value="Next.js"');
    expect(html).toContain('placeholder="Filter articles..."');
    expect(html).toContain("custom-search-input");
    // Clear icon (X) should be rendered since searchTerm is not empty
    expect(html).toContain("<svg");
    // Button is not disabled
    expect(html).not.toContain("disabled");
    expect(html).toContain("cursor-pointer");
  });

  test("renders disabled submit button and no clear icon when searchTerm is empty", () => {
    const html = renderToStaticMarkup(
      <SearchInput searchTerm="" updateSearchTerm={vi.fn()} />,
    );

    expect(html).toContain('value=""');
    expect(html).toContain('placeholder="Search"');
    // Disabled send button styles
    expect(html).toContain("disabled");
    expect(html).toContain("cursor-not-allowed opacity-50");
  });

  test("forwards arbitrary HTML attributes to the input element", () => {
    const html = renderToStaticMarkup(
      <SearchInput
        searchTerm=""
        updateSearchTerm={vi.fn()}
        id="main-filter-input"
        name="filterQuery"
        autoComplete="off"
      />,
    );

    expect(html).toContain('id="main-filter-input"');
    expect(html).toContain('name="filterQuery"');
    expect(html.toLowerCase()).toContain('autocomplete="off"');
  });
});
