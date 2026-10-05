import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import { registerEducationTools } from "@/lib/mcp/tools/education";

describe("MCP Tools: Education", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerEducationTools(server);
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

  it("list_education returns academic degrees", async () => {
    const response = await tools.list_education.handler({});
    const data = JSON.parse(response.content[0].text);
    expect(data.total).toBe(2);
    expect(
      data.education.some((c: { university: string }) =>
        c.university.includes("King's College London"),
      ),
    ).toBe(true);
    expect(
      data.education.some((c: { university: string }) =>
        c.university.includes("Royal Holloway"),
      ),
    ).toBe(true);
  });

  it("get_course returns course details with modules", async () => {
    const response = await tools.get_course.handler({
      courseKey: CourseDatabaseKeys.KCL_ArtificialIntelligence,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.name).toBe("Artificial Intelligence");
    expect(data.modules.length).toBeGreaterThan(0);
  });

  it("list_modules returns modules and filters by courseKey", async () => {
    const response = await tools.list_modules.handler({
      courseKey: CourseDatabaseKeys.KCL_ArtificialIntelligence,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.total).toBeGreaterThan(0);
    for (const mod of data.modules) {
      expect(mod.course).toBe(CourseDatabaseKeys.KCL_ArtificialIntelligence);
    }
  });
});
