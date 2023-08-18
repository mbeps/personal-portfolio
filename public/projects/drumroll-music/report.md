- [**Project Reflection: Drumroll Music**](#project-reflection-drumroll-music)
- [**Backend Development**](#backend-development)
	- [**Supabase**](#supabase)
	- [**PostgreSQL**](#postgresql)
- [**Frontend Development**](#frontend-development)
	- [**Next.js and TypeScript**](#nextjs-and-typescript)
	- [**Styling: Tailwind CSS and Radix UI**](#styling-tailwind-css-and-radix-ui)
	- [**State Management: Zustand**](#state-management-zustand)
- [**Challenges**](#challenges)
	- [**Dynamic Design with Tailwind CSS**](#dynamic-design-with-tailwind-css)
	- [**Limitations of `use-sound` Library**](#limitations-of-use-sound-library)
- [**Future Improvements**](#future-improvements)
	- [**Database Restructuring**](#database-restructuring)
	- [**Dockerizing the Application**](#dockerizing-the-application)
- [**Conclusion**](#conclusion)


# **Project Reflection: Drumroll Music**

This reflection delves into the development of Drumroll Music, a platform dedicated to offering a user-centered, smooth music streaming experience. The creation of this project afforded me an opportunity to explore and gain in-depth knowledge of numerous front-end and back-end technologies, as well as the intricacies of integrating these technologies to achieve the desired functionalities of the application.

# **Backend Development**

Crafting the backend of the Drumroll Music platform involved leveraging potent technologies, most notably, Supabase and PostgreSQL. These choices were vital in shaping the app's functionality, from user authentication and data storage, to creating a reliable and efficient music streaming experience.

## **Supabase**

[Supabase](https://supabase.io/) served as the backbone for our backend infrastructure. Supabase, a powerful open-source alternative to Google's Firebase, simplifies the creation of complex applications by offering a collection of tools and services such as real-time databases, authentication and authorization, storage, and serverless functions.

An integral part of the project was user authentication. Supabase's robust authentication system was instrumental in implementing features like sign up, login, and password reset. Supabase also provides seamless integration with third-party providers, which enabled us to extend sign up and login functionalities via Google and GitHub. 

Supabase's built-in PostgreSQL database and storage were harnessed for data management and music storage, respectively. Music files uploaded by users were efficiently handled using Supabase Storage, a feature that not only simplifies file storage but also ensures scalability as the platform grows. 

Supabase's Backend-as-a-Service (BaaS) model was a boon to this project as it abstracted many of the complexities typically associated with backend development, allowing for a faster and more focused development process. For a deeper dive into BaaS and its benefits, you can visit my blog post on the subject [here](/posts/backend).

## **PostgreSQL**

While Supabase provided the overarching framework, [PostgreSQL](https://www.postgresql.org/), an advanced open-source relational database, laid the foundation for managing the app's data. Known for its scalability, data integrity, and robustness, PostgreSQL was an ideal choice for managing the intricate relations between various entities in our app, such as registered users, uploaded music, liked songs, and more. 

A relational database management system (RDBMS) like PostgreSQL enables structured query language (SQL) support for database manipulation and facilitates the efficient organization of data into tables. Its support for relationships between these tables was crucial for managing the connectedness of our application's entities. 

We also implemented PostgreSQL policies (Row-Level Security), a feature that adds an extra layer of security by limiting the rows of a table that a user can access. This ensured the privacy of user data and enhanced the overall security of the application. 

For an in-depth discussion on databases, their types, and the benefits of using an RDBMS like PostgreSQL, feel free to explore my blog post [here](/posts/databases).

The combination of Supabase and PostgreSQL proved to be powerful, efficient, and flexible, providing the backend support needed to bring the intricate functionalities of Drumroll Music to life.

# **Frontend Development**

The front-end development of Drumroll Music was powered by a combination of potent technologies such as Next.js, TypeScript, Tailwind CSS, and Radix UI. The choice of these technologies played a significant role in creating an intuitive and streamlined user interface that complemented the powerful features of the application.

## **Next.js and TypeScript**

We utilized [Next.js](https://nextjs.org/), a top-tier React framework, for building the application's user interface. Next.js stands out for its support for server-side rendering and static website generation, making it perfect for building high-performance web applications. The structured codebase provided by Next.js greatly simplifies the development process, leading to a well-organized and maintainable application.

[TypeScript](https://www.typescriptlang.org/), a statically typed superset of JavaScript, was used alongside Next.js. TypeScript brings a strong static typing system to our JavaScript code, enhancing developer experience through advanced editor support, early error detection, and improved code quality. This significantly boosts development productivity and helps prevent potential bugs at an early stage.

## **Styling: Tailwind CSS and Radix UI**

For the application's styling, we used [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that encourages component composition over inheritance. Tailwind CSS offers a set of utility classes to rapidly build custom designs without writing any custom CSS. It streamlines the development process, allowing us to focus more on functionality and ensures a consistent, responsive design across the application.

We complemented Tailwind CSS with [Radix UI](https://www.radix-ui.com/), a low-level, unstyled UI component library, for creating components such as dialogs and sliders. Radix UI, being unstyled, provides UI primitives while allowing complete design freedom. It fits seamlessly into our Tailwind CSS styling approach while offering accessibility out-of-the-box, leading to a harmonious blending of custom design and functionality.

## **State Management: Zustand**

For state management, we utilized [Zustand](https://github.com/pmndrs/zustand), a small, fast, and scale-agnostic state management solution. Compared to more complex solutions, Zustand offers a simpler, more intuitive API, which was fitting for this project's scale. Zustand played a vital role in managing the state of various entities such as active song, user preferences, and the collection of uploaded songs. It allowed us to effectively manage state changes and provide a smooth, real-time experience to users.

In essence, the blend of Next.js, TypeScript, Tailwind CSS, Radix UI, and Zustand enabled us to create a robust front-end, delivering a seamless and engaging music streaming experience to users.

# **Challenges**

Building the Drumroll Music application provided an engaging experience with its own unique set of challenges that pushed the boundaries of my problem-solving skills. While Supabase significantly streamlined the backend development process, the primary challenges were encountered on the front-end, mainly related to dynamic design and handling the limitations of certain libraries.

## **Dynamic Design with Tailwind CSS**

Adopting Tailwind CSS for this project, despite its numerous advantages, presented a unique challenge. Implementing a dynamic design using Tailwind's utility-first approach required some adaptation, especially when it came to utilizing Tailwind's "merge" feature, which enables combining utility classes. While initially unfamiliar, overcoming this hurdle led to more efficient styling and a more maintainable and readable codebase.

## **Limitations of `use-sound` Library**

A minor detail that posed a challenge during the development was managing music playback using the `use-sound` library. This library, which is used for playing audio files, has a limitation where it supports playing only one song at a time, and does not provide built-in capabilities to play the next or previous song.

Once I fully understood the library, the solution was relatively straightforward – I had to destroy the current player and instantiate a new one for each song. This was made possible by using each song's unique link as a key to trigger a re-render of the player component whenever a new song is selected. Despite being a minor detail, it was an important one to address, as it ensured seamless transitions between songs, greatly enhancing the user experience.

In spite of these challenges, the development process of the Drumroll Music application was immensely rewarding. It presented opportunities to deepen my understanding of Next.js, Tailwind CSS, Zustand, and Supabase, while also providing practical experience in managing the constraints of the `use-sound` library. Each challenge, once tackled, reaffirmed the flexibility and robustness of the selected tech stack, and the power of creative problem-solving.

# **Future Improvements**

While the current implementation of Drumroll Music provides a rich and engaging experience for its users, there is always room for enhancements and new features. These potential improvements are continually being tracked and managed using GitHub issues. The primary areas of enhancement that I am exploring are database restructuring and application Dockerization.

## **Database Restructuring**

One of the significant improvements under consideration is a complete restructuring of the database. The current database structure supports song-based entities and relations. To enrich the platform with features such as artist profiles (supporting multiple albums and songs), user-created playlists, and a slider for scrubbing through the song, a more complex database structure is needed.

Restructuring the database would entail the process of normalization to ensure the efficient organization of data. This process would involve dividing the database into two or more tables and defining relationships between the tables to eliminate data redundancy and improve data integrity. This change would require a revision of the existing logic in the codebase to accommodate the new entities and relations.

## **Dockerizing the Application**

In addition to the database restructuring, Dockerizing the application is another key improvement in the pipeline. While I have experience Dockerizing Next.js frontend applications, Dockerizing Supabase is something that is currently under research. Dockerization is an essential step for deploying the application, given the current pricing of Supabase infrastructure which makes it infeasible for long-term usage.

Dockerizing the application will not only streamline the deployment process but also enhance the development experience by ensuring a consistent environment that is easy to replicate and test across different platforms. This process would include creating a Dockerfile that outlines the steps to create a Docker image of the application, and a Docker Compose file to orchestrate the execution of the application's Docker containers.

# **Conclusion**

The development of Drumroll Music has been a highly educational and rewarding experience. By leveraging the benefits of Supabase, Next.js, TypeScript, Tailwind CSS, and Radix UI, this project has been an exercise in creating a comprehensive, robust, and intuitive music streaming platform. 

Overcoming the challenges associated with the design, implementation of the `use-sound` library, and handling data complexities has offered invaluable insights into building a user-friendly music platform. The lessons learned will undoubtedly inform future projects.

Looking ahead, the planned enhancements—database restructuring and Dockerization—underscore the commitment to continuous improvement and the desire to provide users with an even more engaging and dynamic music streaming experience. 

As the Drumroll Music platform continues to evolve, it offers an exciting journey in exploring advanced software development concepts, refining skills, and pushing boundaries. Here's to more music, more learning, and more growth!