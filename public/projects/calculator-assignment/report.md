---
title: "Embracing Software Engineering Methodologies: Lessons from a Calculator Project"
subtitle: "Exploring the holistic approach to software development"
display: "false"
---

- [**Introduction**](#introduction)
- [**Version Control Systems: A Lifeline of Software Engineering**](#version-control-systems-a-lifeline-of-software-engineering)
- [**Unit Testing and Test-Driven Development**](#unit-testing-and-test-driven-development)
- [**Documentation: Navigating the Codebase**](#documentation-navigating-the-codebase)
- [**Code Quality: More than Just Functionality**](#code-quality-more-than-just-functionality)
- [**Conclusion**](#conclusion)


# **Introduction**
The calculator project in our second-year Java assignment wasn't just about creating a functional application; it was a lesson in software engineering methodologies, emphasizing the importance of proper version control procedures, test-driven development, documentation, and code quality assurance through linting and styling. This holistic approach allowed us to understand that software development is more than just writing code that works—it's about creating maintainable, understandable, and scalable software.

# **Version Control Systems: A Lifeline of Software Engineering**
Version control systems (VCS) are the unsung heroes of software engineering. In our assignment, we learned about SVN—a distributed VCS that allows teams to work concurrently on a codebase, merge changes, and even revert to previous states. Through SVN, we were introduced to essential concepts like branching, tags, releases, code history, and deltas.

- **Branching** lets developers work on separate copies of the codebase concurrently. This separation is vital for implementing features, fixing bugs, or even experimenting without affecting the main codebase. Branching enables simultaneous development of independent features. Once a feature is complete, it can be merged back into the main branch, ensuring a smoother and more organized workflow.

- **Tags** help in marking specific versions of the code, typically used for stable releases or milestones. Tags serve as bookmarks, allowing developers to quickly navigate to critical points in the project's history. This feature is invaluable when you need to review or revert to a version associated with a particular milestone or release.

- **Releases** are stable versions of the software that are ready for deployment. These versions have undergone rigorous testing and are deemed ready for use by end users. Managing releases through VCS ensures that only thoroughly vetted code reaches the end user, enhancing the quality and reliability of the software.

- **Code history** allows developers to track changes made over time, making it easier to understand the evolution of the codebase and pinpoint when a specific change was introduced. Code history provides valuable insights into the development process and helps developers identify and analyze patterns or trends in the codebase.

- **Deltas** represent the differences between two versions of a file, showing what was added, modified, or removed. Deltas provide a granular view of changes, making it easier for developers to review and understand the impact of modifications. This insight is especially valuable when troubleshooting issues or assessing the consequences of a change.

Our experience with SVN in the calculator project revealed the practical advantages of using a VCS:

- **Reverting Changes**: VCS allowed us to revert to a previous version of the code when needed. If a recent change introduced a bug or if we wanted to revisit an earlier state of the project, we could easily do so. This capability served as a safety net, enabling us to explore and experiment without fear of irreversible consequences.

- **Backup and Redundancy**: With the code stored on a remote server, VCS also served as a backup. In the event of hardware failure or data loss on a local machine, the codebase could be quickly restored from the remote repository, minimizing disruption and data loss.

- **Collaboration**: VCS facilitated collaboration among team members. With branching, multiple developers could work on independent features simultaneously without interfering with each other's progress. The ability to merge branches allowed us to efficiently combine our individual efforts into a cohesive whole.

In conclusion, a VCS is not just a tool for managing code versions. It's a comprehensive system that supports collaboration, fosters experimentation, and ensures robust and reliable software development. Our calculator project underscored the importance of VCS in the software engineering process, demonstrating that it is indeed a lifeline for developers.

# **Unit Testing and Test-Driven Development**
The calculator project was our first foray into unit testing and test-driven development (TDD). We used JUnit for our tests, writing them before the actual implementation. The idea was simple: define the expected behavior through tests and then write code to fulfill those tests.

Unit tests serve as an alternative form of documentation. By looking at the tests, one can understand the expected behavior of the codebase, how different components interact, and what the output should be for various inputs.

TDD fosters a robust and reliable codebase. By writing tests first, we ensure that the code is testable, modular, and has clear specifications. It leads to fewer bugs and allows developers to make changes with confidence, knowing that any regression will be caught by the tests.

Moreover, unit testing is a powerful ally when it comes to refactoring. Refactoring is the process of restructuring existing code without changing its external behavior. Its primary purpose is improving the nonfunctional attributes of the software, making it easier to comprehend, reducing its complexity, and increasing its maintainability. However, refactoring without a good set of tests can be risky because it's easy to introduce bugs.

Unit tests mitigate this risk. When you have a suite of unit tests that covers most of the code, you can refactor with confidence. After making changes, run the tests. If they all pass, you can be relatively sure that your changes didn't break anything. If a test fails, it gives an immediate indication of where the problem might be. This tight feedback loop makes the process of refactoring quicker and safer.

Furthermore, having a comprehensive suite of unit tests can encourage developers to refactor more often, leading to a cleaner, more understandable codebase. In the long run, this makes the code easier to work with, reduces the likelihood of bugs, and can even make adding new features quicker.

In our calculator project, the use of unit testing allowed us not only to validate that our code worked as expected but also facilitated the refactoring process, ensuring that our codebase remained clean, efficient, and maintainable. The flexibility that unit testing provided proved invaluable in creating a robust and functional calculator application.

# **Documentation: Navigating the Codebase**
Proper documentation is akin to a map for a codebase. We used JavaDoc for our calculator project, writing comments for classes, methods, and their parameters. Documentation helps in several ways:

- **Understanding the code**: It provides insights into what a particular piece of code does and why it was implemented in a certain way.
- **Onboarding new developers**: New team members can quickly get up to speed by reading the documentation.
- **Maintaining the code**: Developers can make changes more confidently if they understand the codebase.

Documentation is essential not just for others but also for our future selves, who might forget the intricacies of the code.

# **Code Quality: More than Just Functionality**
Code quality is about more than just getting a program to run successfully; it's about writing code that's readable, maintainable, and consistent. Code quality is crucial for long-term project success, as it directly impacts the ease with which the code can be understood, updated, and debugged. In our calculator project, we focused on several aspects of code quality, including design patterns, linting, and code styling.

**Design Patterns** are well-established solutions to common software design problems. They are templates that can be adapted to fit specific needs. Utilizing design patterns can result in more efficient, scalable, and maintainable code. Some of the common design patterns include:

1. **Singleton Pattern**: Ensures that a class has only one instance and provides a global point to access it. This is useful in cases where a single shared resource, like a configuration object, is needed across the application.

2. **Observer Pattern**: Allows an object (the "subject") to publish changes to its state so that other objects (the "observers") can react accordingly. This pattern is often used in event-driven systems.

3. **Factory Pattern**: Provides an interface for creating objects, but allows subclasses to alter the types of objects that will be created. This pattern is useful for creating objects without specifying the exact class of object that will be created.

4. **Strategy Pattern**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. This pattern allows the algorithm to vary independently of the clients that use it.

By using these and other design patterns in our calculator project, we were able to write more organized and maintainable code, making it easier for us and other developers to understand and extend the codebase in the future.

**Code Linting and Styling** play a crucial role in maintaining code quality. In our project, we used Checkstyle, a tool that checks Java code against a specified set of rules. Checkstyle helped us ensure that our code followed a particular style guide, which brought uniformity to our codebase. By following a consistent style, our code became more readable and understandable, making it easier for us and other developers to work on the project.

Linting not only improves code readability but also helps identify potential issues, such as unused variables, undeclared variables, or mismatched types. By catching these issues early, we were able to reduce the number of bugs in our code and improve its overall quality.

In conclusion, code quality is a multi-faceted concept that goes beyond mere functionality. It encompasses readability, maintainability, and consistency. By following design patterns, using linting tools, and adhering to a consistent code style, we can write code that is not only functional but also robust, scalable, and easy to understand. In our calculator project, we saw firsthand how these practices contributed to a more successful and sustainable software development process.

# **Conclusion**
The calculator project was more than just a Java assignment; it was an invaluable lesson in software engineering methodologies. It taught us that successful software development is a result of proper version control, test-driven development, comprehensive documentation, and high code quality. It emphasized that while the final implementation is important, the journey of creating maintainable, understandable, and scalable software is equally vital. As we move forward in our careers, these lessons will serve as guiding principles in our approach to software development.