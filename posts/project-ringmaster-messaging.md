---
title: "Reflecting on Ringmaster Messaging"
subtitle: "Brief report talking about what I learnt while developing this platform"
date: "18-06-2023"
display: "false"
---

- [**Project Reflection: Ringmaster Messaging App**](#project-reflection-ringmaster-messaging-app)
- [**Backend Development**](#backend-development)
	- [**MongoDB and Prisma**](#mongodb-and-prisma)
	- [**Real-Time Messaging with Pusher**](#real-time-messaging-with-pusher)
	- [**Image Handling with Cloudinary**](#image-handling-with-cloudinary)
- [**Frontend Development**](#frontend-development)
	- [**Next.js and TypeScript**](#nextjs-and-typescript)
	- [**Styling: Tailwind CSS and Headless UI**](#styling-tailwind-css-and-headless-ui)
	- [**State Management: Zustand**](#state-management-zustand)
- [**Challenges**](#challenges)
	- [**Active User Status Management**](#active-user-status-management)
	- [**Dockerizing the Application**](#dockerizing-the-application)
- [**Conclusion**](#conclusion)


# **Project Reflection: Ringmaster Messaging App**

This report reflects on the development of the Ringmaster Messaging App, which provided a platform for real-time communication between users. Through this project, I had the opportunity to deepen my understanding of various front-end and back-end technologies, and to consider how these technologies could be used to effectively implement the desired features of the application.

# **Backend Development**

## **MongoDB and Prisma**
For the database, MongoDB was chosen, which is a document-oriented database well-suited for applications like Ringmaster that require flexible, JSON-like documents. MongoDB's structure is particularly ideal for handling chat messages and user data in a messaging app. Due to the relatively straightforward nature of the data relationships in Ringmaster, a NoSQL database like MongoDB was a fitting choice. For a more complex project with extensive relations, a relational database such as PostgreSQL might be more appropriate. This decision is discussed further in my [blog post on databases](https://www.mbeps.co.uk/posts/databases).

To interact with the MongoDB database, we utilized Prisma, an open-source, next-generation ORM. This decision provided a type-safe client that abstracted away the complexities of the database, making it easy to write efficient and bug-free queries. Using Prisma simplified the process of creating, reading, updating, and deleting documents in MongoDB. As I've shared in my [blog post on ORMs](https://www.mbeps.co.uk/posts/orm), the benefits of using an ORM include reducing boilerplate code, minimizing SQL injection attack risk, and providing a clear, intuitive API for database operations.

## **Real-Time Messaging with Pusher**
For the real-time functionality of Ringmaster, Pusher was used. This service allowed for quick and reliable bi-directional communication between users, making the experience of using Ringmaster smooth and responsive. Implementing Pusher was quite straightforward, aided by good documentation and support from the provider. Pusher's efficiency and reliability were critical to the success of the messaging feature of Ringmaster.

## **Image Handling with Cloudinary**
Cloudinary was used as the cloud-based solution for storing and serving images in Ringmaster. This service offered an efficient way to manage images uploaded by users, such as profile pictures and images sent within chats. Cloudinary ensured that these images were stored securely and could be accessed quickly and reliably.

# **Frontend Development**

## **Next.js and TypeScript**
For the front-end development of Ringmaster, we used Next.js, a popular framework built on top of React. Similar to the previous project, the benefits of Next.js such as its support for server-side rendering and static website generation, as well as its structured codebase, made it the optimal choice for this project. TypeScript was used in conjunction with Next.js to provide type safety and improved developer experience, including advanced editor support and early error catching.

## **Styling: Tailwind CSS and Headless UI**
For styling, we decided to use Tailwind CSS, a low-level, utility-first CSS framework. This was a departure from using component libraries like Chakra UI in previous projects. Tailwind CSS allowed us to quickly style the application using utility classes, without writing any custom CSS. This approach was beneficial in focusing on the functionality of the project and provided a solid foundation for responsive design. While not as straightforward as using a component library like Chakra UI, the extensive resources and excellent documentation for Tailwind CSS made it a worthwhile learning experience.

To complement Tailwind CSS, we utilized Headless UI for creating unstyled UI components. This allowed us to maintain the consistency of our Tailwind CSS styles across all components, while still leveraging the benefits of pre-built components.

## **State Management: Zustand**
For state management in Ringmaster, we used Zustand. Compared to more complex state management solutions like Recoil, which we used in our previous project Circus Discussions, Zustand offered a simpler and more intuitive API, which was perfect for this smaller scale project. This state manager was vital for tracking the active users on the platform in real-time, a challenging aspect of this project. The combination of Zustand and Pusher allowed us to monitor the active users effectively and update the UI in real-time.

# **Challenges**

While developing the Ringmaster messaging app, we faced a number of technical challenges that contributed to our learning and improved the final outcome of the project. These challenges ranged from managing the active status of users in real-time to the more recent task of Dockerizing the application.

## **Active User Status Management**

The ability to track and display the active status of users is an essential feature of any messaging app, including Ringmaster. This feature adds a layer of interactivity and responsiveness to the user interface, showing users who is available to chat in real-time.

Managing this feature was a significant challenge due to its dynamic nature and the need for it to be accurate across all instances of the application. To handle this, we used Zustand, a lightweight state management tool. Zustand was critical in keeping track of the currently active users on the platform, storing this information in an easily accessible state that could be used throughout the application.

However, the state in Zustand only reflects the status at the time of the page load or refresh, and wouldn't update in real-time when users sign in or out of the platform. To handle the real-time updates, we used Pusher, a powerful tool for real-time communication. 

When a user signs in or out, the application communicates this change to Pusher, which then broadcasts this update to all connected instances of the app. Upon receiving the update from Pusher, the Zustand state would then be updated, and this change would be reflected in the UI.

Integrating Zustand and Pusher to work together to manage the active status of users was complex but essential to creating a responsive, real-time user experience. Through this challenge, we learned more about managing state in a real-time application and implementing third-party services to enhance the capabilities of our app.

## **Dockerizing the Application**

A more recent challenge has been the task of Dockerizing the Ringmaster application. Dockerization helps in managing the environment and dependencies of an application, making it more portable and reliable across different platforms and systems. While Dockerizing the frontend with Next.js was fairly straightforward due to previous experience, the Dockerization of the MongoDB database proved to be more complex.

The main issue encountered was the database not being recognized, and having to manually create the database within the Docker container. This task was unexpectedly difficult and required a significant amount of tinkering to get all the different Docker services to work together.

Currently, we are focusing on Dockerizing the MongoDB and Next.js components of the application, as these are readily available as Docker images. This endeavor provides a hands-on experience in Dockerization, a crucial skill in the modern software development workflow, and presents an opportunity to learn and overcome new challenges.

# **Conclusion**
Overall, the development of the Ringmaster Messaging App was a rewarding and educational experience. We successfully built a messaging app using a diverse set of technologies, managing to implement features such as real-time messaging, group chats, image sharing, and user authentication. I expanded my knowledge in areas such as CSS styling with Tailwind CSS, real-time communication with Pusher, state management with Zustand, and learned to effectively combine these technologies to create a comprehensive application. The current efforts to Dockerize the application pose another exciting challenge and an opportunity to learn. This project served as an invaluable opportunity to practice and further develop my skills in full-stack web development.