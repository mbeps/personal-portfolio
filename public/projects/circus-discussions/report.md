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

Welcome to a summary of my final year project at university. This report serves as a concise overview of the journey I embarked upon, the technological choices I made, and the process I followed in creating an interactive and efficient web application. The project reflects my accumulated learnings and is an illustration of my technical abilities put to the test.

Over the course of this document, I'll be diving into the heart of the project, discussing my thought process and the rationale behind every decision I took. I'll start from the fundamental step of selecting the appropriate technology stack, exploring the pros and cons, and how it fit with my project requirements. The focus will then shift to the actual implementation, discussing the architecture and the logic that drives the application. Additionally, I'll touch upon the challenges faced and how they were addressed, providing a well-rounded view of the project's lifecycle.

This brief report provides a snapshot of my project, aimed at offering a clear and succinct understanding of the work done. However, it only scratches the surface of the extensive research, planning, and development that went into making this project a success. For those who wish to delve deeper into the intricacies and finer details, I have prepared a comprehensive report. This report, which was the final deliverable alongside the project code, provides a detailed account of every aspect of the project.

The link to access the complete report is provided at the end of this document. I encourage you to explore it for an in-depth understanding of my methodologies, learnings, and the value this project brings. 

With that said, let's embark on this journey together, shedding light on the choices, challenges, and triumphs that were part of the project's lifecycle.

# **Firebase and Backend Development** 

The development process of the Circus project was as enlightening as it was challenging. While Firebase provided a number of services that facilitated the rapid development and deployment of the application, it also posed its fair share of challenges, particularly in the area of backend development.

## **Backend Development** 

For a dynamic web application like Circus, backend development was critical in managing and manipulating data to enable the application's interactive features. Firebase's suite of backend services, especially the Firestore database and Firebase Authentication, were extensively used throughout the project.

Firebase Authentication, for instance, allowed for a smooth and secure authentication process, accommodating both email-password based and third-party provider sign-ins. While implementing this functionality was largely straightforward, the attempt to add password reset functionality introduced an unexpected bug that caused the entire project to fail. Restarting the project from scratch was a considerable setback, but it provided valuable insight into troubleshooting, error handling, and the overall robustness of Firebase's authentication system.

Creating and managing communities, posts, and user profiles were other critical aspects of the Circus project. Firebase's Firestore database was utilized to handle these data sets, which allowed for real-time updates, efficient data retrieval, and easy scaling.

However, Firestore is a NoSQL, document-oriented database, designed to store, retrieve, and manage document-oriented or semi-structured data. This structure presented difficulties when developing functionalities that required managing relationships between different data entities. For example, associating communities with their creators or members and linking posts to their creators and the communities they belong to were challenging tasks given Firestore's non-relational nature.

# **Technology Stack**

In the development of this project, I employed a robust and modern technology stack that allowed me to construct a scalable, efficient, and interactive web application. The stack incorporated the use of TypeScript, Next.js, Recoil State Manager, Firebase, and Chakra UI. Let's delve into these technologies, their roles, and why they were chosen.

**TypeScript:** TypeScript is a powerful JavaScript superset that brings static typing to the table. The addition of optional static typing is an immense aid in the development of large-scale JavaScript applications, as it allows for early error detection, fosters the creation of more maintainable code, and provides extensive editor support. Leveraging TypeScript proved critical in ensuring the code's reliability and ease of management.

**Next.js:** This popular React framework is an exceptional tool for building server-side rendered (SSR) and statically generated web applications. It presents a toolkit of conventions that simplifies the construction of contemporary, high-performance web applications, and its versatile nature enables easy deployment across various hosting environments. Utilizing Next.js allowed for a smooth development process, offering enhanced performance and SEO capabilities to the web application.

**Firebase:** As a comprehensive mobile and web application development platform, Firebase offers a plethora of tools and services aimed at enabling developers to craft high-quality applications swiftly and efficiently. Its features range from a real-time database, cloud storage, and authentication to hosting services. The seamless integration of Firebase with the Next.js application provided a robust backend service, enabling quick development and management of back-end functionality.

**Recoil State Manager:** Recoil is a potent state management library designed specifically for React applications. It offers a streamlined, flexible, and efficient way to manage shared state across an application. With its React-centric design, Recoil fits perfectly within complex or large-scale applications, providing a robust yet simple state management solution. Its application within this project facilitated the efficient handling and management of the app state.

**Chakra UI:** Known for its customizable, accessible, and responsive UI components, Chakra UI is a highly favored React component library. Designed with accessibility in mind, it offers a range of pre-built components that can be easily tweaked to align with an application's design and branding. Incorporating Chakra UI into the project greatly simplified the process of building aesthetically pleasing and accessible user interfaces.

Each of these technologies played a pivotal role in the successful development of the project, offering unique advantages that helped shape the final outcome. Together, they formed a formidable stack that supported the efficient realization of a high-quality, user-centric web application.

## **Voting Functionality - A Relational Challenge**

Perhaps the most challenging aspect of backend development in the Circus project was implementing the voting functionality. Enabling users to vote on posts necessitated managing relationships between multiple entities: the user, the post, and the vote.

The vote status of a post needed to be stored in the post document and the user document had to store every post a user had voted on, along with the nature of the vote (like or dislike). Consequently, every time a user voted on a post, the overall vote status of the post had to be updated by retrieving the vote from the user's collection and adjusting the total number of votes in the post's document.

This process was significantly complicated by Firestore's non-relational nature. In a relational database, these operations could be carried out through well-defined relations between entities, which would simplify the process and reduce the chances of errors. The complexity of implementing this feature in Firestore highlighted its limitations for applications requiring complex entity relationships.

## **Future Considerations** 

Reflecting on these challenges, it's clear that Firestore's non-relational database structure may not be ideal for applications that involve intricate relationships between entities. While Firebase's suite of services does facilitate rapid development, its inherent limitations must be taken into consideration during the planning stages of a project. Future projects of a similar nature may benefit from backend technologies that support relational databases, like PostgreSQL or MySQL, to efficiently manage the complex relationships between entities.

Despite these challenges, Firebase provided a valuable learning experience, particularly with respect to managing non-relational databases, troubleshooting, and implementing robust and secure authentication. Its capabilities and constraints will continue to inform the approach to backend development in future projects.


# **Frontend Development**
The development of the frontend in this project involved a considerable amount of decision-making regarding the tools, libraries, and technologies that would be used. During the initial stage, a number of options were considered, including various state management libraries, UI libraries, and even different JavaScript frameworks. Ultimately, we settled on using Next.js, which provides a solid foundation for the development of a frontend application.

## **Next.js vs. Regular React**
The choice between using Next.js and regular React was driven by several considerations. React, while powerful and versatile, has some limitations that make it less suitable for large-scale projects such as this one. Firstly, React lacks a defined structure and allows developers to write code in their own style, potentially leading to a cluttered and hard-to-maintain codebase. Secondly, React requires additional libraries and tools for tasks such as routing, state management, and server-side rendering, introducing a steep learning curve and additional complexity. Finally, React's lack of built-in SEO optimization can lead to issues with search engine crawling and indexing.

Next.js addresses these limitations, making it a more suitable choice for our needs. Built on top of React, Next.js is a framework that provides server-side rendering (SSR) and static website generation, alongside automatic code splitting and optimized performance. The support for static exporting in Next.js allows developers to generate static HTML files, which can be served directly from a Content Delivery Network (CDN), resulting in faster page load times and improved performance. 

By using Next.js, we ensured a set standard for code consistency, allowing for more straightforward collaboration between developers. It also eliminated the need for cumbersome configurations and the addition of missing functionalities that were required with regular React.

## **State Management: Recoil vs. React Context API**
State management is a critical aspect of any React application. During the development of this project, we found that using a dedicated state management tool provided several advantages over using the built-in Context API of React.

We chose to use Recoil for state management. Recoil provides a unique approach to managing state with atoms and selectors, which are fine-grained units of state. These can be individually subscribed to, preventing unnecessary re-rendering of components. Recoil provides a single context provider, eliminating the need for multiple context providers, a common issue with the Context API. Additionally, Recoil supports derived state with selectors, which can handle asynchronous operations and error handling, unlike the Context API.

By contrast, the built-in Context API in React, while effective for smaller projects, can become cumbersome to use when dealing with multiple pieces of shared state. It requires the creation of multiple context providers and consumers, leading to a lot of boilerplate code and potential difficulties in managing state. The Context API also does not support derived or computed state, requiring additional libraries or custom logic for such functionality. Finally, the Context API can cause unnecessary re-rendering of components that consume the context, even if they are not using the part of the state that changed.

## **Alternative JavaScript UI Libraries and Frameworks**
Several alternative UI libraries and frameworks could have been considered in the development of this project, including Svelte, Solid, Vue, and Angular.

Svelte, although relatively new, provides a full-stack framework that includes features such as routing and client-side functionality. It uses a structure similar to HTML, making it easier to learn than React. Additionally, Svelte compiles to JavaScript without a virtual DOM or runtime libraries, making it faster than React.

Solid is another option, with a more beginner-friendly approach than React as it uses regular JavaScript or TypeScript instead of JSX.

Solid is also reactive by default, so developers don't need to worry about managing state or triggering re-renders. However, Solid is not as well-known or widely used as React, which could pose a problem in terms of community support and finding solutions to potential issues.

Vue is a progressive framework, allowing developers to incrementally adopt its features as needed. It offers an approachable learning curve, with a simpler syntax than React. Vue also has strong community support and comprehensive documentation. However, the ecosystem around Vue is not as extensive as that of React.

Angular, developed and maintained by Google, is a full-featured framework with a robust set of tools and features. It includes dependency injection, an HTML-based template language, and support for TypeScript, which can make the code easier to understand and maintain. However, Angular has a steeper learning curve than React, and its performance may not be as optimized for large-scale applications.

Each of these alternatives comes with its own pros and cons, but ultimately, the decision to use Next.js was based on the specific needs and requirements of this project. The built-in support for server-side rendering and static website generation, the structured codebase, and the improved SEO optimization provided by Next.js made it the best fit for our project.


## **Styling: Chakra UI**

For this project, we've decided to use Chakra UI, a modern and accessible component library for React applications. Chakra UI simplifies the styling process and provides a range of reusable and composable components that are easy to style and customize. This reduces the need for any additional CSS libraries.

One of the significant advantages of Chakra UI is its focus on accessibility. It adheres to the Web Content Accessibility Guidelines (WCAG), ensuring that the UI components are accessible to a wide range of users, including those with disabilities.

Another advantage is the in-built support for responsive design and dark mode. With Chakra UI, it becomes straightforward to create designs that adapt well to different screen sizes and support both light and dark color schemes.

Chakra UI also follows a modular design, meaning you only need to import the components you are using, reducing the bundle size of your application. This results in better performance, a crucial factor in web development.

Unlike traditional CSS or SCSS or even utility-first frameworks like Tailwind CSS, Chakra UI provides styled components out of the box. This eliminates the need for writing custom CSS or managing CSS files, leading to a cleaner and more maintainable codebase. It also aligns well with React's component-based architecture.

In conclusion, the choice of Next.js, Recoil, and Chakra UI for the frontend development of this project was made after considering the project requirements, the scale of the application, and the need for a maintainable and performant codebase. These tools and libraries provide a solid foundation for the development of a robust and efficient frontend application.

# **Full Report**
This is the full report which was submitted alongside the codebase. This report goes into much more depth about the journey of developing this project.

[Report](/reports/Project-Final-Report.pdf)