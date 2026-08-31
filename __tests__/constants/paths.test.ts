import { describe, expect, test } from "vitest";
import { PATHS } from "@/constants/paths";
import BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import CompanyDatabaseKeys from "@/database/companies/company-database-keys";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import RoleDatabaseKeys from "@/database/roles/role-database-keys";

describe("PATHS constants", () => {
  test("should provide static path constants", () => {
    expect(PATHS.PROFILE).toBe("/profile.png");
    expect(PATHS.ABOUT.SHORT).toBe("public/about/short.md");
    expect(PATHS.ABOUT.LONG).toBe("public/about/long.md");
  });

  test("should resolve dynamic path functions", () => {
    expect(PATHS.COMPANY.LOGO(CompanyDatabaseKeys.Commerzbank)).toBe(
      `/companies/${CompanyDatabaseKeys.Commerzbank}/logo.png`,
    );

    const projPaths = PATHS.PROJECTS(ProjectDatabaseKeys.ForumDiscussions);
    expect(projPaths.COVER).toBe(
      `/projects/${ProjectDatabaseKeys.ForumDiscussions}/cover.png`,
    );
    expect(projPaths.FEATURES).toBe(
      `public/projects/${ProjectDatabaseKeys.ForumDiscussions}/features.md`,
    );
    expect(projPaths.BLOG).toBe(
      `public/projects/${ProjectDatabaseKeys.ForumDiscussions}/blog.md`,
    );
    expect(projPaths.BLOG_IMG).toBe(
      `/projects/${ProjectDatabaseKeys.ForumDiscussions}/img`,
    );
    expect(projPaths.MEDIA.NORMAL).toBe(
      `/projects/${ProjectDatabaseKeys.ForumDiscussions}/media`,
    );
    expect(projPaths.MEDIA.PUBLIC).toBe(
      `public/projects/${ProjectDatabaseKeys.ForumDiscussions}/media`,
    );

    const rolePaths = PATHS.ROLES(RoleDatabaseKeys.CommerzbankAiEngineer);
    expect(rolePaths.RESPONSIBILITIES).toBe(
      `public/roles/${RoleDatabaseKeys.CommerzbankAiEngineer}/responsibilities.md`,
    );

    expect(
      PATHS.CERTIFICATES(CertificateDatabaseKeys.UdemyMachineLearningAtoZ),
    ).toBe(
      `/certificates/${CertificateDatabaseKeys.UdemyMachineLearningAtoZ}.jpg`,
    );

    const eduPaths = PATHS.EDUCATION(
      CourseDatabaseKeys.KCL_ArtificialIntelligence,
    );
    expect(eduPaths.LOGO).toBe(
      `/education/${CourseDatabaseKeys.KCL_ArtificialIntelligence}/logo.png`,
    );
    expect(eduPaths.CERTIFICATE).toBe(
      `/education/${CourseDatabaseKeys.KCL_ArtificialIntelligence}/certificate.jpg`,
    );

    const blogPaths = PATHS.BLOGS(BlogDatabaseKeys.MachineLearningFoundations);
    expect(blogPaths.BLOG).toBe(
      `public/blogs/${BlogDatabaseKeys.MachineLearningFoundations}/blog.md`,
    );
    expect(blogPaths.IMG).toBe(
      `/blogs/${BlogDatabaseKeys.MachineLearningFoundations}/img`,
    );
  });
});
