import { createMcpHandler } from "mcp-handler";
import { registerAllTools } from "@/lib/mcp/register-tools";

/**
 * Shared MCP handler adapter configured with all portfolio tools and metadata.
 * Serves both 2026-07-28 stateless MCP protocol and legacy Streamable HTTP transports.
 */
export const mcpHandler = createMcpHandler(
  (server) => {
    registerAllTools(server);
  },
  {
    serverInfo: {
      name: "personal-portfolio-mcp",
      version: "1.0.0",
    },
  },
);

export default mcpHandler;
