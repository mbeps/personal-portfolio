import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import { registerExperienceTools } from "@/lib/mcp/tools/experience";

describe("MCP Tools: Experience", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerExperienceTools(server);
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

  describe("list_experience", () => {
    it("returns experience roles with company and readable dates", async () => {
      const response = await tools.list_experience.handler({
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      expect(data.experience[0]).toHaveProperty("role");
      expect(data.experience[0]).toHaveProperty("company");
      expect(data.experience[0]).toHaveProperty("startDate");
      expect(data.experience[0]).toHaveProperty("endDate");
    });

    it("filters roles by employment type", async () => {
      const response = await tools.list_experience.handler({
        type: ExperienceTypeEnum.FullTime,
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      for (const item of data.experience) {
        expect(item.type).toBe(ExperienceTypeEnum.FullTime);
      }
    });

    it("filters roles using search query", async () => {
      const response = await tools.list_experience.handler({
        search: "Commerzbank",
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThanOrEqual(1);
    });
  });

  describe("get_experience_role", () => {
    it("returns role details with company and markdown responsibilities", async () => {
      const response = await tools.get_experience_role.handler({
        roleKey: "commerzbank-full-stack-software-engineer",
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.key).toBe("commerzbank-full-stack-software-engineer");
      expect(data.company.name).toBe("Commerzbank");
      expect(typeof data.responsibilities).toBe("string");
    });

    it("returns error for unknown role key", async () => {
      const response = await tools.get_experience_role.handler({
        roleKey: "non-existent-role-key",
      });
      expect(response.isError).toBe(true);
      const data = JSON.parse(response.content[0].text);
      expect(data.error).toContain("not found");
    });
  });
});
