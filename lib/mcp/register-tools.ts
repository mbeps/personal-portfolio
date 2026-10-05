import type { McpServer } from "@modelcontextprotocol/server";
import { registerAboutTool } from "@/lib/mcp/tools/about";
import { registerBlogsTools } from "@/lib/mcp/tools/blogs";
import { registerCertificatesTools } from "@/lib/mcp/tools/certificates";
import { registerCvTool } from "@/lib/mcp/tools/cv";
import { registerEducationTools } from "@/lib/mcp/tools/education";
import { registerExperienceTools } from "@/lib/mcp/tools/experience";
import { registerProjectsTools } from "@/lib/mcp/tools/projects";
import { registerSearchTool } from "@/lib/mcp/tools/search";
import { registerSkillsTools } from "@/lib/mcp/tools/skills";

/**
 * Registers all portfolio tools onto the provided MCP server instance.
 *
 * @param server MCP server instance.
 */
export function registerAllTools(server: McpServer): void {
  registerAboutTool(server);
  registerProjectsTools(server);
  registerSkillsTools(server);
  registerExperienceTools(server);
  registerEducationTools(server);
  registerCertificatesTools(server);
  registerBlogsTools(server);
  registerCvTool(server);
  registerSearchTool(server);
}
