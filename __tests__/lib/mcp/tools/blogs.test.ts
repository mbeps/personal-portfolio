import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import { registerBlogsTools } from "@/lib/mcp/tools/blogs";

describe("MCP Tools: Blogs", () => {
  const server = new McpServer({ name: "test-server", version: "1.0.0" });
  registerBlogsTools(server);
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

  it("list_blogs returns published blog posts", async () => {
    const response = await tools.list_blogs.handler({
      archived: false,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.total).toBeGreaterThan(0);
    expect(data.blogs[0]).toHaveProperty("title");
    expect(data.blogs[0]).toHaveProperty("category");
  });

  it("get_blog returns metadata and markdown content", async () => {
    const listResponse = await tools.list_blogs.handler({ limit: 1 });
    const listData = JSON.parse(listResponse.content[0].text);
    const sampleKey = listData.blogs[0].key;

    const response = await tools.get_blog.handler({
      blogKey: sampleKey,
      includeContent: true,
    });
    const data = JSON.parse(response.content[0].text);
    expect(data.key).toBe(sampleKey);
    expect(typeof data.content).toBe("string");
  });
});
