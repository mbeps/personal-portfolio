import type React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import GlobalSearch from "@/components/global-search/SearchButton";
import { NAV_ITEMS, ROUTES } from "@/constants/routes";
import socialLinks from "@/constants/socials";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/blogs/BlogsDatabaseMap";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/CertificateDatabaseMap";
import CourseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/CourseDatabaseMap";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/modules/ModuleDatabaseMap";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/projects/ProjectDatabaseMap";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/RoleDatabaseMap";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import MaterialTypeEnum from "@/enums/material/MaterialTypeEnum";

// Mock Command components to render cleanly in static markup
vi.mock("@/components/shadcn/ui/command", () => ({
  Command: ({ children }: any) => <div>{children}</div>,
  CommandDialog: ({ children }: any) => (
    <div data-testid="command-dialog">{children}</div>
  ),
  CommandInput: (props: any) => <input {...props} />,
  CommandList: ({ children }: any) => <div>{children}</div>,
  CommandEmpty: ({ children }: any) => <div>{children}</div>,
  CommandGroup: ({ heading, children }: any) => (
    <div>
      <div>{heading}</div>
      {children}
    </div>
  ),
  CommandItem: ({ children, onSelect }: any) => (
    <div onClick={onSelect}>{children}</div>
  ),
  CommandSeparator: () => <hr />,
  CommandShortcut: ({ children }: any) => <span>{children}</span>,
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

vi.mock("@/components/shadcn/ui/tooltip", () => ({
  Tooltip: ({ children }: { children?: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TooltipTrigger: ({
    children,
    render,
  }: {
    children?: React.ReactNode;
    render?: React.ReactNode;
  }) => <div>{render || children}</div>,
  TooltipContent: ({ children }: { children?: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TooltipProvider: ({ children }: { children?: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("GlobalSearch Component Suite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders trigger button with search icon and tooltip shortcut cues", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain("Global Search");
    expect(html).toContain("Ctrl");
    expect(html).toContain("K");
    expect(html).toContain("⌘");
    expect(html).toContain("<button");
    expect(html).toContain("<svg");
  });

  test("renders command dialog structure with search input and empty placeholder", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain('placeholder="Type to search across site..."');
    expect(html).toContain("No results found");
  });

  test("indexes and renders all Pages in command group", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain("Pages");
    for (const navItem of NAV_ITEMS) {
      expect(html).toContain(`${navItem.label} Page`);
      expect(html).toContain(`href="${navItem.path}"`);
    }
  });

  test("indexes and renders Projects group", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain(MaterialTypeEnum.Projects);
    if (projectDatabaseKeys.length > 0) {
      const firstProjectKey = projectDatabaseKeys[0];
      const project = projectDatabaseMap[firstProjectKey];
      expect(html).toContain(project.name);
      expect(html).toContain(
        `href="${ROUTES.PROJECTS.path}/${firstProjectKey}"`,
      );
    }
  });

  test("indexes and renders Work Experiences group", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain(MaterialTypeEnum.WorkExperiences);
    if (roleDatabaseKeys.length > 0) {
      const firstRoleKey = roleDatabaseKeys[0];
      const role = rolesDatabase[firstRoleKey];
      expect(html).toContain(role.name);
      expect(html).toContain(
        `href="${ROUTES.EXPERIENCE.path}/${firstRoleKey}"`,
      );
    }
  });

  test("indexes and renders Education and University Modules groups", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain("Education");
    expect(html).toContain(MaterialTypeEnum.UniversityModules);

    if (courseDatabaseKeys.length > 0) {
      const firstCourseKey = courseDatabaseKeys[0];
      const course = CourseDatabaseMap[firstCourseKey];
      expect(html).toContain(course.name);
      expect(html).toContain(
        `href="${ROUTES.EDUCATION.path}/${firstCourseKey}"`,
      );
    }

    if (moduleDatabaseKeys.length > 0) {
      const firstModuleKey = moduleDatabaseKeys[0];
      const mod = moduleDatabaseMap[firstModuleKey];
      expect(html).toContain(mod.name);
    }
  });

  test("indexes and renders Certificates and Blogs groups", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain(MaterialTypeEnum.Certificates);
    expect(html).toContain(MaterialTypeEnum.Blogs);

    if (certificateDatabaseKeys.length > 0) {
      const certKey = certificateDatabaseKeys[0];
      expect(html).toContain(certificateDatabaseMap[certKey].name);
      expect(html).toContain(`href="${ROUTES.CERTIFICATES.path}/${certKey}"`);
    }

    if (blogDatabaseKeys.length > 0) {
      const blogKey = blogDatabaseKeys[0];
      expect(html).toContain(blogsDatabaseMap[blogKey].name);
      expect(html).toContain(`href="${ROUTES.BLOGS.path}/${blogKey}"`);
    }
  });

  test("indexes and renders Skills and Socials groups", () => {
    const html = renderToStaticMarkup(<GlobalSearch />);

    expect(html).toContain("Skills");
    expect(html).toContain("Socials");

    if (skillDatabaseKeys.length > 0) {
      const skillKey = skillDatabaseKeys[0];
      const skill = skillDatabaseMap[skillKey];
      expect(html).toContain(skill.name);
      expect(html).toContain(`href="${ROUTES.SKILLS.path}/${skillKey}"`);
    }

    for (const social of socialLinks) {
      expect(html).toContain(social.name);
      expect(html).toContain(`href="${social.link}"`);
    }
  });
});
