This portfolio website is designed to showcase a comprehensive journey through my educational background, professional experiences, and personal achievements. It features detailed sections on skills, project portfolios, work experiences, university courses, and certificates, all organized to highlight the depth and diversity of my expertise. Interactive functionalities like browsing, filtering, and viewing related materials enhance user engagement, providing a thorough insight into my capabilities and achievements. The site is tailored to be user-friendly with features like light and dark mode and a responsive interface, making it accessible and appealing for all visitors.

# **What the Website Showcases**

## **Navigation & Discovery**

- Global command palette (Cmd/Ctrl + K) indexes every page, material, module, and social profile for instant navigation.
- Fuse-powered search with shared filter drawers (skills, categories, languages, issuers/types) and archive toggles across projects, roles, certificates, and blogs; URL params persist filter state for deep links.
- Material tabs surface related projects, roles, modules, certificates, and blogs on every detail page, and the More index keeps all routes discoverable even when they are not in the navbar.

## **Content & Media**

- Markdown pipeline supports Mermaid diagrams, inline/block LaTeX (KaTeX), and theme-aware Prism code highlighting; the same renderer powers project features, role responsibilities, blogs, and about content.
- SpecialReader splits intros from the first heading to build an on-page contents block with back navigation, while `{BASE}` placeholders auto-rewrite to public asset paths for blogs/reports.
- Galleries combine image/video carousels with tabbed toggles, desktop arrows, and responsive media containment.

## **Skills**

- Browse all skills grouped by category and type, with tags that only link to detail pages when the skill is backed by material.
- Drill into a skill to see the materials that use it plus related skills, grouped by category for quick exploration.

## **Project Portfolio**

- Filter and search projects by category, type, languages, and skills, with archive toggles to revisit older work.
- Detail pages pair media galleries (images and video demos) or cover art with descriptions, language tags, grouped skill tables, and quick links to repositories, deployments, and long-form reports.
- Feature lists and reports render markdown with table of contents, KaTeX/Mermaid, and theme-aware code highlighting; `{BASE}` image placeholders are rewritten to the correct public paths automatically.
- Related material tabs connect projects to courses, roles, certificates, and blogs.

## **Work Experience & Volunteering**

- Filterable archive of roles by category, employment type, and skills with Fuse search and archive toggles.
- Role pages surface company metadata, responsibilities from markdown, grouped skills, outbound company links, and related material tabs.

## **Education (Courses & Modules)**

- Course cards highlight university, grade, duration, and category; detail pages show grouped modules with an archive toggle, certificate previews, skill tables, and related materials.
- Module pages outline learning outcomes, scores, grouped skills, and breadcrumbs back to their parent course.

## **Certificates & Online Courses**

- Listing view filters by issuer, category, and skills with Fuse search plus archive support.
- Certificate pages show credential images, issuer tags/links, learning objectives, grouped skills, and related materials.

## **Blogs & Reports**

- Blog articles (including project write-ups) render via SpecialReader with an intro/contents split, back links, `{BASE}` image rewriting, Mermaid diagrams, inline/block LaTeX via KaTeX, and theme-aware syntax highlighting.
- Each post lists its skills and links into related material tabs for deeper exploration.

## **About & Home**

- Hero section with looping subtitles, social links, and CTAs to projects/about; homepage about preview is markdown-powered with language and technology highlights.
- Full About page aggregates degrees, experience, featured materials, and social links via shared MaterialList components.


# **Other Features**

## **Light and Dark Mode**
Switch themes from the navbar toggle (supports light, dark, and system via a context menu) to suit your browsing preferences.

## **Responsive Interface**
Sticky navbar, mobile drawer navigation, and fluid layouts keep the portfolio engaging across devices.

# **Requirements**
These are the requirements needed to run the project:
- Node 22 LTS

# **Tech Stack**

- [**TypeScript**](https://www.typescriptlang.org/): a statically typed superset of JavaScript, is used to build reliable and maintainable code, providing early error catching and advanced editor support.

- [**Next.js**](https://nextjs.org/): the foundation of the frontend is built using Next.js, a popular React framework that offers tools and conventions for building server-side rendered (SSR) and statically generated web applications, enhancing performance and ease of deployment. Built on top of React.js. 

- [**React.js**](https://react.dev/): a front-end library for building reactive user interfaces. 

- [**Tailwind CSS**](https://tailwindcss.com/):  a highly customizable, low-level CSS framework, provides utility classes that help us build out custom designs efficiently and responsively.

- [**Shadcn UI**](https://ui.shadcn.com/): a components library built on top of Radix UI and Tailwind CSS provided styled primitives that can easily be customized. 


# **Running Application Locally**

To run the application on your local machine, you'll need to follow the steps below:

## 1. **Clone Project Locally**

You'll first need to clone the project repository to your local machine. Open your terminal, navigate to the directory where you want to store the project, and run the following command:

```sh
git clone https://github.com/mbeps/personal-portfolio.git
```

## 2. **Install Dependencies**

Navigate to the root directory of the project by running the following command:
```sh
cd personal-portfolio
```

Then, install the project dependencies by running:
```sh
yarn install
```

## 4. **Run the Application**

Once you've set up your environment variables, you can run the application using the following command:

```sh
yarn dev
```

The application should now be running at http://localhost:3000.

# **Running Application using Docker**

You can build and run the application through Docker. 

```sh
docker-compose -f docker/docker-compose.yml up --build
```
