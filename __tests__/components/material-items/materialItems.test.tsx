import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test, vi } from "vitest";
import BlogItem from "@/components/material-items/blog-item";
import CertificateItem from "@/components/material-items/certificate-item";
import CourseItem from "@/components/material-items/course-item";
import ProjectItem from "@/components/material-items/project-item";
import WorkItem from "@/components/material-items/work-item";
import BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap from "@/database/courses/course-database-map";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase from "@/database/roles/role-database-map";

vi.mock("@/components/shadcn/ui/tooltip", () => ({
  Tooltip: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children, render }: any) => (
    <div>{render || children}</div>
  ),
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  TooltipProvider: ({ children }: any) => <div>{children}</div>,
}));

describe("Material Items", () => {
  describe("BlogItem", () => {
    test("should render blog item with title, subtitle, and link to blog detail page", () => {
      const blogKey = BlogDatabaseKeys.MachineLearningFoundations;
      const blogData = blogsDatabaseMap[blogKey];

      const html = renderToStaticMarkup(<BlogItem blogKey={blogKey} />);

      expect(html).toContain(`/blogs/${blogKey}`);
      expect(html).toContain(blogData.name);
      expect(html).toContain(blogData.subtitle);
      expect(html).toContain("rounded-xl");
    });

    test("should render different blog keys properly", () => {
      const blogKey = BlogDatabaseKeys.DesignPatterns;
      const blogData = blogsDatabaseMap[blogKey];

      const html = renderToStaticMarkup(<BlogItem blogKey={blogKey} />);

      expect(html).toContain(`/blogs/${blogKey}`);
      expect(html).toContain(blogData.name);
      expect(html).toContain(blogData.subtitle);
    });
  });

  describe("CertificateItem", () => {
    test("should render certificate name, issuer, image, and detail link", () => {
      const certKey = CertificateDatabaseKeys.UdemyMachineLearningAtoZ;
      const certData = certificateDatabaseMap[certKey];

      const html = renderToStaticMarkup(
        <CertificateItem certificateKey={certKey} />,
      );

      expect(html).toContain(certData.name);
      expect(html).toContain(certData.issuer);
      expect(html).toContain(`/certificates/${certKey}`);
      expect(html).toContain("img");
      expect(html).toContain(`${certData.name} certificate image`);
      expect(html).toContain("View Certificate Details");
    });

    test("should render external credential provider link when certificateURL is present", () => {
      const certKey = CertificateDatabaseKeys.UdemyMachineLearningAtoZ;
      const certData = certificateDatabaseMap[certKey];

      const html = renderToStaticMarkup(
        <CertificateItem certificateKey={certKey} />,
      );

      expect(html).toContain(certData.certificateURL);
      expect(html).toContain('target="_blank"');
      expect(html).toContain("View in Certificate Providers Site");
    });

    test("should handle certificates without image or external URL gracefully", () => {
      // Mock entry with missing certificateURL and certificateImage
      const tempKey = "temp-cert" as CertificateDatabaseKeys;
      certificateDatabaseMap[tempKey] = {
        name: "Test Certificate",
        category: "Artificial Intelligence" as any,
        issuer: "Test Issuer" as any,
        certificateURL: "",
        skills: [],
        description: "Test description",
        learningOutcomes: [],
      };

      const html = renderToStaticMarkup(
        <CertificateItem certificateKey={tempKey} />,
      );

      expect(html).toContain("Test Certificate");
      expect(html).toContain("Test Issuer");
      expect(html).not.toContain("View in Certificate Providers Site");

      delete certificateDatabaseMap[tempKey];
    });
  });

  describe("CourseItem", () => {
    test("should render course title, university tag, category, and logo", () => {
      const courseKey = CourseDatabaseKeys.KCL_ArtificialIntelligence;
      const courseData = courseDatabaseMap[courseKey];

      const html = renderToStaticMarkup(<CourseItem courseKey={courseKey} />);

      expect(html).toContain(`/education/${courseKey}`);
      expect(html).toContain(courseData.name);
      expect(html.replace(/&#x27;/g, "'")).toContain(courseData.university);
      expect(html).toContain(courseData.category);
      expect(html).toContain("img");
      expect(html).toContain(`${courseData.name} logo`);
    });

    test("should handle course without logo", () => {
      const tempKey = "temp-course";
      courseDatabaseMap[tempKey] = {
        name: "Test Course",
        university: "Test University",
        grade: "Distinction",
        category: "Postgraduate",
        skills: [],
        startYear: 2023,
        endYear: 2024,
        certificate: "",
        logo: "",
        modules: [],
      };

      const html = renderToStaticMarkup(<CourseItem courseKey={tempKey} />);

      expect(html).toContain("Test Course");
      expect(html).toContain("Test University");
      expect(html).toContain("Test Course");
      expect(html).not.toContain("img");

      delete courseDatabaseMap[tempKey];
    });
  });

  describe("ProjectItem", () => {
    test("should render project name, description, cover image, and action links", () => {
      const projectKey = ProjectDatabaseKeys.ForumDiscussions;
      const projectData = projectDatabaseMap[projectKey];

      const html = renderToStaticMarkup(
        <ProjectItem projectKey={projectKey} />,
      );

      expect(html).toContain(`/projects/${projectKey}`);
      expect(html).toContain(projectData.name);
      expect(html).toContain("img");
      expect(html).toContain(`${projectData.name} cover image`);
      expect(html).toContain("View Project Details");
      expect(html).toContain(projectData.repositoryURL!);
      expect(html).toContain(projectData.deploymentURL!);
      expect(html).toContain("GitHub Repository for Project");
      expect(html).toContain("Project Website");
    });

    test("should render fallback vertical line when thumbnailImage is absent", () => {
      const tempKey = "temp-project-no-thumb";
      projectDatabaseMap[tempKey] = {
        name: "No Thumb Project",
        description: "A project without a thumbnail image",
        skills: [],
        category: "Web Development" as any,
        type: "Personal" as any,
      };

      const html = renderToStaticMarkup(<ProjectItem projectKey={tempKey} />);

      expect(html).toContain("No Thumb Project");
      expect(html).toContain("border-red-400");
      expect(html).not.toContain("cover image");

      delete projectDatabaseMap[tempKey];
    });

    test("should render subtitle variants: type, category, and null", () => {
      const projectKey = ProjectDatabaseKeys.ForumDiscussions;
      const projectData = projectDatabaseMap[projectKey];

      const typeHtml = renderToStaticMarkup(
        <ProjectItem projectKey={projectKey} subtitle="type" />,
      );
      expect(typeHtml).toContain(`${projectData.type} Project`);

      const catHtml = renderToStaticMarkup(
        <ProjectItem projectKey={projectKey} subtitle="category" />,
      );
      expect(catHtml).toContain(`${projectData.category}`);

      const nullHtml = renderToStaticMarkup(
        <ProjectItem projectKey={projectKey} subtitle={null} />,
      );
      expect(nullHtml).not.toContain(`${projectData.type} Project`);
    });

    test("should omit repository/deployment links when they are not provided", () => {
      const tempKey = "temp-project-no-links";
      projectDatabaseMap[tempKey] = {
        name: "No Links Project",
        description: "A project without external links",
        skills: [],
        category: "Web Development" as any,
        type: "Personal" as any,
      };

      const html = renderToStaticMarkup(<ProjectItem projectKey={tempKey} />);

      expect(html).toContain("No Links Project");
      expect(html).toContain("View Project Details");
      expect(html).not.toContain("GitHub Repository for Project");
      expect(html).not.toContain("Project Website");

      delete projectDatabaseMap[tempKey];
    });
  });

  describe("WorkItem", () => {
    test("should render role name, company, dates, time in role, and logo", () => {
      const roleKey = RoleDatabaseKeys.CommerzbankAiEngineer;
      const roleData = rolesDatabase[roleKey];

      const html = renderToStaticMarkup(<WorkItem roleKey={roleKey} />);

      expect(html).toContain(`/experience/${roleKey}`);
      expect(html).toContain(roleData.name);
      expect(html).toContain("img");
      expect(html).toContain("View Role Details");
      expect(html).toContain(roleData.startDate.toString());
      expect(html).toContain(roleData.timeInRole);
    });

    test("should render 'Present' when endDate difference with current date is 0", () => {
      const roleKey = RoleDatabaseKeys.CommerzbankAiEngineer;
      const html = renderToStaticMarkup(<WorkItem roleKey={roleKey} />);

      expect(html).toContain("Present");
    });

    test("should render company link when company website is provided and plain text when not", () => {
      const roleKey = RoleDatabaseKeys.CommerzbankAiEngineer;
      const html = renderToStaticMarkup(<WorkItem roleKey={roleKey} />);

      expect(html).toContain('target="_blank"');
      expect(html).toContain("View Company Site");
    });
  });
});
