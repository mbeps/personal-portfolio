import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { DEVELOPER } from "@/config/developer-info";
import { PATHS } from "@/config/paths";
import BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import certificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import companyDatabaseMap from "@/database/companies/company-database-map";
import type CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/skill-database-map";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import GroupByOptions from "@/enums/skill/group-by-options";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import { formatToolResponse } from "@/lib/mcp/helpers";
import groupSkills from "@/lib/skills/group/group-skills";

/**
 * Registers the `get_cv` tool onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerCvTool(server: McpServer): void {
  server.registerTool(
    "get_cv",
    {
      title: "Get Full CV",
      description:
        "Retrieve structured CV snapshot covering bio summary, grouped skills, work experience, education, volunteering, and key projects.",
      inputSchema: z.object({
        includeArchived: z
          .boolean()
          .optional()
          .default(false)
          .describe("Whether to include archived items in the CV snapshot"),
      }),
    },
    async ({ includeArchived }) => {
      const aboutContent = getMarkdownFromFileSystem(PATHS.ABOUT.SHORT);

      const skillGroups = groupSkills(
        GroupByOptions.Category,
        skillDatabaseKeys,
        skillDatabaseMap,
      );

      const workExperience: Array<{
        role: string;
        company: string;
        location?: string;
        period: string;
        timeInRole?: string;
        skills: string[];
        responsibilities?: string;
      }> = [];

      const volunteeringExperience: Array<{
        role: string;
        company: string;
        location?: string;
        period: string;
        timeInRole?: string;
        skills: string[];
        responsibilities?: string;
      }> = [];

      for (const key of roleDatabaseKeys) {
        const role = rolesDatabase[key];
        if (!includeArchived && role.archived) {
          continue;
        }

        const company = companyDatabaseMap[role.company];
        const responsibilities = getMarkdownFromFileSystem(
          PATHS.ROLES(key).RESPONSIBILITIES,
        );

        const item = {
          role: role.name,
          company: company?.name ?? role.company,
          location: company?.location,
          period: `${role.startDate.toString()} - ${role.endDate.toString()}`,
          timeInRole: role.timeInRole,
          skills: role.skills.map((s) => s.toString()),
          responsibilities: responsibilities ?? undefined,
        };

        if (role.type === ExperienceTypeEnum.Volunteering) {
          volunteeringExperience.push(item);
        } else {
          workExperience.push(item);
        }
      }

      const courseKeys = Object.keys(courseDatabaseMap) as CourseDatabaseKeys[];
      const education = courseKeys.map((key) => {
        const course = courseDatabaseMap[key];
        return {
          degree: course.name,
          university: course.university,
          grade: course.grade,
          period: `${course.startYear} - ${course.endYear}`,
          modulesCount: course.modules.length,
          skills: course.skills,
        };
      });

      const projectKeys = Object.keys(
        projectDatabaseMap,
      ) as ProjectDatabaseKeys[];
      const projects = projectKeys
        .filter((key) => includeArchived || !projectDatabaseMap[key].archived)
        .map((key) => {
          const project = projectDatabaseMap[key];
          return {
            name: project.name,
            category: project.category,
            type: project.type,
            description: project.description.trim(),
            repositoryURL: project.repositoryURL,
            deploymentURL: project.deploymentURL,
            skills: project.skills,
          };
        });

      const cv = {
        developer: {
          name: DEVELOPER.NAME,
          location: DEVELOPER.LOCATION,
          subtitles: DEVELOPER.SUBTITLES,
          yearsOfExperience: DEVELOPER.EXPERIENCE,
          bio: aboutContent ?? "",
        },
        skillGroups: skillGroups.map((group) => ({
          category: group.skillCategoryName,
          skills: group.skills.map(
            (skillKey) => skillDatabaseMap[skillKey]?.name ?? skillKey,
          ),
        })),
        workExperience,
        volunteeringExperience,
        education,
        projects,
        counts: {
          totalCertificates: Object.keys(certificateDatabaseKeys).length,
          totalBlogs: Object.keys(BlogDatabaseKeys).length,
        },
      };

      return formatToolResponse(cv);
    },
  );
}
