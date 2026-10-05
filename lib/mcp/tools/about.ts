import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { DEVELOPER } from "@/config/developer-info";
import { PATHS } from "@/config/paths";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import companyDatabaseMap from "@/database/companies/company-database-map";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap from "@/database/courses/course-database-map";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import { formatToolResponse } from "@/lib/mcp/helpers";

/**
 * Registers the `get_about` tool onto the MCP server instance.
 *
 * @param server MCP server instance.
 */
export function registerAboutTool(server: McpServer): void {
  server.registerTool(
    "get_about",
    {
      title: "Get About Information",
      description:
        "Retrieve developer profile, background summary, years of experience, contact/socials, and bio.",
      inputSchema: z.object({
        format: z
          .enum(["summary", "short", "long"])
          .optional()
          .default("summary"),
      }),
    },
    async ({ format }) => {
      if (format === "short") {
        const shortBio = getMarkdownFromFileSystem(PATHS.ABOUT.SHORT);
        return formatToolResponse({
          developer: DEVELOPER.NAME,
          format: "short",
          bio: shortBio ?? "",
        });
      }

      if (format === "long") {
        const longBio = getMarkdownFromFileSystem(PATHS.ABOUT.LONG);
        return formatToolResponse({
          developer: DEVELOPER.NAME,
          format: "long",
          bio: longBio ?? "",
        });
      }

      const latestRoleKey = roleDatabaseKeys[0];
      const latestWorkExperience: RoleInterface | undefined =
        rolesDatabase[latestRoleKey];
      const latestRole = latestWorkExperience?.name ?? "Software Engineer";
      const latestCompany = latestWorkExperience
        ? companyDatabaseMap[latestWorkExperience.company]?.name
        : "Commerzbank";

      const undergraduate =
        courseDatabaseMap[CourseDatabaseKeys.RHUL_ComputerScience];
      const masters =
        courseDatabaseMap[CourseDatabaseKeys.KCL_ArtificialIntelligence];

      const summary = {
        name: DEVELOPER.NAME,
        location: DEVELOPER.LOCATION,
        subtitles: DEVELOPER.SUBTITLES,
        yearsOfExperience: DEVELOPER.EXPERIENCE,
        currentRole: `${latestRole} at ${latestCompany}`,
        education: {
          masters: masters
            ? `${masters.grade} in ${masters.name} (${masters.university})`
            : undefined,
          undergraduate: undergraduate
            ? `${undergraduate.grade} in ${undergraduate.name} (${undergraduate.university})`
            : undefined,
        },
        stats: {
          projectsCount: Object.keys(ProjectDatabaseKeys).length,
          certificatesCount: Object.keys(CertificateDatabaseKeys).length,
          rolesCount: roleDatabaseKeys.length,
        },
      };

      return formatToolResponse(summary);
    },
  );
}
