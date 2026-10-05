import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import { registerSearchTool } from "@/lib/mcp/tools/search";

describe("MCP Tool: search_portfolio", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerSearchTool(server);
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
  )._registeredTools.search_portfolio;

  it("finds matching results across multiple material types", async () => {
    const response = await tool.handler({ query: "Python", limit: 10 });
    const data = JSON.parse(response.content[0].text);

    expect(data.query).toBe("Python");
    expect(data.total).toBeGreaterThan(0);
    expect(data.results[0]).toHaveProperty("key");
    expect(data.results[0]).toHaveProperty("type");
    expect(data.results[0]).toHaveProperty("skills");
  });

  it("filters search results by materialType", async () => {
    const response = await tool.handler({
      query: "Engineering",
      materialType: "project",
      limit: 10,
    });
    const data = JSON.parse(response.content[0].text);

    for (const item of data.results) {
      expect(item.type).toBe("project");
    }
  });
});
