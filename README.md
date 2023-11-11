Welcome to my personal portfolio website! Explore my skills, projects, and who I am as a developer. With a responsive design, light/dark mode, and captivating sections, let's embark on this journey together. Connect with me in the footer for collaboration and exciting opportunities. Let's inspire through technology and creativity!


# **Features**

This personal portfolio offers a multitude of exciting features:

- **Skills Showcase**: Demonstrates the languages, skills, and technologies that I am proficient in. The portfolio offers a detailed view of skills and technologies, and they can be grouped together for convenient viewing in a modal. Extra details are provided for some languages to provide comprehensive insights.

- **Project Portfolio**: Highlights a selection of my projects on the main page. An extended portfolio can be accessed on the project page, including optional site links to live projects, repository links to view the project code, and a quick view of the project stack to reveal the language and technologies used. Some projects also include reflective blogs. You can also explore the gallery of images for each project. Furthermore, you can filter projects by categories (like web development, machine learning, etc.) to view specific types of projects.

- **Blog Space**: A dedicated page where you can read markdown blogs that I write. Here, I share insights, learning experiences, and various thoughts on technology and programming.

- **Light and Dark Mode**: The portfolio supports a light and a dark mode. You can switch between the two according to your preference for a comfortable browsing experience.

With a responsive design, captivating sections, and a journey into my development experience, my personal portfolio welcomes you!


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