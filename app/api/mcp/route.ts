import { mcpHandler } from "@/lib/mcp/server";

/**
 * Route handler for Model Context Protocol (MCP) clients.
 * Supports both GET and POST requests per the Streamable HTTP specification.
 */
export { mcpHandler as GET, mcpHandler as POST };
