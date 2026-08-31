import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import BlogsList from "@/components/material-lists/BlogsList";
import CertificatesList from "@/components/material-lists/CertificatesList";
import MaterialGroupSectionList from "@/components/material-lists/MaterialGroupSectionList";
import MaterialList from "@/components/material-lists/MaterialList";
import MaterialTab from "@/components/material-lists/MaterialTab";
import ModuleList from "@/components/material-lists/ModuleList";
import ProjectsList from "@/components/material-lists/ProjectsList";
import SkillList from "@/components/material-lists/SkillList";
import WorkList from "@/components/material-lists/WorkList";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import type MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

const { mockUseQueryStates } = vi.hoisted(() => ({
  mockUseQueryStates: vi.fn(),
}));

vi.mock("nuqs", () => ({
  useQueryStates: mockUseQueryStates,
  parseAsString: { withDefault: (d: string) => d },
  parseAsBoolean: { withDefault: (d: boolean) => d },
}));

vi.mock("@/hooks/useIsMounted", () => ({
  default: () => true,
}));

vi.mock("@/hooks/useMediaQuery", () => ({
  useMediaQuery: () => false,
}));

vi.mock("@/components/shadcn/ui/accordion", () => ({
  Accordion: ({ children }: any) => <div>{children}</div>,
  AccordionItem: ({ children }: any) => <div>{children}</div>,
  AccordionTrigger: ({ children }: any) => <button>{children}</button>,
  AccordionContent: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("@/components/shadcn/ui/tabs", () => ({
  Tabs: ({ children }: any) => <div>{children}</div>,
  TabsList: ({ children }: any) => <div>{children}</div>,
  TabsTrigger: ({ children }: any) => <button>{children}</button>,
  TabsContent: ({ children }: any) => <div>{children}</div>,
}));

describe("Material Lists", () => {
  beforeEach(() => {
    mockUseQueryStates.mockReturnValue([
      {
        search: "",
        programmingLanguage: "all",
        framework: "all",
        database: "all",
        group: "category",
        hideSkillsWithoutMaterial: false,
      },
      vi.fn(),
    ]);
  });

  describe("MaterialGroupSectionList", () => {
    test("should render empty message when groupedMaterial is empty", () => {
      const html = renderToStaticMarkup(
        <MaterialGroupSectionList
          groupedMaterial={[]}
          emptyMessage="Nothing here"
          renderContent={() => <div>Content</div>}
        />,
      );

      expect(html).toContain("Nothing here");
      expect(html).toContain("font-bold text-2xl");
    });

    test("should skip group named 'All' by default and render other groups", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "All",
          materialsKeys: [ProjectDatabaseKeys.ForumDiscussions],
        },
        {
          groupName: "Web Development",
          materialsKeys: [ProjectDatabaseKeys.ForumDiscussions],
        },
      ];

      const html = renderToStaticMarkup(
        <MaterialGroupSectionList
          groupedMaterial={groups}
          emptyMessage="No items"
          renderContent={(group) => <div>Group: {group.groupName}</div>}
        />,
      );

      expect(html).not.toContain("Group: All");
      expect(html).toContain("Group: Web Development");
      expect(html).toContain('id="web-development"');
    });

    test("should respect custom shouldRenderGroup, getSectionId, and classNames", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Custom Group",
          materialsKeys: [ProjectDatabaseKeys.ForumDiscussions],
        },
      ];

      const html = renderToStaticMarkup(
        <MaterialGroupSectionList
          groupedMaterial={groups}
          emptyMessage="Empty"
          wrapperClassName="custom-wrapper"
          sectionClassName="custom-section"
          shouldRenderGroup={(g) => g.groupName.includes("Custom")}
          getSectionId={(g) =>
            `custom-${g.groupName.toLowerCase().replace(" ", "-")}`
          }
          renderContent={(group, hasMultiple) => (
            <div>
              {group.groupName} - Multiple: {String(hasMultiple)}
            </div>
          )}
        />,
      );

      expect(html).toContain("custom-wrapper");
      expect(html).toContain("custom-section");
      expect(html).toContain('id="custom-custom-group"');
      expect(html).toContain("Custom Group - Multiple: false");
    });
  });

  describe("BlogsList", () => {
    test("should render empty message when no blogs are present", () => {
      const html = renderToStaticMarkup(<BlogsList groupedMaterial={[]} />);
      expect(html).toContain("No Matching Blogs");
    });

    test("should render blogs without header when single group is provided", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Artificial Intelligence",
          materialsKeys: [BlogDatabaseKeys.MachineLearningFoundations],
        },
      ];

      const html = renderToStaticMarkup(<BlogsList groupedMaterial={groups} />);

      expect(html).not.toContain("<h2>Artificial Intelligence</h2>");
      expect(html).toContain("Machine Learning Fundamentals");
    });

    test("should render group headers and dividers when multiple groups are provided", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "AI",
          materialsKeys: [BlogDatabaseKeys.MachineLearningFoundations],
        },
        {
          groupName: "Software",
          materialsKeys: [BlogDatabaseKeys.DesignPatterns],
        },
      ];

      const html = renderToStaticMarkup(<BlogsList groupedMaterial={groups} />);

      expect(html).toContain("<h2>AI</h2>");
      expect(html).toContain("<h2>Software</h2>");
      expect(html).toContain("Machine Learning Fundamentals");
      expect(html).toContain("Software Design Patterns");
    });
  });

  describe("CertificatesList", () => {
    test("should render empty message when no certificates are present", () => {
      const html = renderToStaticMarkup(
        <CertificatesList groupedMaterial={[]} />,
      );
      expect(html).toContain("No Matching Certificates");
    });

    test("should render certificates with headers for multiple groups", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Machine Learning",
          materialsKeys: [CertificateDatabaseKeys.UdemyMachineLearningAtoZ],
        },
        {
          groupName: "Cloud",
          materialsKeys: [CertificateDatabaseKeys.UdemyMachineLearningAtoZ],
        },
      ];

      const html = renderToStaticMarkup(
        <CertificatesList groupedMaterial={groups} />,
      );

      expect(html).toContain("<h2>Machine Learning</h2>");
      expect(html).toContain("<h2>Cloud</h2>");
      expect(html).toContain("Machine Learning A-Z");
    });
  });

  describe("ModuleList", () => {
    test("should render empty message when no modules are present", () => {
      const html = renderToStaticMarkup(<ModuleList groupedMaterial={[]} />);
      expect(html).toContain("No Modules Found");
    });

    test("should render module tags and parent course names", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Year 1",
          materialsKeys: [
            ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
          ],
        },
      ];

      const html = renderToStaticMarkup(
        <ModuleList groupedMaterial={groups} />,
      );

      expect(html).toContain(
        "Artificial Intelligence, Reasoning &amp; Decision Making",
      );
      expect(html).toContain("Artificial Intelligence");
      expect(html).toContain("/education/");
    });

    test("should support custom headingSize for multiple groups", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Term 1",
          materialsKeys: [
            ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
          ],
        },
        {
          groupName: "Term 2",
          materialsKeys: [ModuleDatabaseKeys.KCL_MachineLearning],
        },
      ];

      const htmlH4 = renderToStaticMarkup(
        <ModuleList groupedMaterial={groups} headingSize="h4" />,
      );

      expect(htmlH4).toContain("<h4>University Term 1</h4>");
      expect(htmlH4).toContain("<h4>University Term 2</h4>");
    });
  });

  describe("ProjectsList", () => {
    test("should render empty message when no projects are present", () => {
      const html = renderToStaticMarkup(<ProjectsList groupedMaterial={[]} />);
      expect(html).toContain("No Matching Projects");
    });

    test("should render projects with showType prop", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Web",
          materialsKeys: [ProjectDatabaseKeys.ForumDiscussions],
        },
      ];

      const htmlWithType = renderToStaticMarkup(
        <ProjectsList groupedMaterial={groups} showType={true} />,
      );

      expect(htmlWithType).toContain("Forum Discussions");
      expect(htmlWithType).toContain("Project");
    });
  });

  describe("WorkList", () => {
    test("should render empty message when no work items are present", () => {
      const html = renderToStaticMarkup(<WorkList groupedMaterial={[]} />);
      expect(html).toContain("No Matching Jobs");
    });

    test("should render work items and headers for multiple groups", () => {
      const groups: MaterialGroupInterface[] = [
        {
          groupName: "Engineering",
          materialsKeys: [RoleDatabaseKeys.CommerzbankAiEngineer],
        },
        {
          groupName: "Leadership",
          materialsKeys: [RoleDatabaseKeys.CommerzbankAiEngineer],
        },
      ];

      const html = renderToStaticMarkup(<WorkList groupedMaterial={groups} />);

      expect(html).toContain("<h2>Engineering</h2>");
      expect(html).toContain("<h2>Leadership</h2>");
      expect(html).toContain("AI Engineer");
    });
  });

  describe("MaterialTab", () => {
    test("should return null when materialKeys is empty or undefined", () => {
      const emptyHtml = renderToStaticMarkup(<MaterialTab materialKeys={[]} />);
      expect(emptyHtml).toBe("");

      const undefHtml = renderToStaticMarkup(
        <MaterialTab materialKeys={undefined as any} />,
      );
      expect(undefHtml).toBe("");
    });

    test("should render tabs for populated material types and CTA links", () => {
      const materialKeys = [
        ProjectDatabaseKeys.ForumDiscussions,
        RoleDatabaseKeys.CommerzbankAiEngineer,
        BlogDatabaseKeys.MachineLearningFoundations,
      ];

      const html = renderToStaticMarkup(
        <MaterialTab materialKeys={materialKeys} />,
      );

      expect(html).toContain("Projects");
      expect(html).toContain("Work Experiences");
      expect(html).toContain("Blogs");
      expect(html).toContain("View All Projects");
      expect(html).toContain("View All Work Experiences");
      expect(html).toContain("View All Blogs");
    });
  });

  describe("MaterialList", () => {
    test("should render collapsible accordion by default", () => {
      const materialKeys = [ProjectDatabaseKeys.ForumDiscussions];
      const html = renderToStaticMarkup(
        <MaterialList materialKeys={materialKeys} />,
      );

      expect(html).toContain("Related Material");
      expect(html).toContain("Projects");
    });

    test("should render directly without accordion when isCollapsible is false", () => {
      const materialKeys = [ProjectDatabaseKeys.ForumDiscussions];
      const html = renderToStaticMarkup(
        <MaterialList materialKeys={materialKeys} isCollapsible={false} />,
      );

      expect(html).not.toContain("Related Material");
      expect(html).toContain("Projects");
    });
  });

  describe("SkillList", () => {
    test("should render filter section and grouped skills", () => {
      const skills = [
        SkillDatabaseKeys.Python,
        SkillDatabaseKeys.TypeScript,
        SkillDatabaseKeys.ReactJs,
      ];

      const html = renderToStaticMarkup(<SkillList skills={skills} />);

      expect(html).toContain("Search &amp; Filter Skills");
      expect(html).toContain("Search for Skills name or metadata");
      expect(html).toContain("Filters");
      expect(html).toContain("Clear All");
      expect(html).toContain("Python");
      expect(html).toContain("TypeScript");
      expect(html).toContain("React");
    });

    test("should display 'No Matching Skills' when groupedSkills is empty", () => {
      mockUseQueryStates.mockReturnValue([
        {
          search: "nonexistent-query-12345",
          programmingLanguage: "all",
          framework: "all",
          database: "all",
          group: "category",
          hideSkillsWithoutMaterial: false,
        },
        vi.fn(),
      ]);

      const html = renderToStaticMarkup(<SkillList skills={[]} />);
      expect(html).toContain("No Matching Skills");
    });
  });
});
