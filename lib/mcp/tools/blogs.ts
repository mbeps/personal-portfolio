import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { PATHS } from "@/config/paths";
import type BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import type BlogInterface from "@/database/blogs/blog-interface";
import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import BlogCategoriesEnum from "@/enums/blog/blog-categories-enum";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";
import resolveSkillKey from "@/lib/skills/resolve-skill-key";

/**
 * Registers `list_blogs` and `get_blog` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerBlogsTools(server: McpServer): void {
  server.registerTool(
    "list_blogs",
    {
      title: "List Blog Articles",
      description:
        "List and filter technical blog articles by category, skill, archived status, or search query.",
      inputSchema: z.object({
        category: z.nativeEnum(BlogCategoriesEnum).optional(),
        skill: z.string().optional(),
        archived: z.boolean().optional().default(false),
        search: z.string().optional(),
        limit: z.number().int().positive().optional(),
      }),
    },
    async ({ category, skill, archived, search, limit }) => {
      let keys = Object.keys(blogsDatabaseMap) as BlogDatabaseKeys[];

      // Filter archived
      keys = filterMaterialByArchivedStatus<BlogInterface>(
        archived,
        keys,
        blogsDatabaseMap,
      ) as BlogDatabaseKeys[];

      // Filter by category
      if (category) {
        keys = filterMaterialByCategory<BlogInterface>(
          category,
          keys,
          blogsDatabaseMap,
        ) as BlogDatabaseKeys[];
      }

      // Filter by skill
      if (skill) {
        const resolvedSkill = resolveSkillKey(skill);
        if (resolvedSkill) {
          keys = filterMaterialBySkill<BlogInterface>(
            resolvedSkill,
            keys,
            blogsDatabaseMap,
          ) as BlogDatabaseKeys[];
        } else {
          const lowerSkill = skill.toLowerCase().trim();
          keys = keys.filter((key) => {
            const blog = blogsDatabaseMap[key];
            return blog.skills.some((s) =>
              s.toLowerCase().includes(lowerSkill),
            );
          });
        }
      }

      // Search query
      if (search && search.trim() !== "") {
        const matched = searchDatabase(
          blogsDatabaseMap,
          search,
          ["name", "subtitle", "category", "skills"],
          { skills: (item) => item.skills.map((s) => s.toString()) },
        );
        const set = new Set(matched);
        keys = keys.filter((k) => set.has(k));
      }

      if (limit && limit > 0) {
        keys = keys.slice(0, limit);
      }

      const blogs = keys.map((key) => {
        const blog = blogsDatabaseMap[key];
        return {
          key,
          title: blog.name,
          subtitle: blog.subtitle,
          category: blog.category,
          skills: blog.skills,
          archived: Boolean(blog.archived),
        };
      });

      return formatToolResponse({
        total: blogs.length,
        blogs,
      });
    },
  );

  server.registerTool(
    "get_blog",
    {
      title: "Get Blog Post",
      description:
        "Retrieve metadata and full markdown article content for a specific blog post.",
      inputSchema: z.object({
        blogKey: z.string().describe("Unique identifier key for the blog"),
        includeContent: z
          .boolean()
          .optional()
          .default(true)
          .describe("Include full markdown content of the article"),
      }),
    },
    async ({ blogKey, includeContent }) => {
      const blog = blogsDatabaseMap[blogKey as BlogDatabaseKeys];
      if (!blog) {
        return formatToolResponse(
          { error: `Blog '${blogKey}' not found.` },
          true,
        );
      }

      const result: Record<string, unknown> = {
        key: blogKey,
        title: blog.name,
        subtitle: blog.subtitle,
        category: blog.category,
        skills: blog.skills,
        archived: Boolean(blog.archived),
      };

      if (includeContent) {
        const blogMarkdown = getMarkdownFromFileSystem(
          PATHS.BLOGS(blogKey as BlogDatabaseKeys).BLOG,
        );
        result.content = blogMarkdown ?? "";
      }

      return formatToolResponse(result);
    },
  );
}
