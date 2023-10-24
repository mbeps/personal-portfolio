- [**Project Reflection: Quizmify**](#project-reflection-quizmify)
- [**Frontend Development**](#frontend-development)
	- [**Next.js for SSR and Static Generation**](#nextjs-for-ssr-and-static-generation)
	- [**Tailwind CSS for Responsive Design**](#tailwind-css-for-responsive-design)
	- [**Shadcn UI for Component Design**](#shadcn-ui-for-component-design)
- [**Backend Development**](#backend-development)
	- [**Node.js for Server-side Execution**](#nodejs-for-server-side-execution)
	- [**Prisma ORM for Data Handling**](#prisma-orm-for-data-handling)
	- [**Axios for HTTP Requests**](#axios-for-http-requests)
	- [**NextAuth for Authentication**](#nextauth-for-authentication)
	- [**Zod for Type-safe REST API Development**](#zod-for-type-safe-rest-api-development)
	- [**MySQL as the Relational Database**](#mysql-as-the-relational-database)
	- [**OpenAI for Dynamic Quiz Generation**](#openai-for-dynamic-quiz-generation)
- [**Challenges**](#challenges)
	- [**Handling Open-Ended Questions**](#handling-open-ended-questions)
	- [**Managing Multiple-Choice Questions**](#managing-multiple-choice-questions)
	- [**Ensuring JSON Validity with OpenAI API**](#ensuring-json-validity-with-openai-api)
	- [**OpenAI API's Limitations and Imprecision**](#openai-apis-limitations-and-imprecision)


# **Project Reflection: Quizmify**

This report will delve into the creation and realization of Quizmify, an innovative platform that leverages OpenAI's capabilities to revolutionize the realm of quizzing. It provides a user-friendly interface to generate dynamic quizzes across a plethora of topics, giving users an engaging platform to test their knowledge. The project was an amalgamation of state-of-the-art technologies in both frontend and backend development, delivering a seamless user experience.

# **Frontend Development**

## **Next.js for SSR and Static Generation**

Next.js played a foundational role in the frontend development of Quizmify. It was selected for its unparalleled support for server-side rendering (SSR) and statically generated applications. This ensured a swift and smooth user interface, bolstered by performance benefits.

## **Tailwind CSS for Responsive Design**

Tailwind CSS has emerged as a sought-after utility-first CSS framework. Its adoption in Quizmify not only made the design process streamlined but also provided immense flexibility in crafting responsive and custom layouts. The consistency and speed of development offered by Tailwind significantly enhanced the platform's aesthetics and responsiveness.

## **Shadcn UI for Component Design**

Taking a cue from the previous Magician AI Platform, Quizmify too opted for Shadcn UI. As an advanced collection of components built upon Radix UI and integrated with Tailwind CSS, it greatly simplified the development process. Shadcn UI components seamlessly merged with the application's design language, ensuring coherence and a modern touch to the user interface.

# **Backend Development**

## **Node.js for Server-side Execution**

Node.js, a robust JavaScript runtime, was employed for the backend operations of Quizmify. It facilitated efficient server-side execution, ensuring that the application logic was executed seamlessly, guaranteeing a flawless user experience.

## **Prisma ORM for Data Handling**

Data plays a crucial role in platforms like Quizmify, where user scores, metrics, and quiz content need efficient handling. Prisma, an ORM (Object-Relational Mapping) tool, offered type-safe querying and ensured efficient data operations, bridging the application logic with the database seamlessly.

## **Axios for HTTP Requests**

To facilitate communication between the frontend and backend, Axios was the chosen tool. This promise-oriented HTTP client streamlined the process of sending and receiving HTTP requests, particularly crucial when fetching quiz data or posting user scores.

## **NextAuth for Authentication**

Authentication forms the crux of user-oriented platforms. NextAuth, tailored specifically for Next.js applications, was harnessed to offer easy authentication mechanisms. Its ability to provide various authentication strategies and user session management ensured that users could effortlessly sign up, log in, view their scores, and interact with the platform.

## **Zod for Type-safe REST API Development**

API endpoints need careful validation to ensure data integrity and safety. Zod was employed for this very purpose, offering TypeScript schema declaration and validation. It played a pivotal role in safeguarding data exchanges between the frontend and backend.

## **MySQL as the Relational Database**

For storing user data, quiz scores, and performance metrics, MySQL, a stalwart in the realm of open-source relational database management systems, was chosen. Its reliability and scalability ensured that as Quizmify's user base grew, the system could effortlessly handle the influx of data.

## **OpenAI for Dynamic Quiz Generation**

The heart of Quizmify lies in its dynamic quiz generation, which is empowered by OpenAI's GPT-3.5. Through this integration, users could select any topic of their interest, post which the system would generate quiz questions in real-time, making every quizzing session unique and engaging.

# **Challenges**

## **Handling Open-Ended Questions**

One of the core challenges of Quizmify revolved around managing open-ended questions. Since the system generated questions where specific words were randomly concealed to test the user's knowledge, it was crucial to ensure that users couldn't exploit browser tools like inspect element to reveal the concealed words. 

To combat this, a strategy was developed where the words were removed entirely on the backend and then relayed to the frontend. Simultaneously, the complete sentence was securely stored in the backend to compare it with the user's answers. This added an extra layer of complexity to the application logic and demanded meticulous attention to ensure data integrity and a fair testing environment.

## **Managing Multiple-Choice Questions**

Multiple-choice questions, though seemingly simpler, presented their unique set of challenges. Beyond just generating the main question and its correct answer, the system was tasked with creating plausible distractors (incorrect options). Each user's response had to be validated against the correct choice, and while this comparison was relatively straightforward, ensuring that the distractors were relevant and not misleading was crucial for maintaining the quality of the quizzes.

## **Ensuring JSON Validity with OpenAI API**

Interfacing with the OpenAI API demanded that data exchanged be in valid JSON format. However, outputs from ChatGPT sometimes deviated from the standard, causing unforeseen errors. 

To mitigate this, a library function was innovatively designed. Upon detecting a JSON inconsistency, both the error and the faulty JSON were dispatched to GPT, which would then attempt to rectify the mistake. This corrective process would loop recursively up to three times. If the JSON remained invalid even after three iterations, the system would abandon the quiz generation attempt for that particular request.

The recursive error-checking not only added to the system's robustness but also substantially impacted the application's speed, especially with longer questions or intricate topics.

## **OpenAI API's Limitations and Imprecision**

While the OpenAI API was pivotal for Quizmify's core functionality, its occasional unreliability presented hurdles. The accuracy in marking and providing feedback for open-ended questions was found lacking, especially since the system's comparison was against entire sentences rather than specific concealed words. This could lead to discrepancies in scoring, especially if a user's phrasing slightly deviated from the original, yet was contextually correct.

Further compounding the issue was the inherent slowness arising from the repeated JSON checks. As questions became lengthier or topics more nuanced, the application's response times suffered, potentially diminishing the user experience.

In light of these challenges, despite the promising potential of leveraging OpenAI's capabilities, the decision was made to momentarily halt further progression of the Quizmify project. The combination of API unreliability, scoring inaccuracies, and lagging performance necessitated this pause, underscoring the need for further refinement before any potential future relaunch.