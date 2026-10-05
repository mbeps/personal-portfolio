import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import { registerAboutTool } from "@/lib/mcp/tools/about";

describe("MCP Tool: get_about", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerAboutTool(server);
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
  )._registeredTools.get_about;

  it("returns developer summary facts", async () => {
    const response = await tool.handler({ format: "summary" });
    expect(response.content).toHaveLength(1);

    const data = JSON.parse(response.content[0].text);
    expect(data.name).toBe("Maruf Bepary");
    expect(data.location).toBe("London, United Kingdom");
    expect(data.yearsOfExperience).toBeGreaterThanOrEqual(1);
    expect(data.education.masters).toBeDefined();
    expect(data.stats.projectsCount).toBeGreaterThan(0);
  });

  it("returns short bio markdown", async () => {
    const response = await tool.handler({ format: "short" });
    const data = JSON.parse(response.content[0].text);
    expect(data.format).toBe("short");
    expect(data.developer).toBe("Maruf Bepary");
    expect(typeof data.bio).toBe("string");
  });

  it("returns long bio markdown", async () => {
    const response = await tool.handler({ format: "long" });
    const data = JSON.parse(response.content[0].text);
    expect(data.format).toBe("long");
    expect(data.developer).toBe("Maruf Bepary");
    expect(typeof data.bio).toBe("string");
  });
});
