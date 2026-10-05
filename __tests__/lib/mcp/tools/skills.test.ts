import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import { registerSkillsTools } from "@/lib/mcp/tools/skills";

describe("MCP Tools: Skills", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerSkillsTools(server);
  const tools = (
    server as unknown as {
      _registeredTools: Record<
        string,
        {
          handler: (
            args: unknown,
          ) => Promise<{ content: Array<{ text: string }>; isError?: boolean }>;
        }
      >;
    }
  )._registeredTools;

  describe("list_skills", () => {
    it("lists skills with metadata and usage counts", async () => {
      const response = await tools.list_skills.handler({});
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      expect(data.skills[0]).toHaveProperty("name");
      expect(data.skills[0]).toHaveProperty("category");
      expect(data.skills[0]).toHaveProperty("skillType");
      expect(data.skills[0]).toHaveProperty("materialUsageCount");
    });

    it("filters skills by category", async () => {
      const response = await tools.list_skills.handler({
        category: SkillCategoriesEnum.ProgrammingLanguages,
      });
      const data = JSON.parse(response.content[0].text);
      for (const skill of data.skills) {
        expect(skill.category).toBe(SkillCategoriesEnum.ProgrammingLanguages);
      }
    });

    it("filters skills by skillType", async () => {
      const response = await tools.list_skills.handler({
        type: SkillTypesEnum.Technology,
      });
      const data = JSON.parse(response.content[0].text);
      for (const skill of data.skills) {
        expect(skill.skillType).toBe(SkillTypesEnum.Technology);
      }
    });

    it("filters skills by isMainSkill", async () => {
      const response = await tools.list_skills.handler({
        isMainSkill: true,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      for (const skill of data.skills) {
        expect(skill.isMainSkill).toBe(true);
      }
    });
  });

  describe("get_skill", () => {
    it("returns skill details and related materials", async () => {
      const response = await tools.get_skill.handler({
        skillKey: "python",
        includeRelatedMaterials: true,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.key).toBe("python");
      expect(data.name).toBe("Python");
      expect(data.relatedMaterials).toBeDefined();
      expect(data.relatedMaterials.total).toBeGreaterThan(0);
    });

    it("returns error for unknown skill", async () => {
      const response = await tools.get_skill.handler({
        skillKey: "non-existent-skill-slug",
      });
      expect(response.isError).toBe(true);
      const data = JSON.parse(response.content[0].text);
      expect(data.error).toContain("not found");
    });
  });
});
