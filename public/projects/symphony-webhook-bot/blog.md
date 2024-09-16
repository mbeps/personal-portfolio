- [**Project Reflection: Webhooks Bot**](#project-reflection-webhooks-bot)
	- [Why This Bot Was Built](#why-this-bot-was-built)
		- [Real-Time Data Updates](#real-time-data-updates)
		- [Automating Workflows](#automating-workflows)
		- [System Integration](#system-integration)
		- [Security Monitoring](#security-monitoring)
		- [Replacing Symphony’s Old Solution](#replacing-symphonys-old-solution)
	- [Challenges](#challenges)
		- [Transition from Legacy SDK to BDK](#transition-from-legacy-sdk-to-bdk)
		- [Learning the Symphony BDK](#learning-the-symphony-bdk)
		- [Tight Deadline Before GCP Transition](#tight-deadline-before-gcp-transition)
		- [Maintaining Functionality](#maintaining-functionality)
	- [Conclusion](#conclusion)


# **Project Reflection: Webhooks Bot**

This report reflects on the development of the Webhooks Bot, a tool designed to listen to events via an endpoint and send messages to Symphony chats, whether in direct messages or chat rooms. Built using the Symphony BDK and Spring Boot, the bot was created to provide real-time updates and automate workflows for various teams. It replaced an older solution that was removed when Symphony transitioned from AWS to GCP. This project not only restored vital functionality but also set the foundation for future bots, including the translation bot, by introducing a more modern and reliable codebase.

## Why This Bot Was Built

### Real-Time Data Updates
The primary reason for building the Webhooks Bot was to enable real-time data updates. Webhooks allow for instant notifications when changes or events occur, ensuring that teams have access to the most current information. This reduces the delay in receiving updates and keeps teams informed.

### Automating Workflows
Another key benefit of webhooks is their ability to automate workflows. By triggering specific actions when events occur, manual intervention is reduced. This makes processes more efficient and allows teams to focus on more important tasks.

### System Integration
Webhooks are also effective in integrating various internal systems. They allow data to flow smoothly between different departments, ensuring that information is shared without disruptions. This seamless connection between systems helps improve overall operations.

### Security Monitoring
Webhooks provide enhanced security monitoring as well. They can send instant alerts when suspicious activities or security breaches are detected, enabling teams to respond quickly to potential threats.

### Replacing Symphony’s Old Solution
Symphony previously had a Webhooks solution, but it was removed during their transition from AWS to GCP. Some teams depended on this functionality to receive updates about the systems they were monitoring. When Symphony transitioned, they asked us to build a headless bot to handle this listening and notification functionality. This new bot restored the essential functionality for these teams, ensuring they could continue receiving real-time updates without disruption.

## Challenges

### Transition from Legacy SDK to BDK
One of the main challenges was moving away from the old legacy SDK, which we had been using for all previous bots. The legacy SDK did not support headless bots, which made it unsuitable for building the Webhooks Bot. We had to implement this new bot using Symphony's official BDK, a tool we had no prior experience with.

### Learning the Symphony BDK
Since the BDK was new to us, I had to learn it from scratch. This required understanding a new framework and adjusting our approach, as we could no longer rely on the SDK we had used for a long time. This learning process added complexity to the project, especially with the tight schedule we were working under.

### Tight Deadline Before GCP Transition
The project had to be completed before Symphony's transition from AWS to GCP. This added pressure to the development process, as there was little time to learn the BDK, implement the bot, and ensure it worked as expected. Despite this, we were able to complete the Webhooks Bot on time.

### Maintaining Functionality
The final challenge was ensuring that the new bot offered the same functionality as the old solution. We needed to create a one-to-one replacement that provided real-time updates without losing any features. Successfully doing this allowed us to transition to GCP, save costs, and retain full functionality.

## Conclusion

This experience showed that Symphony's BDK is a significant improvement over the legacy SDK we had been using. The BDK was easier to work with, required less maintenance, and allowed for faster development. It also provided a more reliable codebase with direct support from Symphony. Building the Webhooks Bot set the foundation for future bots, including the translation bot, by proving the effectiveness of this modern framework.

