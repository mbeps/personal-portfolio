import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import ProjectCategoriesEnum from "@/enums/project/project-categories-enum";
import ProjectTypeEnum from "@/enums/project/project-type-enum";
import { registerProjectsTools } from "@/lib/mcp/tools/projects";

describe("MCP Tools: Projects", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerProjectsTools(server);
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

  describe("list_projects", () => {
    it("returns list of projects with default parameters", async () => {
      const response = await tools.list_projects.handler({
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      expect(Array.isArray(data.projects)).toBe(true);
      expect(data.projects[0]).toHaveProperty("key");
      expect(data.projects[0]).toHaveProperty("name");
      expect(data.projects[0]).toHaveProperty("skills");
    });

    it("filters projects by category", async () => {
      const response = await tools.list_projects.handler({
        category: ProjectCategoriesEnum.FullStackWebDevelopment,
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      for (const project of data.projects) {
        expect(project.category).toBe(
          ProjectCategoriesEnum.FullStackWebDevelopment,
        );
      }
    });

    it("filters projects by project type", async () => {
      const response = await tools.list_projects.handler({
        type: ProjectTypeEnum.Academic,
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      for (const project of data.projects) {
        expect(project.type).toBe(ProjectTypeEnum.Academic);
      }
    });

    it("filters projects by skill", async () => {
      const response = await tools.list_projects.handler({
        skill: "typescript",
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThan(0);
      for (const project of data.projects) {
        expect(project.skills).toContain("typescript");
      }
    });

    it("respects limit parameter", async () => {
      const response = await tools.list_projects.handler({
        limit: 3,
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.projects).toHaveLength(3);
    });

    it("filters projects using search query", async () => {
      const response = await tools.list_projects.handler({
        search: "Forum Discussions",
        archived: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.total).toBeGreaterThanOrEqual(1);
      expect(
        data.projects.some(
          (p: { name: string }) => p.name === "Forum Discussions",
        ),
      ).toBe(true);
    });
  });

  describe("get_project", () => {
    it("returns project details for valid projectKey", async () => {
      const response = await tools.get_project.handler({
        projectKey: "forum-discussions",
        includeWriteup: false,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.key).toBe("forum-discussions");
      expect(data.name).toBe("Forum Discussions");
      expect(data.repositoryURL).toBeDefined();
    });

    it("returns writeup when includeWriteup is true", async () => {
      const response = await tools.get_project.handler({
        projectKey: "forum-discussions",
        includeWriteup: true,
      });
      const data = JSON.parse(response.content[0].text);
      expect(data.features).toBeDefined();
    });

    it("returns error response for unknown projectKey", async () => {
      const response = await tools.get_project.handler({
        projectKey: "non-existent-project-key",
      });
      expect(response.isError).toBe(true);
      const data = JSON.parse(response.content[0].text);
      expect(data.error).toContain("not found");
    });
  });
});
