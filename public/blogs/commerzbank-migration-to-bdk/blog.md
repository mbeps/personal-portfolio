# Moving On From Our Legacy Symphony Bots

*Why we replaced a custom bot platform with the standard Symphony BDK, and what the migration gave us.*

Symphony is a platform for secure messaging and collaboration. Many companies in financial services use it. We use bots in Symphony to automate routine work. The bots translate messages, run polls, and send news feeds. They also tell teams when systems do not operate correctly.

For many years, all bots operated on a custom internal SDK that was a layer on top of the Symphony APIs. We started to replace this setup in 2024, and the first discussions were in 2023. We migrated several bots, we retired some, and we built new ones. We also rebuilt two business-critical products as standalone web applications. This post tells why we made this change. It also tells what the change delivered.

## The old setup

### One repository, one custom SDK

All bots (including current and deprecated ones) were in a single repository, in a `BOTS` directory which included about 20 bots. A custom SDK was in the same repository which we called CDK.

The CDK was created before the BDK existed. At that time, Symphony supplied only REST APIs. The CDK was an abstraction over these APIs, and at first it was a good abstraction. But the CDK had no functions beyond the functions of the APIs and the newer BDK. As time passed, the CDK became bloated and messy.

Business logic that was specific to one bot sometimes went into the CDK, where it did not belong. Sometimes this logic went into the bot itself. There was no consistent rule for the location of the logic.

When the BDK became available, the CDK became a middleman layer between the bots and the BDK instead of being replaced. The bots did not connect to the BDK directly. They connected only to the CDK. The logic of one bot could be in two places. Also, if a bot needed a BDK function that the CDK did not provide, then the CDK would need to be updated which was not feasible. Because of this, it was slow to build new bots and to integrate latest features from Symphony.

Some components of the CDK had been in the code for a very long time. One component had the name `cqrs`. No one knew its function anymore.

### Almost no documentation and no experts

The CDK had almost no documentation. Because of this, it was very difficult to understand how anything operated. It was slow and risky to create new bots and to debug the existing bots. Also, the engineers who originally built the CDK had left the company or had moved into other roles. There was nobody left who had a good understanding of the code.

### Manual procedures

Deployment and operations were also painful. A shell script started all the bots. An engineer had written this script approximately six years earlier, before the BDK existed. Each deployment used the same procedure. We cloned the code onto a server, and then operations ran the script manually to start the bots. This procedure took approximately one hour, and usually something went wrong.

The tools from Symphony showed us that it was possible to start bots in a much simpler way. We wanted the bots to start automatically after a deployment.

CI/CD was not better. For each bot and each environment, an engineer had to create a pipeline manually from a template file. An engineer also had to run the pipeline manually each time that bot changed. Our TeamCity setup was a grid of almost identical workflows. An engineer initialised each workflow by hand.

### Fragile and outdated code

All the bots shared one repository and one set of libraries. Because of this, a change to one bot could cause a failure in a different bot. If one bot needed a newer version of a shared library, the upgrade could remove functions that a different bot depended on.

Most of the code was from approximately 2018, and nobody had changed much of it since then. This included critical parts such as the startup script. Newer and simpler methods existed for the same tasks. But the codebase had not caught up.

Because the CDK sat between the bots and the BDK, each BDK update could cause a failure in the CDK. If the CDK failed, all the bots stopped. Most BDK releases made time-consuming updates to the CDK necessary. We were refactoring approximately 180 instances of deprecated functions. This work was necessary only to keep the system in operation. As a result, our effort went into maintenance instead of into new functions and new bots.

### The upgrade that failed

An upgrade of the old codebase had already been attempted. A previous engineer tried to move the code from Java 8, Spring Boot 2.4, and BDK 2.2 up to Java 17, Spring Boot 3, and BDK 3. The plan was to do this in stages. The target of the first stage was Java 11, Spring Boot 2.7, and BDK 2.14.

This first stage caused severe regressions. Some bots lost functions. For example, the Translate Bot could no longer process documents, and the Data Notification Bot could no longer connect to DACS. The stage also introduced new defects. The damage was never repaired. The codebase never reached its target.

### Separation from Symphony

Because our codebase followed our own conventions and not the conventions of Symphony, we were cut off from their ecosystem. The technical support team at Symphony could not help us with a codebase that did not look like theirs. Their documentation also rarely applied directly. Some Symphony functions, such as headless bots, were never implemented in our CDK at all. This blocked workflows that we were starting to need. These functions would also have made many existing workflows simpler.

In theory, the CDK could have been packaged as a Gradle dependency but that was never done. We thought that it was a bad investment to patch an architecture that we no longer believed in.

The stack showed the same problem:

| Component | Old | New |
| --- | --- | --- |
| Java | 11 | 25 |
| Gradle | 6.9 | 9.4 |
| Spring Boot | 2.4 | 3.5 |
| Symphony Java BDK | 2.14 | 3.3 |

### What we wanted instead

The target was clear:

- One repository for each bot. This gives smaller and simpler codebases, a cleaner Git history, and independent dependency versions. The CI/CD pipelines then run only when that bot changes.
- Bots that follow the Symphony conventions. This gives direct access to the support and documentation from Symphony. It also lets us use BDK functions as soon as they ship, including headless bots.
- Simple deployment. The bots start automatically after a deployment. There are no manual scripts that take one hour.

## What we migrated

### Translate Bot

I led the migration of the Translate Bot. This bot was the first proof that the new approach worked.

The old bot was built on the legacy SDK and not on the BDK. It failed frequently and needed constant maintenance. Symphony could not support it. The bot processed requests one at a time, so only one user could translate at a time. A translation could take as long as 40 seconds.

The new bot is built on the BDK and Spring Boot 3, and it is asynchronous from end to end. Many users can translate at the same time. In some cases, the translation time decreased from approximately 40 seconds to approximately 4 seconds. The new bot also works in rooms and not only in direct chats. It offers functions that the old bot did not have. These functions are a form to select between multiple languages, a higher translation capacity, and support for rich text.

The most difficult part was to make the backend asynchronous. The frontend was straightforward because Symphony gave us guidance. This was a benefit of following their conventions for the first time.

The backend was harder. I had to restructure the processing of requests. I spent time learning asynchronous programming in Spring Boot from documentation and tutorials. After some trial and error, I converted the translation service, and the full stack became asynchronous. The improvement in performance and scalability was immediate.

### Blog Bot

I migrated the Blog Bot with one clear goal: to remove its unnecessary database dependency. We achieved this goal without any regressions in function.

The larger difference is usability. With the old bot, a user had to register the rooms manually. The administrator typed the room names by hand, and the names had to be fully correct before the bot could use them. The new bot dynamically finds the rooms where both the bot and the user are members. Because of this, only the applicable rooms are shown.

The new bot also lets users:

- select multiple rooms at the same time
- message people directly
- choose colours
- format messages with rich text that uses Markdown

The old bot supported only MessageML, which regular users found difficult to understand. I kept MessageML as an option for advanced users.

### Poll Bot (replacing the Survey Bot)

The old Survey Bot had many functions, but its core polling function was weak. After some time, it stopped working completely, and it was never repaired. One reason was that the codebase made repairs unattractive.

Its polling was also limited to rooms. The bot could not send a poll directly to one user. It also could not send a poll to several users at the same time.

The new Poll Bot fully replaces the Survey Bot. Users can send polls directly to one user or to many users. A poll can also have an expiry time.

### RSS Bot

We also ported the RSS Bot, which pushes feeds into Symphony. The old version crashed regularly when it handled many feeds. Its design was unfriendly, and users found it confusing. It could also put the feeds into the wrong order. It was not practical to keep this bot in operation on the old codebase.

## What we retired

Not every bot made the move. We discontinued a number of bots because they no longer gave business value. This was intentional. The new setup makes it much easier to see what each bot actually contributes.

## Two products that became web applications

The migration also forced a larger question: should some of these products have been bots at all?

Two products, the Data Notification Bot and the Rates Bot, were important business applications, and they had web portals for end users. But an administrator managed the admin functions through the bot itself, by typing commands that permitted no errors.

It had always been a liability to build these products on Symphony. If Symphony had a failure, these business applications also failed. Both products eventually showed how fragile this was. The Data Notification Bot failed and caused severe problems for a team for over a year. The original developer came back to repair it, but deployment was still not possible because the old libraries and frameworks had too many vulnerabilities. The Rates Bot leaked memory and had to be restarted every day.

The development experience was also bad. Both applications were Java codebases with HTML hard-coded as strings, and the client fetched these strings to render the pages. To work on the UI, a developer had to concatenate and escape strings in Java.

The replacements are not bots. They are standalone full-stack web applications, built with modern libraries and frameworks. Both frontends use Next.js, React, and TypeScript. The Data Notification application is full-stack TypeScript. The Rates application uses a Java Spring Boot 4 backend, which is a better fit for the constraints of that project.

Authentication also improved. The old Data Notification application used a plain email address and password. It had no email verification and no password reset. The new applications use OAuth with Microsoft Entra ID, and Rates now also has authentication. This is more convenient for the users and more secure.

The new applications are faster, more user-friendly, more reliable, and responsive on mobile devices. None of these things was true for the old applications.

These applications also produced shared infrastructure. A dedicated authentication service now provides centralised authentication for all our web applications. Because of this, no application must keep its own authentication mechanism, and we register only one application in Entra ID. Other services followed later, for tasks such as email and LPDA roles.

## What we built new

Migration was only part of the work. The simplified stack also made it possible to release bots that did not exist before.

CobaGPT brings large language models directly into Symphony. Users can chat with an LLM without leaving the platform. CobaGPT also ships with pre-built capabilities. For example, it can summarise conversations, translate text, and draft emails in various tones.

The Webhooks Bot lets existing systems push notifications into Symphony. Alerts about problems can now reach the rooms where people actually work. Confirmations that a build was successful can also reach these rooms.

## The results

The migration delivered what we hoped for. Maintenance time is down, the bots are more reliable, and functions that were previously impractical are now routine. Examples are asynchronous processing, direct messaging, and access to LLMs. It is equally important that we can now get support from Symphony and follow their documentation. This makes everything faster.

The numbers show this clearly. A simple bot without AI now takes approximately two weeks to build. Before, it took a few months.

The Translate Bot proved the approach, and the migrations of the Blog, Poll, and RSS bots extended it. The Data Notification and Rates applications proved that some products should never have been bots. CobaGPT and the Webhooks Bot show what is possible when the legacy code is removed. We are not finished, but the direction is clear.
