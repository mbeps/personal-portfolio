import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test, vi } from "vitest";
import SkillTag from "@/components/tags/SkillTag";
import Tag from "@/components/tags/Tag";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import * as skillUsageHelpers from "@/lib/material/skillUsageHelpers";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/current-page",
}));

describe("Tags Component Suite", () => {
  describe("Tag Component", () => {
    test("renders children text properly with standard base classes", () => {
      const html = renderToStaticMarkup(<Tag>TypeScript</Tag>);

      expect(html).toContain("TypeScript");
      expect(html).toContain("bg-gray-200");
      expect(html).toContain("dark:bg-red-950");
      expect(html).not.toContain("md:hover:border-gray-400");
      expect(html).not.toContain("cursor-pointer");
    });

    test("renders hover styles and arrow when hasHover is true", () => {
      const html = renderToStaticMarkup(<Tag hasHover={true}>React</Tag>);

      expect(html).toContain("React");
      expect(html).toContain("md:hover:border-gray-400");
      expect(html).toContain("cursor-pointer");
      expect(html).toContain("<svg");
    });

    test("renders hover styles and arrow when onClick is provided", () => {
      const handleClick = vi.fn();
      const html = renderToStaticMarkup(
        <Tag onClick={handleClick}>Clickable Tag</Tag>,
      );

      expect(html).toContain("Clickable Tag");
      expect(html).toContain("cursor-pointer");
      expect(html).toContain("<svg");
    });

    test("applies bounce-horizontal class when children is ellipsis '...'", () => {
      const html = renderToStaticMarkup(<Tag hasHover={true}>...</Tag>);

      expect(html).toContain("...");
      expect(html).toContain("bounce-horizontal");
    });

    test("does not apply bounce-horizontal class when children is normal text", () => {
      const html = renderToStaticMarkup(<Tag hasHover={true}>Python</Tag>);

      expect(html).toContain("Python");
      expect(html).not.toContain("bounce-horizontal");
    });

    test("forwards HTML attributes and ref correctly", () => {
      const html = renderToStaticMarkup(
        <Tag id="custom-tag-id" role="button" aria-label="Test Tag">
          Accessible Tag
        </Tag>,
      );

      expect(html).toContain('id="custom-tag-id"');
      expect(html).toContain('role="button"');
      expect(html).toContain('aria-label="Test Tag"');
      expect(html).toContain("Accessible Tag");
    });
  });

  describe("SkillTag Component", () => {
    test("returns empty fragment when hide is true", () => {
      const html = renderToStaticMarkup(
        <SkillTag skillKey={SkillDatabaseKeys.Python} hide={true} />,
      );
      expect(html).toBe("");
    });

    test("returns empty fragment when skillKey is not found in database", () => {
      const html = renderToStaticMarkup(
        <SkillTag skillKey={"non_existent_skill_key" as any} />,
      );
      expect(html).toBe("");
    });

    test("renders link to skill page when skill has associated material", () => {
      vi.spyOn(
        skillUsageHelpers,
        "isSkillAssociatedWithMaterial",
      ).mockReturnValue(true);

      const html = renderToStaticMarkup(
        <SkillTag skillKey={SkillDatabaseKeys.Python} />,
      );

      expect(html).toContain(`href="/skills/${SkillDatabaseKeys.Python}"`);
      expect(html).toContain("Python");
      expect(html).toContain("cursor-pointer");
    });

    test("renders static tag without skill link when skill has no associated material", () => {
      vi.spyOn(
        skillUsageHelpers,
        "isSkillAssociatedWithMaterial",
      ).mockReturnValue(false);

      const html = renderToStaticMarkup(
        <SkillTag skillKey={SkillDatabaseKeys.Python} />,
      );

      expect(html).not.toContain(`href="/skills/${SkillDatabaseKeys.Python}"`);
      expect(html).toContain("Python");
      expect(html).not.toContain("cursor-pointer");
    });
  });
});
