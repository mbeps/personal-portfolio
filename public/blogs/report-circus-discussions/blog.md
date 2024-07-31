- [**Introduction**](#introduction)
- [**Firebase and Backend Development**](#firebase-and-backend-development)
	- [**Backend Development**](#backend-development)
- [**Technology Stack**](#technology-stack)
	- [**Voting Functionality - A Relational Challenge**](#voting-functionality---a-relational-challenge)
	- [**Future Considerations**](#future-considerations)
- [**Frontend Development**](#frontend-development)
	- [**Next.js vs. Regular React**](#nextjs-vs-regular-react)
	- [**State Management: Recoil vs. React Context API**](#state-management-recoil-vs-react-context-api)
	- [**Alternative JavaScript UI Libraries and Frameworks**](#alternative-javascript-ui-libraries-and-frameworks)
	- [**Styling: Chakra UI**](#styling-chakra-ui)
- [**Full Report**](#full-report)

# **Introduction**

This is a summary of my final year project at university. The report showcases a succinct overview of the journey I embarked upon and the technological choices I chose in the creation of an interactive and efficient web application. This project reflects accumulated learnings and is an illustration of technical abilities put into practice.

I will go to the root of the project in the body of this document, discussing my train of thought and what has led me to every decision I took. I will start from the basic step of choosing the appropriate technology stack, the pros and cons, and how it fitted the requirements of my project. The focus will then shift to actual implementation, in which I'll be discussing architecture and the driving logic of the application. I will also mention challenges that were faced and how they were addressed, thereby giving a holistic view of the project lifecycle.

This is a short report on my project, aimed at offering the reader a clear and succinct understanding of the work done. It barely gives a feel of the in-depth research, detailed planning, and development involved in making this project successful. A comprehensive report is prepared for those who want to understand more about the intricacies involved and the finer details. Describing each aspect of the project, this report is the final deliverable along with the project code.

The link to the full report is at the very end of this document. Please have a look for an in-depth understanding of the methodologies that I followed, learnt and value brought in by this project.

Having said that let us start this journey together, reflecting on decisions, difficulties and successes that happened through lifecycle of the project.

# **Firebase and Backend Development**

The development process of the Circus project was enlightening and full of challenges. Excluding time on the development side by allowing us to be fast in the development and deployment of an application with a given number of services, Firebase had its own problems, especially in the process of backend development.

## **Backend Development**

For a dynamic web application like Circus, the role of backend development in managing and manipulating data was very critical to have the application's interactive features. Firebase's suite of backend services was in-depth used during the project—especially Firestore Database and Firebase Authentication.

For instance, Firebase Authentication provided a smooth and secure process of authentication that caters to both email-password-based and third-party provider sign-ins. The implementation for this was quite easy, but the attempt to add password reset functionality introduced an unexpected bug that caused the entire project to fail. Having to restart the project in its entirety was a big backward step; however, it offered valuable insight into troubleshooting, error handling, and the general robustness of Firebase's authentication system.

The other critical aspects of the Circus project were the creation and management of communities, posts, and user profiles. In this case, these datasets were handled by Firebase's Firestore database, which grants real-time updates, efficient data retrieval, and ease of scaling.

In contrast, Firestore is a NoSQL, document-oriented database designed for storing, retrieving, and managing document-oriented or semi-structured data. As a result of this structure, the complicated development of functionalities where the relationships between the different data entities needed to be managed: it was hard to associate communities with their creators or members and posts to their creators and the communities that they belong to because Firestore is not a relational database.

# **Technology Stack**

Part of the development used a strong, modern technology stack that would allow me to build a scalable, effective, and interactive web application. It used TypeScript, Next.js, Recoil State Manager, Firebase, and Chakra UI. Let's take a look at these technologies, their roles, and why they were chosen.

TypeScript is essentially a powerful superset of JavaScript, adding optional static typing, which is of big help in the development of large-scale JavaScript applications. This facilitates early error detection and thus creates more maintainable code with full editor support. Just how critical this was to the reliability and ease of management of the code could not be overemphasized.

Next.js: This framework stands out among the very popular ones around React. It serves as a really good resource when building server-side rendered and statically generated web applications. It provides conventions that simplify the creation of modern, high-performance web applications and makes it easy to deploy in various hosting environments. It provided ease of development and further supplied improved performance and SEO for the web application.

Firebase is the entire platform for developing mobile and web applications that offers a myriad of tools and services aimed at letting any developer craft high-quality applications fast and efficiently. They include real-time databases, cloud storage, authentication, and hosting. The seamless integration of Firebase with the Next.js application provided a robust backend service that would enable quick development and management of the back-end functionality.

**Recoil State Manager:** It is a small but very powerful library targeted particularly at the state management of React applications. It offers a simple, flexible, and efficient way for shared-state management across the app. Due to its React-centric design, it could find a place in complex or large-scale applications where it provides both robustness and simplicity in state management. It helped a lot in handling and maintaining the state of this app easily.

**Chakra UI:** With its ultra-customizable, accessible, and responsive UI components, Chakra UI comes to the foreground as one of the most used React component libraries. This library, accessibility-centric by design, proposes a long list of prebuilt components easily tuned to an application's design and branding. Integrating Chakra UI into the project dramatically simplified the task of creating beautiful and accessible user interfaces.

Each of these technologies contributed significantly to the completion of the project, each providing its unique benefits that helped pattern the final output. Together, they formed a powerful stack backing up an effective realization of a top-quality, user-oriented web app.

## **Voting Functionality - A Relational Challenge**

Probably, the most complex part of the backend developed in the Circus project was the implementation of vote logic. Allowing a user to vote for a post means creating relationships between three entities: the user, the post, and the vote.

It was required that the post document store the vote status of the post, and all the posts a user voted on, along with the nature of the vote—like or dislike—were to be stored in the user document. Consequently, any time a user voted for a post, the general vote status of the post had to be updated by fetching the vote from the user's collection and update the aggregate number of votes in the post's document.

This process was hugely complicated because Firestore is not relational. In a relational database, these operations would be carried out through the well-defined relations between entities, so it would be much easier with fewer chances of errors. How complicated it was to implement this feature in Firestore really brought out the limitations of Firestore when dealing with applications that required complex relationships between entities.

## **Future Considerations**

Looking back at all these challenges, what becomes very obvious is that Firestore, with its non-relational database structure, is not fit for applications involving complicated relationships between entities. Although Firebase does support fast development with its suite of services, such intrinsic shortcomings at the very core need to be factored in at the initiation of a project. Such future projects may make use of relational databases employing backend technologies like PostgreSQL or MySQL, which can effectively handle the complex relationships between entities.

Despite these challenges, Firebase was a great learning experience in working with non-relational databases, troubleshooting, and implementing robust, secure authentication. The capabilities and constraints will inform the approach toward back-end development moving forward.

# **Frontend Development**
Development of this project's frontend required a lot of decisions about the tools, libraries, and technologies that were to be used. Specifically, in the beginning phase of this assignment, state management libraries, UI libraries, and even alternative JavaScript frameworks were considered. We finally picked Next.js because it offers a very solid out-of-the-box base for building a frontend application.

## **Next.js vs. Regular React**
The choices of using Next.js and regular React were made for a few reasons. While React is an ultra-powerful and versatile library, it has certain limitations that make it less suitable for large-scale projects such as this. First of all, React has no defined structure; therefore, due to everyone being able to write code in their own style, it can quickly become cluttered and hence hard to maintain. Second, React is a library and thus needs additional libraries or tools for things like routing, state management, or server-side rendering, making the learning curve steep and complex. Finally, a problem React can create is with search engine crawlers or indexers due to the lack of built-in SEO optimization.

Next.js is the improvement on most of these deficiencies, making it more relevant to our needs. Put simply, Next.js sits on top of React, a framework supplying server-side rendering—static website generation—along with automatic code splitting and optimized performance. The support for static exporting in Next.js allows one to generate static HTML files so that they may be served directly from a Content Delivery Network alone, resulting in faster page load times and better performance.

By using Next.js, we made sure that we followed the standard of code consistency. This provided more flexibility when it came to collaboration with other developers. This also meant that we Avoided heavy configurations and the implementation of absent functionalities, required by regular React.

## **State Management: Recoil vs. React Context API**
State management in every React application is very critical. In the process of project development, we had a feeling that with a certain state management tool, there were several benefits over using React's Context API.

We used a library called Recoil for state management. It's a rather different way of managing states through atoms and selectors, which are very fine-grained units of state. They could be subscribed to individually, thereby avoiding excessive re-rendering of components. It has a single context provider, unlike the Context API where multiple context providers are a common problem. Derived state is also supported in Recoil by selectors, which are comparable to the Context API but support asynchronous operations and error handling.

On the other hand, it is good enough for smaller projects, but eventually, several pieces of shared state will become a pain with React's built-in Context API. Using the Context API requires that multiple context providers and consumers be created, involving a lot of boilerplate code, and may be hard to handle the state. No support exists for derived or computed state in the Context API. Additional libraries are needed, or some custom logic should be implemented to add this functionality. Finally, the Context API may cause needless re-renders of consumer components for contexts when their value changes, even if a part of the state changed that is not used in the consumer.

## **Alternative JavaScript UI Libraries and Frameworks**
Some alternative UI libraries or frameworks for this project could have been Svelte, Solid, Vue, and Angular.

Svelte provides a full-stack framework with routing and client-side functionality; however, it is relatively new. Its structure is basically similar to HTML, so learning becomes quite easier than React. Svelte also transpiles to JavaScript, although without using a virtual DOM or runtime libraries, making it faster than React.

The alternative to these is Solid. Not that these are among the easiest frameworks to learn, but compared to React, Solid may be said to be more friendly for beginners since it uses regular JavaScript or TypeScript rather than JSX.

By default, Solid is reactive. Developers don't need to put much effort into changing states or forcing re-renders. The potential problem with Solid is that it's not as popular or widely used as React, creating the possible issues of community support and finding the proper answer to a potential problem.

Vue is a progressive framework; it allows incremental adoption of features as per the need. It has a much more approachable learning curve, with easier syntax than React. Besides, Vue has large community support and heavily detailed documentation. At the same time, the Vue ecosystem is not quite as big as React's.

Angular is a full-fledged framework that offers a lot in the way of tools and features. Dependency injection, an HTML-based template language, and support for TypeScript all combine to possibly aid in readability and maintainability. On the other hand, Angular has a steeper learning curve than React, and performance might not be optimized for large-scale applications.

Of course, each of these alternatives has pros and cons, but finally, this project had certain needs and requirements for which Next.js was chosen. Inbuilt support for server-side rendering and static website generation, structured codebase, and improved SEO optimization—Next.js fitted well in our project.

## **Styling: Chakra UI**

For this project, we are going to make use of Chakra UI. It's a modern and accessible component library designed for React applications. Due to the fact that Chakra UI simplifies much of the styling process and includes a number of reusable, composable components styled and easily themed, the need for any extra CSS libraries is alleviated.

One of the main advantages with Chakra UI is that it really has a strong focus on accessibility. In addition, it complies with the WCAG guidelines, hence rendering UI elements that guarantee that a wide range of users, especially those with disabilities, can use them.

Other advantages include native support for responsive design and dark mode. With Chakra UI, it is easy to make a design flexible enough to be viewed on any screen size or display well in any light/dark color scheme.

Chakra UI is also designed in a modular fashion. You need to import only the components in use, hence reducing the bundle size of your application. This goes on to improve performance, which is a very critical issue in web development.

One of the main differences is that Chakra UI, unlike traditional CSS or SCSS, or even utility-first frameworks like Tailwind CSS, has components out of the box that are styled. This means no need to write custom CSS or worry about cleaning up your CSS files; the codebase will stay neat and clean. Also, this approach goes nicely with React's component-based architecture.

Next.js, Recoil, and Chakra UI were chosen for frontend development in this project based on the scale of the application, needs, and the need for a maintainable and high-performance codebase. These tools and libraries support the work of constructing a robust and efficient frontend application.

# **Full Report**
This is the full report which was submitted alongside the codebase. This report goes into much more depth about the journey of developing this project.

[Report](/reports/Project-Final-Report.pdf)