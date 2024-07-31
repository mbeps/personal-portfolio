- [**Project Reflection: Drumroll Music**](#project-reflection-drumroll-music)
- [**Backend Development**](#backend-development)
	- [**Supabase**](#supabase)
	- [**PostgreSQL**](#postgresql)
- [**Frontend Development**](#frontend-development)
	- [**Next.js and TypeScript**](#nextjs-and-typescript)
	- [**Styling: Tailwind CSS and Radix UI**](#styling-tailwind-css-and-radix-ui)
	- [**State Management: Zustand**](#state-management-zustand)
- [**Challenges**](#challenges)
	- [**Dynamic Design With Tailwind CSS**](#dynamic-design-with-tailwind-css)
	- [**The Limitations of the `use-sound` Library**](#the-limitations-of-the-use-sound-library)
- [**Future Improvements**](#future-improvements)
	- [**Dockerizing the Application**](#dockerizing-the-application)
- [**Conclusion**](#conclusion)


# **Project Reflection: Drumroll Music**

This reflection details the development of Drumroll Music, a platform dedicated to offering a user-centered, smooth music streaming experience. During this project, I had the opportunity to deeply learn about a wide range of front-end and back-end technologies and how these technologies could be glued together to achieve the desired functionalities of the application.

# **Backend Development**

Building the backend in Drumroll Music meant creating it with two powerful technologies at its core: Supabase, on top of PostgreSQL. These two choices were vital to the very basic functionalities of the app, right from user authentication through data storage and ensuring a sustainable, fast music streaming experience.

## **Supabase**

Our backend infrastructure was underpinned by Supabase. It's one of the very strong open-source alternatives to Google's Firebase, providing an easy way to build really complex applications with a set of tools and services—the most significant of which are real-time databases, authentication and authorization, storage, and serverless functions.

User authentication was also part of the project. Supabase has very robust authentication, which helped us very easily in implementing features like signing up, logging in, and password resetting. What is more, it allowed us to extend our functionalities, for example, for Google and GitHub sign-up or login, with smooth integrations.

It uses the built-in Supabase PostgreSQL database for data management and Supabase Storage for music storage. Moreover, it handled music files efficiently, which users will upload with the help of Supabase Storage. This will not only be easier to store files but ensure that this portion will scale as the platform grows.

The BaaS model of Supabase made the job a piece of cake, abstracting most of the hassle one usually spends in a traditional backend development. Thus, I used to work at faster-than-usual speeds and put most of my efforts directly into the development process. You will find a more elaborate post on BaaS and why it's awesome here.

## **PostgreSQL**

While Supabase provided the general framework, the app's data was supported by the advanced open-source relational database [PostgreSQL](https://www.postgresql.org/). Postgre has proved to be an excellent choice for handling complex relations between different entities such as registered users, uploaded music, liked songs, and so on, known for scalability, data integrity, and robustness.

An RDBMS, such as PostgreSQL, adds structured query language support to manipulate a database and helps efficiently organize data into tables. Its support for relationships between these tables was very instrumental in the management of connectedness between our app's entities.

We also implemented PostgreSQL policies that add a layer of security by constraining which rows of a table the user can access. It ensured the privacy of user data and helped with security from every perspective within this application.

To delve deeper into databases, their types, and the advantages of using an RDBMS such as PostgreSQL, you can check my blog post here.

The robust combination of Supabase and PostgreSQL could thus gracefully and flexibly make up the backend support to bring into reality the intricate functionalities of Drumroll Music.

# **Frontend Development**

The frontend development of Drumroll Music was powered by powerful technologies such as Next.js, TypeScript, Tailwind CSS, and Radix UI. These technologies greatly influenced the creation of an intuitive and streamlined user interface that would complement powerful features of the application.

## **Next.js and TypeScript**

We used [Next.js](https://nextjs.org/) as a React top-level framework to serve the application's interface. Among the core features of Next.js are server-side rendering and the generation of static websites, which suit high-performance web applications. The general structure of code Next.js introduced really helped simplify development to make it well-organized and maintainable.

Next.js was used with [TypeScript](https://www.typescriptlang.org/), a statically typed superset of JavaScript. TypeScript adds a powerful static typing system to our JavaScript code, enhancing the developer experience with advanced editor support for features such as code refactoring, IntelliSense, and better code quality. Development productivity is enhanced to a great extent, and potential bugs are mostly avoided at an early stage.

## **Styling: Tailwind CSS and Radix UI**

For styling the application, we used [Tailwind CSS](https://tailwindcss.com/)—a utility-first CSS framework that encourages component composition over inheritance. Tailwind CSS comes with a set of utility classes enabling quick building of custom designs with no custom CSS involved. This will help speed up the development process and allow us enough time to focus on more additions of core functionality, providing the application with responsive design across the application.

We used [Radix UI](https://www.radix-ui.com/) for components like dialogs and sliders. It's basically a low-level, unstyled UI component library. Due to the fact that Radix UI is an unstyled library, it gives us the freedom to design however we want while providing UI primitives. So, it integrates pretty well with our Tailwind CSS styling paradigm while giving us accessibilities out of the box, providing a nice blend between custom design and functionality.

## **State Management: Zustand**

We used Zustand, a small, fast, scale-agnostic state management. In contrast to more complex solutions, Zustand exposes a far easier and more intuitive API, which was fitting for this project's scale. Zustand played an important role in managing the state of certain entities, be it the active song, user preferences, or even the collection of uploaded songs. This helped manage state changes effectively and provide a seamless, real-time experience to users.

At the highest level, Next.js, TypeScript, Tailwind CSS, Radix UI, and Zustand provide a bedrock for a powerfully structured front-end that delivers a seamless music-streaming experience in all ways imaginable to the end-user.

# **Challenges**

The creation of the Drumroll Music application was an enthralling experience that also had its own challenges, making it a test for my problem-solving skills. While Supabase really made things easy on the back end, the majority of the challenges were from the front end; most of them had to do with dynamic design and libraries that impose some limitations.

## **Dynamic Design With Tailwind CSS**

While adopting Tailwind CSS for this project had a lot of pros, it also created one con. One had to adapt while implementing this design in a dynamic way using Tailwind's utility-first approach. In particular, using Tailwind's "merge" feature for utility classes really was not that intuitive at first. Hence, overcoming that obstacle meant more efficient styling toward a more maintainable and readable code base.

## **The Limitations of the `use-sound` Library**

One small problem in development was the music control using the 'use-sound' library. While the 'use-sound' library allows the playing of audio files, it can only play one song at a time and doesn't natively have features to go to the next or return to the previous song.

This solution was pretty straightforward after I finally understood the library: In fact, the current player should be destroyed and a new one instantiated for each song. This has been done with the use of each song's unique link, used as a key, to trigger a re-render of the player component whenever a new song is selected. Though a little minor detail, addressing that was high priority to have a smooth transition of music, enhancing the entire experience.

— In contrast to this, the journey in developing Drumroll Music was incredibly rewarding. It was an excellent opportunity to learn even further the ins and outs of Next.js, Tailwind CSS, Zustand, Supabase, and how to manage limitations of the `use-sound` library in real-world scenarios. Each challenge, once tackled, further reinstated the ability of the selected tech stack and how they can be flexible and powerful in its means of creative problem-solving.

# **Future Improvements**

Even though the current state of implementation of Drumroll Music, it provides a rich and compelling experience to the users, there are few enhancements and features that can be added to the present state. All such probable enhancements are being tracked and managed through GitHub issues. The most critical areas of enhancement that I am considering for the performance of the website are database restructuring and application Dockerization.

Some major improvements that are being considered at the moment are a complete redesign of the database. The present database structure supports the song-based entities together with the relationship between these entities. A more complex structure of the database is needed in order to implement the application with facilities such as artist profiles, handling multiple albums and songs with playlists created by users, and in addition, a slider to scrub through the song.

Normalize the database : We would do this through normalization to achieve the data structure that supports efficiency. This shall mean dividing the database into two or more tables following the definition of a relationship between those tables in order to reduce redundancy and increase data integrity. It would require a change of the prevailing logic in the codebase to adjust to the new entities and relations.

## **Dockerizing the Application**

Another great improvement in the pipeline is database restructuring. Though my experience lies in Dockerizing Next.js Frontend applications, Dockerization of Supabase is currently under some study. Dockerization is very crucial in deploying this application because the Supabase infrastructure is currently quite expensive for long-term usage.

Dockerizing the application will put it in order for deploying and will enhance the experience of development with an environment that is more consistent, replicable easily, and testable against multiple platforms. This would include development of a Dockerfile outlining the steps to take a Docker image of the application and also a Docker Compose file that orchestrates the execution of Docker containers constituting the application.

# **Conclusion**

The experience of creating Drumroll Music has been absolutely a learning one. Learning about the advantages of Supabase, Next.js, TypeScript, Tailwind CSS, and Radix UI, this project has been a step in creating a comprehensive, robust, and intuitive music-streaming platform.

This was important in designing the library for `use-sound` and managing the complexity of the data in a bid to make a music platform that is user-centered. Indeed, lessons from this project will inform any future work.

Next, improvements planned in the restructuring of the database and Dockerization really point toward continuous improvement and giving the best to our users in light of a more engaging and dynamic experience while interfacing with music in our platform.

As Drumroll Music Platform retains the same, this proves to be a great journey in the exploration of advanced concepts of software development, a cradle for skills enhancement, and a boundary breaker. Here's to more music, learning, and growth!