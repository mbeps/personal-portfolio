# Project Reflection: Webhooks Bot

This report is about the Webhooks Bot. The bot listens to events through an endpoint. It sends messages to Symphony chats, in direct messages and in chat rooms. We built it with the Symphony BDK and Spring Boot. It gives teams real-time updates and automates their workflows. It replaced an older solution that was removed when Symphony moved from AWS to GCP. The project restored functions that teams needed. It also gave us a modern and reliable codebase for later bots, such as the translation bot.

## Why We Built the Bot

**Real-time data updates.** The main reason for the bot was real-time data updates. Webhooks send a notification as soon as an event occurs. Teams always have current information. There is less delay in getting updates.

**Automated workflows.** Webhooks can start an action when an event occurs. This removes manual steps. Teams can spend more time on important tasks.

**System integration.** Webhooks connect our internal systems. Data moves between departments without manual work.

**Security monitoring.** Webhooks can send an alert when they detect suspicious activity or a security breach. Teams can respond to threats quickly.

## Replacing the Old Symphony Solution

Symphony had a Webhooks solution before. It was removed during the move from AWS to GCP. Some teams used it to get updates about the systems they monitored. Symphony asked us to build a headless bot to do this work. The new bot restored the functions these teams needed. They continued to get real-time updates without disruption.

## Challenges

**Move from the legacy SDK to the BDK.** The main challenge was the move away from the legacy SDK. We had used it for all previous bots. It did not support headless bots, so we could not use it for this project. We had to use Symphony's official BDK. We had no experience with it.

**Learning the Symphony BDK.** The BDK was new to us. I had to learn it from the start. This meant learning a new framework and changing our approach. We could not use the SDK we knew well. This made the project harder, and the schedule was tight.

**Tight deadline before the GCP move.** The bot had to be finished before Symphony moved from AWS to GCP. This put pressure on the team. There was little time to learn the BDK, build the bot, and test it. Even so, we finished on time.

**Keeping the same functions.** The last challenge was to give the new bot the same functions as the old solution. We needed a one-to-one replacement with real-time updates and no lost features. We did this. As a result, we moved to GCP, saved costs, and kept all functions.

## Conclusion

This project showed that the Symphony BDK is much better than the legacy SDK. The BDK is easier to use and needs less maintenance. Development is faster with it. It also gave us a more reliable codebase with direct support from Symphony. We used the same framework and approach for later bots.
