Welcome to my personal portfolio website! Explore my skills, projects, and who I am as a developer. With a responsive design, light/dark mode, and captivating sections, let's embark on this journey together. Connect with me in the footer for collaboration and exciting opportunities. Let's inspire through technology and creativity!


# **Features**

- **Skills Showcase**: This section displays my proficiency in various languages, skills, and technologies. Skills are grouped together for convenient viewing, with modal presentations offering detailed insights. Select languages include comprehensive details to provide a deeper understanding of my expertise.

- **Project Portfolio**: 
  - **Categories & Filters**: Projects are categorized for easy navigation. You can filter projects by categories like web development, machine learning, etc., as well as by language or technologies used.
  - **Search & Archive**: A search function allows for quick project discovery. Additionally, archived projects are available but not displayed by default.
  - **Project Details**: Clicking on a project opens its dedicated page, featuring a gallery of images, demo videos, a descriptive overview, and the project's tech stack.
  - **Links & Reports**: Access direct links to the project's GitHub repository and deployed site if available. Projects may also include a list of features and reflective reports.

- **Credentials Section**:
  - **Certificates & Qualifications**: View my array of certificates and qualifications, sortable by issuer and category, and searchable for ease of access.
  - **Archived Credentials**: Some credentials are archived and not shown by default, ensuring a streamlined experience.
  - **Detailed Certificate View**: Opening a certificate reveals its image, description, learning outcomes, issuing authority, skills gained, and a link to the issuer's page if available.

- **Blog Space**:
  - **Technical Blogs**: Read markdown blogs where I share my thoughts and experiences in technology and programming.
  - **Organization & Accessibility**: Blogs are grouped into categories. Users can search and filter blogs by category for a tailored reading experience.
  - **Detailed Blog Articles**: Clicking on a blog title opens the full article, providing an immersive and informative reading experience.

- **Light and Dark Mode**: Switch between light and dark modes to suit your browsing preferences, ensuring a comfortable and personalized experience.

My portfolio is designed to be responsive and engaging, inviting you to explore my journey in the world of development with ease and interest.

# **Requirements**
These are the requirements needed to run the project:
- Node 18 LTS
- Next.JS 13+ (App Router)

# **Tech Stack**

- [**TypeScript**](https://www.typescriptlang.org/): a statically typed superset of JavaScript, is used to build reliable and maintainable code, providing early error catching and advanced editor support.

- [**Next.js**](https://nextjs.org/): the foundation of the frontend is built using Next.js, a popular React framework that offers tools and conventions for building server-side rendered (SSR) and statically generated web applications, enhancing performance and ease of deployment.

- [**Tailwind CSS**](https://tailwindcss.com/):  a highly customizable, low-level CSS framework, provides utility classes that help us build out custom designs efficiently and responsively.


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