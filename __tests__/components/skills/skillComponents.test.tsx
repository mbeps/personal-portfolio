import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import CategorySkillDisplay from "@/components/skills/category-skill-display";
import SkillTableSection from "@/components/skills/skill-table-section";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import type CategorisedSkillsInterface from "@/interfaces/skills/categorised-skills-interface";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/list-of-categorised-skills-by-type-interface";

const { mockUseIsMounted, mockUseMediaQuery } = vi.hoisted(() => ({
  mockUseIsMounted: vi.fn(),
  mockUseMediaQuery: vi.fn(),
}));

vi.mock("@/hooks/use-is-mounted", () => ({
  default: () => mockUseIsMounted(),
}));

vi.mock("@/hooks/use-media-query", () => ({
  useMediaQuery: (query: string) => mockUseMediaQuery(query),
}));

describe("Skill Components", () => {
  beforeEach(() => {
    mockUseIsMounted.mockReturnValue(true);
    mockUseMediaQuery.mockReturnValue(false);
  });

  const sampleCategorisedSkills: CategorisedSkillsInterface[] = [
    {
      skillCategoryName: "Programming Languages",
      skills: [
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.TypeScript,
        SkillDatabaseKeys.JavaScript,
        SkillDatabaseKeys.Java,
      ],
    },
    {
      skillCategoryName: "Web Frameworks",
      skills: [
        SkillDatabaseKeys.ReactJs,
        SkillDatabaseKeys.NextJs,
        SkillDatabaseKeys.FastApi,
      ],
    },
  ];

  describe("CategorySkillDisplay", () => {
    test("should render skills with category headings when multiple categories exist", () => {
      const html = renderToStaticMarkup(
        <CategorySkillDisplay skillCategories={sampleCategorisedSkills} />,
      );

      expect(html).toContain("Programming Languages");
      expect(html).toContain("Web Frameworks");
      expect(html).toContain("Python");
      expect(html).toContain("TypeScript");
      expect(html).toContain("React.JS");
      expect(html).toContain("Next.JS");
    });

    test("should omit category headings when only one category is provided", () => {
      const singleCategory: CategorisedSkillsInterface[] = [
        {
          skillCategoryName: "Languages",
          skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.TypeScript],
        },
      ];

      const html = renderToStaticMarkup(
        <CategorySkillDisplay skillCategories={singleCategory} />,
      );

      expect(html).not.toContain("<h4>Languages</h4>");
      expect(html).toContain("Python");
      expect(html).toContain("TypeScript");
    });

    test("should deduplicate skills in category lists", () => {
      const duplicateCategory: CategorisedSkillsInterface[] = [
        {
          skillCategoryName: "Languages",
          skills: [
            SkillDatabaseKeys.Python,
            SkillDatabaseKeys.Python,
            SkillDatabaseKeys.TypeScript,
          ],
        },
      ];

      const html = renderToStaticMarkup(
        <CategorySkillDisplay skillCategories={duplicateCategory} />,
      );

      // Should contain Python
      expect(html).toContain("Python");
    });

    test("should render expand/collapse button when skills exceed max limit", () => {
      const manyCategories: CategorisedSkillsInterface[] = Array.from(
        { length: 5 },
        (_, i) => ({
          skillCategoryName: `Category ${i + 1}`,
          skills: [
            SkillDatabaseKeys.Python,
            SkillDatabaseKeys.TypeScript,
            SkillDatabaseKeys.JavaScript,
            SkillDatabaseKeys.Java,
            SkillDatabaseKeys.C,
            SkillDatabaseKeys.Haskell,
          ],
        }),
      );

      const html = renderToStaticMarkup(
        <CategorySkillDisplay skillCategories={manyCategories} />,
      );

      expect(html).toContain("Show More");
    });
  });

  describe("SkillTableSection", () => {
    test("should return null when not mounted or when there are no skills", () => {
      mockUseIsMounted.mockReturnValue(false);

      const emptyGroups: ListOfCategorisedSkillsByTypeInterface[] = [];
      const notMountedHtml = renderToStaticMarkup(
        <SkillTableSection allGroupedSkills={emptyGroups} />,
      );
      expect(notMountedHtml).toBe("");

      mockUseIsMounted.mockReturnValue(true);
      const mountedEmptyHtml = renderToStaticMarkup(
        <SkillTableSection allGroupedSkills={emptyGroups} />,
      );
      expect(mountedEmptyHtml).toBe("");
    });

    test("should render tabs and skill categories when skills are present", () => {
      const groupedByType: ListOfCategorisedSkillsByTypeInterface[] = [
        {
          title: "Technical Skills",
          skillCategories: sampleCategorisedSkills,
        },
      ];

      const html = renderToStaticMarkup(
        <SkillTableSection allGroupedSkills={groupedByType} />,
      );

      expect(html).toContain("Technical Skills");
      expect(html).toContain("Programming Languages");
      expect(html).toContain("Web Frameworks");
      expect(html).toContain("Python");
      expect(html).toContain("React");
    });
  });
});
