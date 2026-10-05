import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import type CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/course-database-map";
import type ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import moduleDatabaseMap from "@/database/modules/module-database-map";
import ModuleYearGroupsEnum from "@/enums/module/module-year-groups-enum";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";

/**
 * Registers `list_education`, `get_course`, and `list_modules` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerEducationTools(server: McpServer): void {
  server.registerTool(
    "list_education",
    {
      title: "List Educational Qualifications",
      description:
        "List degrees and academic qualifications (institutions, grades, years, and skills).",
      inputSchema: z.object({}),
    },
    async () => {
      const courses = courseDatabaseKeys.map((key) => {
        const course = courseDatabaseMap[key];
        return {
          key,
          name: course.name,
          university: course.university,
          grade: course.grade,
          score: course.score,
          period: `${course.startYear} - ${course.endYear}`,
          modulesCount: course.modules.length,
          skills: course.skills,
        };
      });

      return formatToolResponse({
        total: courses.length,
        education: courses,
      });
    },
  );

  server.registerTool(
    "get_course",
    {
      title: "Get Course Details",
      description:
        "Retrieve details for a specific degree course along with all associated modules.",
      inputSchema: z.object({
        courseKey: z.string().describe("Unique identifier key for the course"),
      }),
    },
    async ({ courseKey }) => {
      const course = courseDatabaseMap[courseKey as CourseDatabaseKeys];
      if (!course) {
        return formatToolResponse(
          { error: `Course '${courseKey}' not found.` },
          true,
        );
      }

      const moduleDetails = course.modules.map((modKey) => {
        const mod = moduleDatabaseMap[modKey];
        return {
          key: modKey,
          name: mod?.name ?? modKey,
          category: mod?.category,
          score: mod?.score,
          skills: mod?.skills ?? [],
        };
      });

      return formatToolResponse({
        key: courseKey,
        name: course.name,
        university: course.university,
        grade: course.grade,
        score: course.score,
        period: `${course.startYear} - ${course.endYear}`,
        skills: course.skills,
        modules: moduleDetails,
      });
    },
  );

  server.registerTool(
    "list_modules",
    {
      title: "List University Modules",
      description:
        "List and filter university modules studied, grades achieved, year group, and skills developed.",
      inputSchema: z.object({
        courseKey: z.string().optional(),
        yearGroup: z.nativeEnum(ModuleYearGroupsEnum).optional(),
        search: z.string().optional(),
      }),
    },
    async ({ courseKey, yearGroup, search }) => {
      let keys = Object.keys(moduleDatabaseMap) as ModuleDatabaseKeys[];

      if (courseKey) {
        keys = keys.filter(
          (key) => moduleDatabaseMap[key]?.parentCourse === courseKey,
        );
      }

      if (yearGroup) {
        keys = keys.filter(
          (key) => moduleDatabaseMap[key]?.category === yearGroup,
        );
      }

      if (search && search.trim() !== "") {
        const matched = searchDatabase(
          moduleDatabaseMap,
          search,
          ["name", "category", "skills"],
          { skills: (item) => item.skills.map((s) => s.toString()) },
        );
        const set = new Set(matched);
        keys = keys.filter((k) => set.has(k));
      }

      const modules = keys.map((key) => {
        const mod = moduleDatabaseMap[key];
        return {
          key,
          name: mod.name,
          course: mod.parentCourse,
          yearGroup: mod.category,
          score: mod.score,
          learningOutcomes: mod.learningOutcomes,
          skills: mod.skills,
        };
      });

      return formatToolResponse({
        total: modules.length,
        modules,
      });
    },
  );
}
