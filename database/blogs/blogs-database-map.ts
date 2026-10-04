import BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import type BlogInterface from "@/database/blogs/blog-interface";
import ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import BlogCategoriesEnum from "@/enums/blog/blog-categories-enum";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import validateDatabaseKeys from "@/lib/database/validate-database-keys";
import addNestedSkillsMaterialList from "@/lib/material/add-nested-skills-material-list";
import type Database from "@/types/database/database";
import RoleDatabaseKeys from "../roles/role-database-keys";
import SkillDatabaseKeys from "../skills/skill-database-keys";

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  //^ Artificial Intelligence Blogs
  [ProjectDatabaseKeys.AlignmentInLargeLanguageModels]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
      .name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
        .description,
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills:
      projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
        .skills,
    relatedMaterials: [
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
      ModuleDatabaseKeys.KCL_IndividualProject,
    ],
  },

  //^ Work
  [BlogDatabaseKeys.CommerzbankMigrationToBDK]: {
    name: "Commerzbank Migration to BDK",
    subtitle:
      "A case study on the migration of legacy bot codebase to the BDK platform",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
    ],
    relatedMaterials: [RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer],
  },

  //^ Projects Blogs
  [ProjectDatabaseKeys.ForumDiscussions]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].skills,
  },
  [ProjectDatabaseKeys.SymphonyTranslateBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].skills,
  },
  [ProjectDatabaseKeys.SymphonyWebhookBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].skills,
  },

  [ProjectDatabaseKeys.OsmosGame]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].name,
    subtitle: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].skills,
  },
  [ProjectDatabaseKeys.JavaCalculatorAssignment]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment]
        .description,
    category: BlogCategoriesEnum.Projects,
    skills:
      projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment].skills,
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogDatabaseKeys: BlogDatabaseKeys[] = Object.keys(
  blogsMap,
) as BlogDatabaseKeys[];

// Validate that all blog keys only contain alphanumeric characters and dashes
validateDatabaseKeys(blogDatabaseKeys);

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogsDatabaseMap: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology,
  );

export default blogsDatabaseMap;
