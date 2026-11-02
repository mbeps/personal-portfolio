import { McpServer } from "@modelcontextprotocol/server";
import { describe, expect, it } from "vitest";
import { registerAllTools } from "@/lib/mcp/register-tools";

describe("registerAllTools", () => {
  it("marks every registered tool as read-only", () => {
    const server = new McpServer({ name: "test-server", version: "1.0.0" });
    registerAllTools(server);

    const tools = Object.entries(
      (
        server as unknown as {
          _registeredTools: Record<
            string,
            { annotations?: { readOnlyHint?: boolean } }
          >;
        }
      )._registeredTools,
    );

    expect(tools).toHaveLength(16);
    for (const [name, tool] of tools) {
      expect(tool.annotations?.readOnlyHint, name).toBe(true);
    }
  });
});
