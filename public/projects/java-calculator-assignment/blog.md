# Calculator Project Report

## Introduction

The calculator project was our second-year Java assignment. The project was about more than the calculator application itself. It taught us version control, test-driven development, documentation, and code quality through linting and styling rules. The assignment showed us that software development is more than writing code that works. Good software must also be maintainable, readable, and scalable.

## Version Control

Version control systems (VCS) are a core part of software engineering. In this assignment we used SVN. SVN is a distributed VCS. It lets teams work on the same codebase at the same time, merge changes, and go back to earlier versions. We learned about branching, tags, releases, code history, and deltas.

**Branching.** A branch is a separate copy of the codebase. A developer can add a feature, fix a bug, or try an idea on a branch without risk to the main code. When the work on the branch is complete, the branch is merged into the main branch. This keeps the workflow clean.

**Tags.** A tag marks a specific version of the code. Tags are used for stable releases and project milestones. A tag works like a bookmark in the code history. You can go back to it to examine or restore that version.

**Releases.** A release is a stable version of the software that is ready to deploy. A release has passed full testing before it goes to the end user. Release management in a VCS makes sure that only tested code reaches the user. This improves quality and reliability.

**Code history.** Code history shows all changes over time. It shows when each change was made. This helps developers find patterns and trends in the codebase.

**Deltas.** A delta shows the difference between two versions of a file. It shows what was added, changed, or deleted. This detail is useful when you review changes or debug a problem.

In the calculator project, SVN gave us three practical benefits:

- Reverting changes. We could return the code to any earlier state. If a new change caused a bug, we removed it quickly. This gave us the freedom to experiment without risk.
- Backup. The code lived on a remote server. If a local machine failed or lost data, we could restore the code from the remote repository.
- Collaboration. Branching let each developer work on a separate feature at the same time. Merging combined our separate work into one result.

In short, a VCS supports versioning, collaboration, and safe experimentation. The calculator project showed us that a VCS is a lifeline during development.

## Unit Testing and Test-Driven Development

This was our first project with unit testing and test-driven development (TDD). We used JUnit. In TDD, you write the test before you write the code. The test defines the expected behaviour. Then you write code that passes the test.

Unit tests also work as documentation. The tests show what the code should do, how the components interact, and what output a given input should produce.

TDD makes the code reliable. When you write tests first, the code becomes testable, modular, and clearly specified. This means fewer bugs. Developers can change code with confidence because the tests will catch any regression.

Unit tests are also necessary for refactoring. Refactoring means restructuring existing code without changing its external behaviour. The goal is to make the code simpler, easier to read, and easier to maintain. But refactoring without tests is risky. It is easy to add bugs by accident.

Unit tests reduce this risk. If you have a test suite that covers most of the code, you can refactor with confidence. The procedure is simple. Make the change. Run the tests. If all tests pass, the change did not break anything. If a test fails, that test shows where the problem is. This fast feedback loop makes refactoring quicker and safer.

A full test suite also encourages frequent refactoring. Frequent refactoring keeps the codebase clean. Clean code is easier to work with, has fewer bugs, and makes new features quicker to add.

In the calculator project, unit tests confirmed that the code worked as expected. They also helped us keep the codebase clean, efficient, and maintainable.

## Documentation

Documentation is a map of the codebase. In the calculator project we wrote JavaDoc for all classes, methods, and parameters. Documentation helps in three ways:

- Understanding the code. It shows what a piece of code does and why it was written that way.
- Onboarding. New team members can read the documentation to get up to speed.
- Maintenance. You can change code with confidence when you understand how it works.

Documentation is not only for other people. It is also for us. After some time, we forget what our own code does.

## Code Quality

Code quality means more than a program that runs. It means code that is readable, maintainable, and consistent. Code quality matters for the long-term success of a project. It affects how easy the system is to read, update, and debug. In the calculator project we focused on design patterns, linting, and styling.

**Design patterns.** A design pattern is a reusable solution to a common design problem. Design patterns make code more efficient, scalable, and maintainable. We learned about four common patterns:

- Singleton pattern. This pattern makes sure a class has only one instance, with a global access point. It is useful for a shared resource such as a configuration object.
- Observer pattern. One object, the subject, publishes changes to its state. Other objects, the observers, react to these changes. This pattern is common in event handling.
- Factory pattern. This pattern provides an interface for creating objects without specifying their exact class. Subclasses decide which object type to create.
- Strategy pattern. This pattern defines a family of algorithms, packages each one separately, and makes them interchangeable. The algorithm can change independently of the code that uses it.

These patterns helped us write more organised and maintainable code. They also made the code easier for other developers to understand, change, and extend.

**Linting and styling.** We used Checkstyle to check our Java code against a set of rules. A consistent style makes the codebase uniform. Uniform code is easier to read and easier for any developer to work on.

Linting improves readability. It also finds problems such as unused variables, undeclared variables, and mismatched types. Finding these problems early reduced the number of bugs and improved the quality of our code.

In the calculator project, design patterns, linting, and a consistent style made our code functional, robust, and easy to read.

## Conclusion

The calculator project was more than a Java assignment. It was a lesson in software engineering methods. It showed us that successful software depends on version control, test-driven development, documentation, and high-quality code. The process matters as much as the result. These lessons will guide our future work in software development.

## Technologies
