import { describe, expect, test } from "vitest";
import { NAV_ITEMS, ROUTES } from "@/constants/routes";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

describe("ROUTES & NAV_ITEMS constants", () => {
  test("should provide valid static route configurations", () => {
    expect(ROUTES.HOME.path).toBe("/");
    expect(ROUTES.HOME.name).toBe("Home");
    expect(ROUTES.ABOUT.path).toBe("/about");
    expect(ROUTES.ABOUT.name).toBe("About");
    expect(ROUTES.CV.path).toBe("/cv");
    expect(ROUTES.MORE.path).toBe("/more");
    expect(ROUTES.MORE.isMain).toBe(true);
  });

  test("should generate correct dynamic route URLs", () => {
    expect(ROUTES.SKILLS.detail(SkillDatabaseKeys.TypeScript)).toBe(
      `/skills/${SkillDatabaseKeys.TypeScript}`,
    );

    expect(ROUTES.PROJECTS.detail(ProjectDatabaseKeys.ForumDiscussions)).toBe(
      `/projects/${ProjectDatabaseKeys.ForumDiscussions}`,
    );

    expect(ROUTES.PROJECTS.report(ProjectDatabaseKeys.ForumDiscussions)).toBe(
      `/projects/${ProjectDatabaseKeys.ForumDiscussions}/report`,
    );

    expect(
      ROUTES.EXPERIENCE.detail(RoleDatabaseKeys.CommerzbankAiEngineer),
    ).toBe(`/experience/${RoleDatabaseKeys.CommerzbankAiEngineer}`);

    expect(
      ROUTES.EDUCATION.detail(CourseDatabaseKeys.KCL_ArtificialIntelligence),
    ).toBe(`/education/${CourseDatabaseKeys.KCL_ArtificialIntelligence}`);

    expect(
      ROUTES.EDUCATION.module(
        CourseDatabaseKeys.KCL_ArtificialIntelligence,
        ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
      ),
    ).toBe(
      `/education/${CourseDatabaseKeys.KCL_ArtificialIntelligence}/${ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking}`,
    );

    expect(
      ROUTES.CERTIFICATES.detail(
        CertificateDatabaseKeys.UdemyMachineLearningAtoZ,
      ),
    ).toBe(`/certificates/${CertificateDatabaseKeys.UdemyMachineLearningAtoZ}`);

    expect(
      ROUTES.BLOGS.detail(BlogDatabaseKeys.MachineLearningFoundations),
    ).toBe(`/blogs/${BlogDatabaseKeys.MachineLearningFoundations}`);
  });

  test("should construct NAV_ITEMS with mapped labels and paths", () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
    const homeNav = NAV_ITEMS.find((item) => item.path === "/");
    expect(homeNav).toBeDefined();
    expect(homeNav?.label).toBe("Home");

    const mainItems = NAV_ITEMS.filter((item) => item.isMain);
    expect(mainItems.length).toBeGreaterThanOrEqual(4);
  });
});
