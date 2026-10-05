import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/mcp/route";

/**
 * Helper to extract JSON-RPC message payload from Streamable HTTP SSE or JSON body.
 */
function parseMcpResponse(text: string) {
  for (const line of text.split("\n")) {
    if (line.startsWith("data:")) {
      return JSON.parse(line.slice(5).trim());
    }
  }
  return JSON.parse(text);
}

describe("MCP Route Handler: /api/mcp", () => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json, text/event-stream",
  };

  it("handles initialize handshake via POST", async () => {
    const request = new Request("http://localhost:3000/api/mcp", {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2024-11-05",
          capabilities: {},
          clientInfo: { name: "test-client", version: "1.0.0" },
        },
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const text = await response.text();
    const data = parseMcpResponse(text);
    expect(data.result).toBeDefined();
    expect(data.result.serverInfo.name).toBe("personal-portfolio-mcp");
    expect(data.result.serverInfo.icons).toBeDefined();
    expect(data.result.serverInfo.icons.length).toBeGreaterThanOrEqual(1);
    expect(data.result.serverInfo.icons[0].src).toContain("favicon.svg");
    expect(data.result.capabilities.tools).toBeDefined();
  });

  it("rejects POST request without required Accept header", async () => {
    const request = new Request("http://localhost:3000/api/mcp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 2,
        method: "initialize",
        params: {},
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(406);
  });
});
