- [**Project Reflection: Translate Bot**](#project-reflection-translate-bot)
	- [Why This Bot Was Built](#why-this-bot-was-built)
		- [Replacing the Old Bot](#replacing-the-old-bot)
		- [Issues with the Old Bot](#issues-with-the-old-bot)
		- [Advantages of the New Bot](#advantages-of-the-new-bot)
		- [Asynchronous Functionality and Scalability](#asynchronous-functionality-and-scalability)
		- [Faster Translations and More Languages](#faster-translations-and-more-languages)
	- [Challenges](#challenges)
		- [Making the Bot Asynchronous](#making-the-bot-asynchronous)
		- [Frontend Asynchronous Support](#frontend-asynchronous-support)
		- [Backend Asynchronous Development](#backend-asynchronous-development)
		- [Learning Asynchronous Programming in Spring Boot](#learning-asynchronous-programming-in-spring-boot)
		- [Achieving Full Asynchrony](#achieving-full-asynchrony)
	- [Conclusion](#conclusion)


# **Project Reflection: Translate Bot**
This report reflects on the development of the Symphony Translate Bot, a tool designed to make communication easier for people who speak different languages. Built using the Symphony BDK and Spring Boot 3, the bot was created to replace an older, less reliable version. The older bot, which used a custom SDK, was prone to breaking, required frequent maintenance, and lacked proper support from Symphony. The new bot improves on these issues by offering a more stable, modern codebase and adding many new features over the old bot. It also provides faster translation times and better support for users across different chat formats, greatly enhancing user experience and business efficiency.

## Why This Bot Was Built

### Replacing the Old Bot
The new Symphony Translate Bot was built to replace an existing bot that also handled translations. The old bot was not built using the Symphony BDK but a custom legacy SDK. This caused several problems that made it unreliable and difficult to maintain.

### Issues with the Old Bot
The old bot frequently broke down and required constant maintenance to stay operational. Because it wasn’t built with the Symphony BDK, we couldn’t get support from Symphony. Additionally, the code was complex and difficult to work with, making it challenging to add new features or make improvements.

### Advantages of the New Bot
The new bot, built using the Symphony BDK, solved these issues. It had a cleaner and more modern codebase, which made it much more reliable and easier to maintain. With this new framework, we could get full support from Symphony, speeding up development time and reducing the need for constant repairs.

### Asynchronous Functionality and Scalability
One major improvement in the new bot was its ability to handle tasks asynchronously. The old bot processed translation requests one by one, meaning only one person could use it at a time. The new bot could manage multiple requests simultaneously, allowing several users to access translations at once. It could also be used in chat rooms, not just in one-on-one conversations, which made it more flexible for different communication needs.

### Faster Translations and More Languages
The new bot could translate between multiple languages, similar to Google Translate, eliminating the need for separate bots for different languages. It was also much faster, with translation times reduced from 40 seconds to just 4 seconds in some cases. This significantly improved both user and developer experience, while also increasing efficiency for the business.

## Challenges

### Making the Bot Asynchronous
The main challenge in developing the new bot was making it fully asynchronous. Both the Symphony frontend and the translation service needed to work asynchronously to handle multiple requests at the same time. The old bot handled tasks sequentially, which limited the number of users that could interact with it simultaneously.

### Frontend Asynchronous Support
Thanks to the support we could now get from Symphony, making the frontend asynchronous was relatively straightforward. They provided guidance on how to adjust the frontend to process requests asynchronously. However, this left the backend needing to be made asynchronous as well, which proved to be much more difficult.

### Backend Asynchronous Development
The backend required more effort to make asynchronous. The whole application needed to be async, starting from the entry point of the bot, which was resolved fairly quickly. Once the entry point was taken care of, the translation service itself also needed to be made asynchronous. This was a more complex task, as it required restructuring how requests were processed on the backend.

### Learning Asynchronous Programming in Spring Boot
To implement this, I needed to learn how asynchronous programming works in Spring Boot. I spent time watching tutorials, reading documentation, and studying best practices for async development in Spring Boot. After gaining a better understanding, I made another attempt to convert the translation service to be fully asynchronous.

### Achieving Full Asynchrony
After some trial and error, it became clear that the backend translation service was now working asynchronously. This meant the entire stack—from the frontend to the backend—was asynchronous, allowing the bot to handle more requests at once and significantly improving its performance and scalability.

## Conclusion

Overall, the new bot was a significant upgrade over the old one it replaced. Users were much more satisfied with its performance, and the business benefited from reduced maintenance time. This allowed more focus on adding value elsewhere. Additionally, the bot set a strong foundation for future bots to be built using a simpler, more efficient codebase.

