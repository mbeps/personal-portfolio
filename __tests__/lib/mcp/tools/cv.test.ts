import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import { registerCvTool } from "@/lib/mcp/tools/cv";

describe("MCP Tool: get_cv", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerCvTool(server);
  const tool = (
    server as unknown as {
      _registeredTools: Record<
        string,
        {
          handler: (
            args: unknown,
          ) => Promise<{ content: Array<{ text: string }> }>;
        }
      >;
    }
  )._registeredTools.get_cv;

  it("returns full structured CV payload", async () => {
    const response = await tool.handler({ includeArchived: false });
    const data = JSON.parse(response.content[0].text);

    expect(data.developer.name).toBe("Maruf Bepary");
    expect(data.skillGroups.length).toBeGreaterThan(0);
    expect(data.workExperience.length).toBeGreaterThan(0);
    expect(data.education.length).toBeGreaterThan(0);
    expect(data.projects.length).toBeGreaterThan(0);
    expect(data.counts.totalCertificates).toBeGreaterThan(0);
  });
});
