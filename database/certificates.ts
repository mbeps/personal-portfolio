import CertificateInterface from "@/interfaces/material/CertificateInterface";
import {
  algorithms,
  androidDevelopment,
  apis,
  artificialIntelligence,
  automation,
  boosting,
  containerization,
  continuousDelivery,
  continuousDeployment,
  continuousIntegration,
  dataScience,
  dataStructures,
  dataVisualisation,
  databaseManagementSystems,
  databases,
  deepLearning,
  designPatterns,
  devOps,
  hyperparameters,
  indexing,
  infrastructureAsCode,
  linting,
  linuxDevelopment,
  machineLearning,
  mathematics,
  neuralNetworks,
  noSql,
  oop,
  sql,
  testing,
  webDevelopment,
} from "./skills/generalSkills";
import {
  groovy,
  java,
  javascript,
  python,
  rLanguage,
  shellScript,
  typescript,
} from "./skills/languages";

import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import {
  adaptability,
  communication,
  costManagement,
  creativity,
  criticalThinking,
  humanResourceManagement,
  integrationManagement,
  problemSolving,
  procurementManagement,
  projectManagement,
  qualityManagement,
  riskManagement,
  scopeManagement,
  stakeholderManagement,
  timeManagement,
} from "./skills/softSkills";
import {
  apollo,
  graphQL,
  rest,
} from "./skills/technicalHardSkills/technicalHardSkillsAPIs";
import {
  django,
  firebase,
  flask,
  gunicorn,
  jinja,
  jwt,
  spring,
  springBoot,
} from "./skills/technicalHardSkills/technicalHardSkillsBackendWebDev";
import {
  aws,
  awsCloudFormation,
  awsCloudFront,
  awsEC2,
  awsK3s,
  awsLambda,
  awsS3,
  awsVPC,
  azure,
  azureAppService,
  azureBlobStorage,
  azureContainerRegistry,
  azureContainers,
  azureDurableFunctions,
  azureFunctions,
  azureMonitor,
  azureResourceManager,
  gcp,
  gcpAppEngine,
  gcpCloudLogging,
  gcpCloudSQL,
  gcpCloudScheduler,
  gcpCloudStorage,
  gcpCloudTasks,
} from "./skills/technicalHardSkills/technicalHardSkillsCloudComputing";
import { black } from "./skills/technicalHardSkills/technicalHardSkillsCodeQuality";
import {
  mongoDB,
  normalisation,
  redis,
} from "./skills/technicalHardSkills/technicalHardSkillsDatabases";
import {
  ansible,
  docker,
  gitHubActions,
  gitlabCI,
  jenkins,
  kubernetes,
  travisCI,
} from "./skills/technicalHardSkills/technicalHardSkillsDevOps";
import {
  bootstrap,
  css,
  html,
  react,
} from "./skills/technicalHardSkills/technicalHardSkillsFrontendWebDev";
import { nextjs } from "./skills/technicalHardSkills/technicalHardSkillsFullStackWebDev";
import {
  keras,
  scikitLearn,
} from "./skills/technicalHardSkills/technicalHardSkillsMLDS";
import {
  algebra,
  calculus,
  discrete,
  geometry,
  linearAlgebra,
  logics,
  mechanics,
  probability,
  statistics,
  trigonometry,
  vectors,
} from "./skills/technicalHardSkills/technicalHardSkillsMaths";
import { symphony } from "./skills/technicalHardSkills/technicalHardSkillsOthers";
import {
  gradle,
  maven,
  poetry,
  tox,
} from "./skills/technicalHardSkills/technicalHardSkillsProjectManagers";
import {
  junit,
  pytest,
} from "./skills/technicalHardSkills/technicalHardSkillsTesting";
import {
  git,
  gitHub,
  gitLab,
} from "./skills/technicalHardSkills/technicalHardSkillsVCS";

const programmingLanguagesCertificates: CertificateInterface[] = [
  {
    name: "Python Programming Masterclass",
    slug: "UC-a3c47af2-7eb8-4f5b-8309-08559c519d5a",
    category: "Programming Languages",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-a3c47af2-7eb8-4f5b-8309-08559c519d5a/",
    skills: [
      python,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description: `
      The Python Programming Masterclass on is an all-encompassing course designed to impart a deep understanding of Python, one of the most sought-after programming languages in the tech industry. 
      This course is tailored for both beginners and existing programmers, focusing on core Python concepts, Object-Oriented Programming, algorithms, and data structures. It uniquely combines theoretical knowledge with practical coding exercises, preparing students for advanced areas like machine learning and data science. By the end of the course, learners will have mastered both Python 2 and 3, equipped with the skills to develop robust Python applications and the confidence to tackle real-world programming challenges.`,
    learningOutcomes: [
      "Understand Python syntax, keywords, and basic structures",
      "Implement Object-Oriented Programming in Python",
      "Write and understand complex Python algorithms",
      "Utilize various data structures in Python",
      "Develop functional Python applications",
      "Distinguish between Python 2 and Python 3",
      "Complete practical coding exercises for skill enhancement",
      "Build foundational skills for advanced Python fields like machine learning and data science",
    ],
  },
  {
    name: "Advanced Python",
    slug: "c235083fcf3a5aadda62a3aac5f1846098135e9058d9c5c72073ef88891b0395",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/c235083fcf3a5aadda62a3aac5f1846098135e9058d9c5c72073ef88891b0395",
    skills: [
      python,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course offers an in-depth exploration of advanced Python features, focusing on enhancing code efficiency and readability. It covers a range of topics including object-oriented programming, logging for performance tracking, porting code from Python 2 to 3, and data manipulation. The course is designed to help you master Python's powerful features and flexibility, enabling you to build sophisticated applications.
    `,
    learningOutcomes: [
      "Learning about truth value testing in Python is a key aspect of this course.",
      "Understanding how to use template strings for simpler string formatting is a necessary skill in Python.",
      "The concept of iterators in Python will be explored.",
      "Covering Python's built-in functions for transforming data.",
      "A deep dive into Python functions and their advanced features will be a key learning outcome.",
      "Learning about Python's collections module and its powerful features is a part of this course.",
      "Understanding object-oriented programming in Python with a focus on advanced concepts will be covered.",
      "Delving into how to use Python's logging module to log errors and track code execution.",
      "Learning about list, dictionary, and set comprehensions in Python is a key aspect of this course.",
    ],
    archived: true,
  },
  {
    name: "Python Object-Oriented Programming",
    slug: "3df6c589b5151377ce45f231cfacf8ca04a02875fa88996a8831c1c9b70c527a",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/3df6c589b5151377ce45f231cfacf8ca04a02875fa88996a8831c1c9b70c527a",
    skills: [
      python,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course delves into the application of Python's object-oriented programming features to build complex, modular programs. It covers core OOP principles and Python-specific features, aiming to enhance the integration of your classes with the Python language and reduce boilerplate code. The course is designed to equip you with the skills to create extensible and efficient programs using Python's OOP features.`,
    learningOutcomes: [
      "Learning how to define classes in Python is a key aspect of this course.",
      "Understanding how to check the type of an instance is a necessary skill in Python OOP.",
      "The concept of multiple inheritance in Python will be explored.",
      "Covering how to create objects using the concept of composition in Python.",
      "Leveraging magic methods in Python will be a key learning outcome.",
      "Understanding how and why to call objects like functions in Python is a part of this course.",
      "Defining data classes in Python will be covered.",
      "Delving into the concept of immutability and how to create immutable data classes in Python.",
    ],
    archived: true,
  },
  {
    name: "Learning Python",
    slug: "71bbbecbbc9b1489e357c3a2091860ae5b02b3ff0e415ce5748b8746d990b8dd",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/71bbbecbbc9b1489e357c3a2091860ae5b02b3ff0e415ce5748b8746d990b8dd",
    skills: [
      python,
      oop,
      algorithms,
      dataStructures,
      html,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course provides a comprehensive introduction to Python, a powerful and easy-to-learn object-oriented language. It covers the basics of Python syntax, working with dates and times, file handling, and web data retrieval in various formats. The course also includes interactive coding exercises for real-time feedback and hands-on practice, making it suitable for both new programmers and experienced developers looking to learn Python.`,
    learningOutcomes: [
      "Learning the basics of Python syntax and constructing and running a simple Python program is a key aspect of this course.",
      "Understanding how to work with dates and times, and using the date, time, and datetime classes is a necessary Python skill.",
      "Exploring how to read and write files, and using the OS path utilities and filesystem shell methods is part of this course.",
      "Fetching, parsing, and processing data from the web in JSON, HTML, and XML formats is included in this course.",
      "Practicing and improving programming skills with interactive code challenges and quizzes is a part of the curriculum.",
    ],
    archived: true,
  },

  {
    name: "Java Programming Masterclass",
    slug: "UC-a14123c1-1def-4710-8836-7c05bfaa2fc7",
    category: "Programming Languages",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-a14123c1-1def-4710-8836-7c05bfaa2fc7/",
    skills: [
      java,
      oop,
      algorithms,
      dataStructures,
      spring,
      androidDevelopment,
      problemSolving,
      criticalThinking,
    ],

    description: `This course offers a comprehensive and continuously updated curriculum on Java programming, suitable for all levels of expertise. With a focus on core Java skills, industry best practices, and proficiency in various Java versions, it aims to prepare students for Java developer positions and Oracle Java Certificate exams. The course also provides a strong foundation for transitioning to other areas like the Spring Framework and Android development.`,
    learningOutcomes: [
      "Learning the core Java skills needed to apply for Java developer positions is a key aspect of this course.",
      "Preparing to sit for and pass the Oracle Java Certificate exam is a part of this course.",
      "Demonstrating your understanding of Java to future employers is a goal of this course.",
      "Learning industry 'best practices' in Java software development from a professional Java developer is included in this course.",
      "Acquiring essential Java basics for transitioning to the Spring Framework, Java EE, Android development and more is a part of the curriculum.",
      "Obtaining proficiency in Java 17, as well as older versions including Java 11 and Java 8, is a key learning outcome.",
    ],
  },
  {
    name: "Java Object-Oriented Programming",
    slug: "77ad2602bbb22e29478a06792cd4bd0a91dda794cca7b2bbe4e333c193770a22",
    category: "Programming Languages",
    issuer: "LinkedIn",
    description: `This course focuses on enhancing your Java programming skills by teaching the basics of object-oriented programming. It aims to help you write secure, scalable, and easily debuggable code. The course emphasizes practical examples over abstract concepts, with a deep dive into the source code and several challenges to apply what you've learned. It not only guides you on how to apply object-oriented principles in your programs but also explains how Java leverages these principles internally.`,
    certificateURL:
      "https://www.linkedin.com/learning/certificates/77ad2602bbb22e29478a06792cd4bd0a91dda794cca7b2bbe4e333c193770a22",
    skills: [
      java,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    learningOutcomes: [
      "Understanding the basics of object-oriented programming in Java",
      "Writing secure, scalable, and easily debuggable code",
      "Applying practical examples to reinforce abstract concepts",
      "Diving deep into the source code to understand its structure",
      "Implementing object-oriented principles in your programs",
      "Learning how Java leverages object-oriented principles internally",
    ],
    archived: true,
  },
  {
    name: "Learning TypeScript",
    slug: "b1761a41ef8dd23125db776561db0b90ae53842518d029015374a2daee08e4e3",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/b1761a41ef8dd23125db776561db0b90ae53842518d029015374a2daee08e4e3",
    skills: [
      typescript,
      javascript,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course focuses on enhancing your Java programming skills by teaching the basics of object-oriented programming. It aims to help you write secure, scalable, and easily debuggable code. The course emphasizes practical examples over abstract concepts, with a deep dive into the source code and several challenges to apply what you've learned. It not only guides you on how to apply object-oriented principles in your programs but also explains how Java leverages these principles internally.
    `,
    learningOutcomes: [
      "Analyzing historical events and their societal impact",
      "Demonstrating proficiency in statistical analysis using relevant software tools",
      "Applying ethical principles to real-world scenarios",
      "Constructing persuasive arguments based on evidence",
      "Developing effective communication skills through written reports and presentations",
    ],
  },
  {
    name: "TypeScript: Object-Oriented Programming",
    slug: "ed3c16a977b93d46364c0e03d601701094c7f346f08027e0cd3a1d6d52342425",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/ed3c16a977b93d46364c0e03d601701094c7f346f08027e0cd3a1d6d52342425",
    skills: [
      typescript,
      javascript,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description:
      "This course is designed for JavaScript developers looking to incorporate object-oriented programming principles using TypeScript. It dives into how and why TypeScript uses object-oriented programming models, covering key topics such as inheritance, polymorphism, generics, and encapsulation. The course includes challenges that test your understanding and application of these concepts, providing a hands-on learning experience.",
    learningOutcomes: [
      "Understanding classes vs. objects",
      "Distinguishing prototypes vs. classes",
      "Implementing constructor and class properties",
      "Creating methods with TypeScript",
      "Using Get and Set",
      "Implementing classes",
      "Understanding inheritance in TypeScript",
      "Extending classes in TypeScript",
      "Implementing super() overrides",
      "Understanding polymorphism",
      "Implementing inheritance",
      "Understanding encapsulation",
      "Implementing protected and static properties",
      "Practicing encapsulation",
    ],
    archived: true,
  },
  {
    name: "JavaScript Essential Training",
    slug: "ade3217d7cef3023f22c8ee034eff28705b7dbfd3981d8377c9b5f61ff39ea51",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/ade3217d7cef3023f22c8ee034eff28705b7dbfd3981d8377c9b5f61ff39ea51",
    skills: [
      javascript,
      oop,
      algorithms,
      dataStructures,
      html,
      css,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course provides a comprehensive understanding of JavaScript, a scripting language essential for dynamic web development. It covers core principles to advanced topics, helping you build dynamic interfaces and advanced interactions. The course includes interactive coding exercises for hands-on practice, making it suitable for anyone looking to enhance their JavaScript skills and understanding of web technologies.
    `,
    learningOutcomes: [
      "Understanding the characteristics of engineering and the role of engineers",
      "Applying principles in science, mathematics, and engineering in a design process",
      "Appreciating the design decision-making process and its application in developing new products",
      "Recognizing the effects of engineering issues on the conduct of engineering, including ethical, legal, and social aspects",
    ],
    archived: true,
  },
  {
    name: "JavaScript Practice: Object-Oriented Programming",
    slug: "6f9d825cfa8c3256611a521ec35fe62abd9b7f75636536b59656dcfd57708cf6",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/6f9d825cfa8c3256611a521ec35fe62abd9b7f75636536b59656dcfd57708cf6",
    skills: [
      javascript,
      oop,
      algorithms,
      dataStructures,
      problemSolving,
      criticalThinking,
    ],

    description:
      "This interactive course enhances your JavaScript skills by focusing on object-oriented programming tasks. It provides a hands-on approach to functional and object-oriented programming, with less rigid syntax and greater extensibility. The course includes interactive coding exercises with real-time feedback, offering practical coding practice to advance your skills. It covers creating a course roster with functions, a book function with Object.create(), a country with classes, a food ordering class with getters and setters, and a user/admin class with private properties.",
    learningOutcomes: [
      "Creating a roster with functions",
      "Building a function with Object.create()",
      "Designing a country with classes",
      "Developing a class with get and set",
      "Implementing a User/admin class with private properties",
    ],
    archived: true,
  },
  {
    name: "The Complete JavaScript Course 2023: From Zero to Expert!",
    slug: "UC-cf6c70b6-c34c-4400-b8f8-b9a7abc9f18a",
    category: "Programming Languages",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-cf6c70b6-c34c-4400-b8f8-b9a7abc9f18a/",
    skills: [
      javascript,
      oop,
      algorithms,
      dataStructures,
      webDevelopment,
      problemSolving,
      criticalThinking,
    ],

    description: `This comprehensive and in-depth course covers JavaScript from fundamentals to advanced applications, making it suitable for learners at all levels. It offers a blend of practical code examples, important theory, and complete projects, preparing you for advanced front-end frameworks and real-world skills needed in a developer job. The course is designed in a modular way, allowing you to learn at your own pace, and by the end, you will have the knowledge and confidence to ace job interviews and become a professional developer.`,
    learningOutcomes: [
      "Becoming an advanced JavaScript developer.",
      "Understanding JavaScript's workings.",
      "Learning developer problem-solving.",
      "Understanding JavaScript fundamentals.",
      "Learning modern ES6+.",
      "Understanding modern OOP concepts.",
      "Grasping complex JavaScript concepts.",
      "Learning asynchronous JavaScript.",
      "Architecting code using flowcharts and patterns.",
      "Using modern tools for 2022 and beyond.",
      "Practicing skills with 50+ challenges and assignments.",
      "Designing a unique learning path.",
    ],
  },
  {
    name: "Learning Linux Shell Scripting",
    slug: "67ef8710bfc2f51163f78c9373df3d7b4674e44b3d2e936318399c6a7fe5bda0",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/67ef8710bfc2f51163f78c9373df3d7b4674e44b3d2e936318399c6a7fe5bda0",
    skills: [shellScript, linuxDevelopment, problemSolving, criticalThinking],

    learningOutcomes: [
      "Printing to the console",
      "Commenting out scripts",
      "Defining variables and parameters",
      "Creating your first simple script",
      "Branching and loops",
      "Reading environment variables",
      "Reading and writing files",
      "Watching a process",
      "Getting input from users",
      "Handling bad data",
      "Understanding Shell Scripting Basics",
      "Implementing Branching and Loops",
      "Working with Environment Variables",
      "Defining Functions",
      "Performing File Operations",
      "Managing Sleep and Process",
      "Creating Interactive Scripts",
    ],
    description:
      "This course provides a comprehensive introduction to Linux shell scripting, a powerful tool for automating tasks in Linux. You will learn how to create scripts that can automate many kinds of tasks, from defining variables and parameters to managing system processes. The course also covers how to handle bad input data and create interactive scripts, making your Linux tasks easier, more predictable, and more fun.",
    archived: true,
  },
  {
    name: "Learning Groovy",
    slug: "7c14e4c16f72a10046c3d66838e5dd3589fa40ac6cbf6509b235ea6452f430c8",
    category: "Programming Languages",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/7c14e4c16f72a10046c3d66838e5dd3589fa40ac6cbf6509b235ea6452f430c8",
    skills: [groovy, oop, dataStructures, problemSolving, criticalThinking],

    learningOutcomes: [
      "Understanding Groovy and Java",
      "Defining Variables and data types",
      "Creating Classes and methods",
      "Implementing Conditional structures and loops",
      "Handling Exceptions",
      "Using the GDK documentation",
      "Creating and using a class",
      "Using convenience annotations",
      "Understanding Closures",
      "Working with Collections",
      "Reading files",
      "Writing files",
      "Processing file contents",
    ],
    description:
      "This course provides a comprehensive introduction to Groovy, a powerful and easy-to-use language on the JVM platform. You will learn the basics of working with Groovy, from variables and data types to classes and exception handling. The course also covers more advanced concepts, such as using closures, working with collections, and reading and writing files. After completing this course, you will have the knowledge you need to use Groovy in a variety of contexts, from scripting to full-fledged programming.",
    archived: true,
  },
];

const algorithmsAndDataStructuresCertificates: CertificateInterface[] = [
  {
    name: "The Complete Data Structures and Algorithms Course in Python",
    slug: "UC-74fdc19f-c016-43c5-8b2a-3cb30941205d",
    category: "Algorithms & Data Structures",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-74fdc19f-c016-43c5-8b2a-3cb30941205d/",
    skills: [
      algorithms,
      dataStructures,
      python,
      oop,
      mathematics,
      problemSolving,
      criticalThinking,
    ],

    learningOutcomes: [
      "Understanding the role and purpose of data structures",
      "Grasping the fundamentals of recursion",
      "Solving common recursive problems",
      "Mastering recursion through intensive exercises",
      "Interpreting Big O notation for algorithm efficiency",
      "Preparing for complex Big O notation questions",
      "Understanding array structures and types",
      "Exploring list creation and manipulation in Python",
      "Tackling challenging array and list-based questions",
      "Enhancing skills with advanced array and list exercises",
      "Understanding dictionaries and their application",
      "Grasping the basics and utilities of tuples",
      "Differentiating types of linked lists",
      "Understanding and implementing circular singly linked lists",
      "Exploring the creation and manipulation of doubly linked lists",
      "Mastering circular doubly linked list operations",
      "Solving complex linked list problems in interviews",
      "Understanding stack data structure and its applications",
      "Grasping the fundamental concepts of queues",
      "Addressing common interview questions on stacks and queues",
      "Understanding tree structures and binary trees",
      "Exploring the creation and manipulation of binary search trees",
      "Understanding AVL trees and balancing factors",
      "Grasping the concept of binary heaps",
      "Understanding the structure and purpose of tries",
      "Exploring hashing concepts and hash functions",
      "Understanding various sorting techniques",
      "Grasping the fundamentals of search algorithms",
      "Understanding the concepts and types of graphs",
      "Comprehending the strategy behind greedy algorithms",
      "Understanding the divide and conquer paradigm",
      "Grasping the concept of dynamic programming",
      "Tackling intensive dynamic programming challenges",
    ],
    description: `
    This comprehensive Python Bootcamp offers a deep dive into Data Structures and Algorithms, covering essential topics and interview preparation for top tech companies. 
    The course progresses from basic to advanced concepts, equipping learners with the skills to excel in professional programming and technical interviews. 
    Tailored for a diverse audience, from self-taught programmers to seasoned developers, it provides lifetime access to extensive learning materials and a supportive community, all designed to boost career prospects in the tech industry.`,
  },
  {
    name: "Programming Foundations: Algorithms",
    slug: "e31b0a7d9243f44e8a528fc2d184cd4a3bfbdc789c899c3a9ee47ee511e51fd7",
    category: "Algorithms & Data Structures",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/e31b0a7d9243f44e8a528fc2d184cd4a3bfbdc789c899c3a9ee47ee511e51fd7",
    skills: [algorithms, dataStructures, problemSolving, criticalThinking],

    learningOutcomes: [
      "Understanding data structures",
      "Working with arrays and linked lists",
      "Implementing stacks and queues",
      "Understanding and applying hash tables",
      "Grasping the concept of recursion",
      "Sorting data using bubble, merge, and quicksort",
      "Searching data in unordered and ordered lists",
      "Filtering and counting values with hash tables",
      "Finding maximum value recursively",
      "Measuring algorithm performance",
    ],
    description:
      "This course delves into the universal building blocks of programming - algorithms. It covers popular and useful algorithms for searching and sorting information, recursion techniques, and understanding common data structures. The course also explores the performance implications of different algorithms and how to evaluate their performance. Practical examples are demonstrated in Python, but the lessons are applicable to any programming language.",
    archived: true,
  },
  {
    name: "Programming Foundations: Data Structures",
    slug: "c5c41ea1aa52982d08705831612aba2e93e69a64e35dd2cce11c28fad12b59f7",
    category: "Algorithms & Data Structures",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/c5c41ea1aa52982d08705831612aba2e93e69a64e35dd2cce11c28fad12b59f7",
    skills: [dataStructures, algorithms, problemSolving, criticalThinking],

    description: `
      This course provides an in-depth overview of the most essential data structures for modern programming. 
      It starts with simple ways of grouping data, like arrays and structs, and gradually introduces more complex data structures, such as linked lists, stacks and queues, hash tables, and trees and graphs. 
      Each lesson is accompanied by a real-world, practical example that shows the data structures in action. 
      By the end of the course, you'll have a clear understanding of data structures and understand how to use them in any programming language.
    `,
    learningOutcomes: [
      "Understanding data types: Booleans, numbers, strings, and more",
      "Working with multidimensional arrays",
      "Manipulating jagged arrays",
      "Searching and sorting arrays",
      "Implementing linked lists",
      "Utilizing stacks and queues",
      "Applying hash functions and hash tables",
      "Building trees and graphs",
    ],
    archived: true,
  },
];

const machineLearningCertificates: CertificateInterface[] = [
  {
    name: "Applied Machine Learning: Algorithms",
    slug: "964c3b1a049a60afa6bcbb55179e326c7e5cea11db0db7b8d3390be8fc5925e1",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/964c3b1a049a60afa6bcbb55179e326c7e5cea11db0db7b8d3390be8fc5925e1",
    skills: [
      machineLearning,
      algorithms,
      hyperparameters,
      boosting,
      problemSolving,
      criticalThinking,
    ],

    description: `This course is the second installment in the Applied Machine Learning series, delving into a variety of algorithms from logistic regression to gradient boosting. It provides a structured approach to choosing the best algorithm for a given problem, considering each algorithm's pros and cons. The course enhances your understanding of what drives each algorithm, their benefits, and drawbacks, equipping you with a significant competitive advantage as a data scientist.`,
    learningOutcomes: [
      "Understanding models vs. algorithms.",
      "Cleaning continuous and categorical variables.",
      "Tuning hyperparameters.",
      "Learning logistic regression basics.",
      "Fitting a support vector machines model.",
      "Understanding when to use a multi-layer perceptron model.",
      "Using the random forest algorithm.",
      "Fitting a basic boosting model.",
    ],
    archived: true,
  },
  {
    name: "Applied Machine Learning: Foundations",
    slug: "50182c40b257c756e5d8aea70a9f69f14566da4d3cae7dab86f236554cc7238e",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/50182c40b257c756e5d8aea70a9f69f14566da4d3cae7dab86f236554cc7238e",
    skills: [
      machineLearning,
      dataScience,
      dataVisualisation,
      hyperparameters,
      problemSolving,
      criticalThinking,
    ],

    description: `This course is the first part of the Applied Machine Learning series, focusing on the foundations of machine learning. It provides a pragmatic approach to solving machine learning problems, from exploratory data analysis to model evaluation. The course does not focus on any specific algorithm but provides the tools to efficiently solve a wide range of machine learning problems, making it a valuable resource for anyone looking to delve into the field of machine learning.`,
    learningOutcomes: [
      "Understanding what is machine learning.",
      "Differentiating Machine Learning, Deep Learning, and Artificial Intelligence.",
      "Handling common challenges in Machine Learning.",
      "Plotting continuous and categorical features.",
      "Cleaning continuous and categorical data.",
      "Measuring success in Machine Learning.",
      "Identifying overfitting and underfitting.",
      "Tuning hyperparameters.",
      "Evaluating a model.",
    ],
    archived: true,
  },
  {
    name: "Artificial Intelligence Foundations: Machine Learning",
    slug: "3610d0d7891a746bbe207505c8ec6cfab58723ca973e3082f139a349059248c9",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/3610d0d7891a746bbe207505c8ec6cfab58723ca973e3082f139a349059248c9",
    skills: [
      machineLearning,
      dataScience,
      dataVisualisation,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a hands-on approach to machine learning, one of the most exciting branches of artificial intelligence. It covers the entire machine learning lifecycle, from data sourcing and preparation to model training and evaluation. The course also includes building a machine learning pipeline to streamline the process. It's a great resource for those looking to understand the steps required to build machine learning systems.`,
    learningOutcomes: [
      "Understanding machine learning.",
      "Implementing a machine learning solution.",
      "Preparing data for machine learning.",
      "Training a machine learning model.",
      "Evaluating model performance.",
      "Operationalizing a machine learning pipeline.",
    ],
    archived: true,
  },
  {
    name: "Artificial Intelligence Foundations: Neural Networks",
    slug: "5dda55caa1ccf02b29f3c0f5d526c8c026f7fc346a6cad6d9c84f98aba3e2514",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/5dda55caa1ccf02b29f3c0f5d526c8c026f7fc346a6cad6d9c84f98aba3e2514",
    skills: [
      machineLearning,
      keras,
      neuralNetworks,
      deepLearning,
      problemSolving,
      criticalThinking,
    ],

    description: `This course offers a comprehensive introduction to the principles and techniques of artificial neural networks, including their components, common models, and applications. It provides hands-on experience in building and training a neural network using the Keras Sequential API. The course is designed to help learners gain a solid understanding of how to build, train, improve, and use neural networks.`,
    learningOutcomes: [
      "Understanding neural networks.",
      "Learning key components in neural network architecture.",
      "Exploring other types of neural networks.",
      "Building a neural network using Keras.",
      "Optimizing a neural network.",
    ],
    archived: true,
  },
  {
    name: "Data Science Foundations: Fundamentals",
    slug: "e9cb305b4da5f38726226d31e5eef5da66504838131739c389a2d056ed31cf3f",
    category: "Machine Learning",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/e9cb305b4da5f38726226d31e5eef5da66504838131739c389a2d056ed31cf3f",
    skills: [
      dataScience,
      machineLearning,
      apis,
      python,
      rLanguage,
      sql,
      databases,
      algebra,
      statistics,
      probability,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides an accessible, non-technical introduction to the field of data science, covering its vocabulary, skills, jobs, tools, and techniques. It offers insights into how data science can help improve decision-making, gain deeper insights, and enhance work efficiency. The course also discusses ethics and accountability in data science, making it a comprehensive resource for anyone interested in this rapidly growing field.`,
    learningOutcomes: [
      "Assessing skills for a data science career.",
      "Evaluating different data sources.",
      "Exploring data through graphs and statistics.",
      "Understanding use of R, Python, and SQL in data science.",
      "Assessing the role of algebra in data science.",
      "Understanding the role of applied statistics in data science.",
      "Understanding the role of machine learning in data science.",
      "Defining components of effective data visualization.",
    ],
  },
  {
    name: "Introduction to Artificial Intelligence",
    slug: "9f61617caf2fc21f029abd857a03a29758d7e822215d3677eb938b4e29e5da78",
    category: "Machine Learning",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/9f61617caf2fc21f029abd857a03a29758d7e822215d3677eb938b4e29e5da78",
    skills: [
      machineLearning,
      artificialIntelligence,
      deepLearning,
      dataVisualisation,
      problemSolving,
      criticalThinking,
    ],

    description: `This course offers a high-level overview of artificial intelligence, making it accessible to non-technical professionals like project managers, product managers, directors, and executives. It simplifies complex concepts in machine learning, artificial neural networks, and deep learning, helping learners understand how AI can enhance their products, life, and career. The course also provides insights into the top tools in the field, making it a valuable resource for anyone interested in AI.`,
    learningOutcomes: [
      "Distinguishing between symbolic systems and machine learning.",
      "Identifying challenges in natural language processing.",
      "Defining types of machine learning.",
      "Understanding the role of algorithms in machine learning.",
      "Determining when to use artificial intelligence.",
      "Reviewing AI and ML differences impacting business decisions.",
      "Understanding data and big data phenomena.",
      "Learning about web technologies, cloud computing, and databases.",
      "Gaining insights into the data science process.",
      "Familiarizing with data science tools.",
      "Learning data cleaning and publishing techniques.",
      "Practicing data wrangling.",
      "Understanding data visualization principles.",
      "Exploring relational data visualization techniques.",
      "Using data visualization tools.",
      "Evaluating understanding of course material.",
    ],
  },
  {
    name: "Machine Learning Foundations: Calculus",
    slug: "94c788dba6f1c97ceee751315c30b6dc6f4267025733c3de55a315d83a36386d",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/94c788dba6f1c97ceee751315c30b6dc6f4267025733c3de55a315d83a36386d",
    skills: [
      calculus,
      algebra,
      dataVisualisation,
      python,
      rLanguage,
      sql,
      databases,
      problemSolving,
      criticalThinking,
    ],

    description: `
    In this course, I delve into the foundational aspects of calculus that are crucial for understanding and implementing machine learning algorithms. I guide you through the exploration of functions, derivatives, integrals, and the basics of multivariate calculus. The course is designed to equip you with the necessary skills in Machine Learning, Calculus, and Mathematics. It covers a wide range of learning outcomes, including the evaluation of data sources, data visualization, and the ethical considerations in data science.
    `,
    learningOutcomes: [
      "Assessing skills for a data science career.",
      "Evaluating different data sources.",
      "Exploring data through graphs and statistics.",
      "Understanding use of R, Python, and SQL in data science.",
      "Assessing the role of algebra in data science.",
      "Understanding the role of machine learning in data science.",
      "Defining components of effective data visualization.",
      "Assessing the role of ethics and agency in data science.",
    ],
    archived: true,
  },
  {
    name: "Machine Learning Foundations: Linear Algebra",
    slug: "ec6ac0178fb92ba75dd38a95ae48316efb6f4e0e9abcb6bf5431b48021ff8441",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/ec6ac0178fb92ba75dd38a95ae48316efb6f4e0e9abcb6bf5431b48021ff8441",
    skills: [
      linearAlgebra,
      algorithms,
      sql,
      databases,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides an in-depth exploration of linear algebra, a key foundation for machine learning algorithms. It covers essential topics such as vector arithmetic, matrix properties, advanced operations, and matrix transformation, along with important algorithms. By the end of the course, you'll be ready to apply the principles of linear algebra to your machine learning projects, enhancing your understanding and implementation of these algorithms.`,
    learningOutcomes: [
      "Understanding data and big data phenomena.",
      "Learning about web technologies, cloud computing, and databases.",
      "Gaining insights into the data science process.",
      "Familiarizing with data science tools.",
      "Learning data cleaning and publishing techniques.",
      "Practicing data wrangling.",
      "Understanding data visualization principles.",
      "Exploring relational data visualization techniques.",
      "Using data visualization tools.",
      "Evaluating understanding of course material.",
    ],
    archived: true,
  },
  {
    name: "Machine Learning Foundations: Probability",
    slug: "b7334fe5b4d04bef6dab5d2ed69080e9ffc590475eba2057046b6ca4a6cf2fba",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/b7334fe5b4d04bef6dab5d2ed69080e9ffc590475eba2057046b6ca4a6cf2fba",
    skills: [probability, algorithms, problemSolving, criticalThinking],

    description: `
    This course offers an in-depth exploration of probability and its application in the design and implementation of reliable machine learning algorithms. It covers the core concepts and functionalities of probability, including the rules of probability, joint and marginal probability, discrete and continuous probability distributions, and Bayes' theorem. By the end of the course, you'll have the essential tools and techniques for successful probabilistic modeling in machine learning.`,
    learningOutcomes: [
      "Learning basics of probability theory in machine learning.",
      "Understanding sum rule, product rule, and conditional probability.",
      "Calculating joint and marginal probability.",
      "Exploring common discrete probability distributions.",
      "Learning about continuous probability distribution.",
      "Discovering Bayes' theorem and its applications.",
    ],
    archived: true,
  },
  {
    name: "Machine Learning with Scikit-Learn",
    slug: "3c31f8f11d8ecbd7156dd75b8ae2d7c7db59a8342e3ae7780496b637ac894bb8",
    category: "Machine Learning",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/3c31f8f11d8ecbd7156dd75b8ae2d7c7db59a8342e3ae7780496b637ac894bb8",
    skills: [scikitLearn, python, problemSolving, criticalThinking],

    description: `This course focuses on the application of scikit-learn, a popular open-source Python library, for both supervised and unsupervised machine learning. It covers practical techniques such as linear and logistic regression, decision trees, random forest models, K-means clustering, and principal component analysis (PCA). Additionally, it teaches how to create scikit-learn pipelines for cleaner, bug-resilient code. By the end of the course, you'll be able to understand the strengths and weaknesses of each scikit-learn algorithm and build more efficient machine learning models.`,
    learningOutcomes: [
      "Understanding the benefits of using scikit-learn.",
      "Distinguishing between supervised and unsupervised learning.",
      "Learning linear and logistic regression techniques.",
      "Understanding decision trees and random forests.",
      "Learning K-means clustering technique.",
      "Understanding principal component analysis (PCA).",
    ],
    archived: true,
  },
];

const devOpsCertificates: CertificateInterface[] = [
  {
    name: "DevOps Foundations",
    slug: "1c6fedf1993d58cfe2f906e4fe4db5b4eddda6ea5fa7f8999436b07682ffe3f7",
    category: "DevOps",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/1c6fedf1993d58cfe2f906e4fe4db5b4eddda6ea5fa7f8999436b07682ffe3f7",
    skills: [devOps, problemSolving, criticalThinking],

    description: `
    This course provides an overview of the DevOps culture, emphasizing the core value of CAMS (culture, automation, measurement, and sharing). It explores various methodologies and tools that an organization can adopt to transition into DevOps, including both agile and lean project management principles and how traditional principles like ITIL, ITSM, and SDLC fit within DevOps. The course concludes with a discussion on the three main tenets of DevOps—infrastructure automation, continuous delivery, and reliability engineering—and a brief look into the future of organizations transitioning from the cloud to serverless architectures.`,
    learningOutcomes: [
      "Distinguishing between DevOps practice levels, values, and principles.",
      "Analyzing where to apply best practices.",
      "Managing cultural issues within a team and organization.",
      "Understanding lean in DevOps building blocks.",
      "Applying approaches for automating infrastructure.",
      "Understanding role of continuous integration and quality assurance.",
      "Explaining components of reliability for engineering's design operations.",
      "Describing resources to learn or apply DevOps.",
    ],
  },
  {
    name: "DevOps Foundations: Continuous Delivery/Continuous Integration",
    slug: "6bf47e122551142911c5a636edfee564ff0d57bd07a52888c6c52246946f7747",
    category: "DevOps",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/6bf47e122551142911c5a636edfee564ff0d57bd07a52888c6c52246946f7747",
    skills: [
      devOps,
      continuousIntegration,
      continuousDeployment,
      problemSolving,
      criticalThinking,
    ],

    description: `This course delves into the concepts of continuous integration and continuous delivery (CI/CD), demonstrating these principles through the construction of a build pipeline. It covers the journey of an app from development to production, discussing version control, building artifacts, unit testing, and deployment. The course also provides practical advice on CI/CD best practices, common pitfalls, and workarounds, equipping you with the knowledge to navigate your journey to continuous delivery.`,
    learningOutcomes: [
      "Exploring utilization of continuous delivery.",
      "Identifying components of the DevOps pipeline.",
      "Recognizing importance and uses of version control.",
      "Determining tools used for CI and CD.",
      "Recognizing terminology used with a DevOps pipeline.",
      "Exploring methods for software testing and best practices.",
    ],
  },
  {
    name: "Jenkins Essential Training",
    slug: "b1f7a0e46c3659d0d1c25396bbd7838b2374b12afcff7404a0d5077b68e9ebfc",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/b1f7a0e46c3659d0d1c25396bbd7838b2374b12afcff7404a0d5077b68e9ebfc",
    skills: [
      devOps,
      jenkins,
      continuousIntegration,
      continuousDeployment,
      testing,
      docker,
      containerization,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course focuses on Jenkins, a popular DevOps suite known for its open-source extensibility and ease of use. It covers the fundamentals of the platform, including how to automate builds, test, secure deployments, create a pipeline, and integrate with version control systems. The course also delves into distributing agents like Docker containers, running and publishing tests, producing artifacts for review, and securing your DevOps loop by configuring users and permissions. Practical challenges at the end of each section allow you to apply your new skills.`,
    learningOutcomes: [
      "Learning core functions of Jenkins.",
      "Understanding the Jenkins Pipeline.",
      "Integrating Jenkins with Version Control Systems.",
      "Learning about agents and distributed builds.",
      "Understanding artifacts and testing in Jenkins.",
      "Securing Jenkins with user accounts and permissions.",
    ],
    archived: true,
  },

  {
    name: "GitHub Actions for CI/CD",
    slug: "679b3ba787209cd0d81d1d68e4bfc01e23ae14f9f2bdfa4e85f917025a8e732b",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/679b3ba787209cd0d81d1d68e4bfc01e23ae14f9f2bdfa4e85f917025a8e732b",
    skills: [
      devOps,
      gitHubActions,
      continuousIntegration,
      continuousDeployment,
      continuousDelivery,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course focuses on the use of GitHub Actions, a built-in automation tool in GitHub, for continuous integration, continuous delivery, and continuous deployment. It provides theory, demonstrations, and exercises for developers adopting GitHub Actions for their projects. The course aims to guide engineers on how to automate the complexities of software delivery, allowing them to focus on delivering value directly to users. It complements other courses on GitHub Actions by demonstrating industry best practices for creating workflows.`,
    learningOutcomes: [
      "Using GitHub Actions for CI/CD.",
      "Creating continuous integration workflows with GitHub Actions.",
      "Creating continuous delivery workflows with GitHub Actions.",
      "Creating continuous deployment workflows with GitHub Actions.",
    ],
    archived: true,
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    slug: "a46589fd9baa43c2c77d7de14e3830cf85648f1a6d5d7a489096d4e1b2a4d279",
    category: "DevOps",
    issuer: "GitHub",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/a46589fd9baa43c2c77d7de14e3830cf85648f1a6d5d7a489096d4e1b2a4d279",
    skills: [
      devOps,
      gitHubActions,
      continuousIntegration,
      continuousDeployment,
      continuousDelivery,
      docker,
      infrastructureAsCode,
      containerization,
      artificialIntelligence,
      automation,
      problemSolving,
      criticalThinking,
      projectManagement,
      adaptability,
    ],

    description:
      "This course equips learners with a comprehensive understanding of GitHub, focusing on mastering GitHub Actions and essential career skills. It covers creating, configuring, and deploying actions, publishing custom actions to the GitHub Marketplace, and managing workflows with existing actions. It also delves into Dockerfile generation, action crafting, and release management. The course further explores creating and managing development projects, using labels, task lists, and other project management features, and utilizing GitHub Copilot and GitHub's search features for code discovery and problem-solving.",
    learningOutcomes: [
      "Understanding how actions work",
      "Creating a repo and GitHub Pages",
      "Converting Python to YAML with Codespaces",
      "Creating a workflow with existing pi actions",
      "Creating a generator repo Dockerfile",
      "Crafting an action",
      "Testing your actions",
      "Creating a release",
      "Understanding Projects vs. classic projects",
      "Starting your first project",
      "Assigning items to collaborators",
      "Starting a project with an issue",
      "Using labels",
      "Using task lists",
      "Using slash commands and emojis",
      "Understanding GitHub Copilot",
      "Installing Copilot",
      "Using basic autocomplete",
      "Chatting with Copilot",
      "Outputting to YAML",
      "Troubleshooting fixes",
      "Using GitHub code search",
      "Using the search box and shortcuts",
      "Understanding search qualifiers",
      "Understanding syntax operators",
      "Finding code",
      "Finding code to learn from",
    ],
  },
  {
    name: "Continuous Integration and Continuous Delivery with GitLab",
    slug: "1d8280be68ca069d4bb66ad5618118079be897473794a7812ae940146672801c",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/1d8280be68ca069d4bb66ad5618118079be897473794a7812ae940146672801c",
    skills: [
      gitLab,
      gitlabCI,
      continuousIntegration,
      continuousDeployment,
      continuousDelivery,
      problemSolving,
      criticalThinking,
    ],

    description:
      "This course focuses on using GitLab, a popular open-source alternative to tools like GitHub and Bitbucket, for continuous integration and continuous delivery (CI/CD) practices. It guides you through setting up a project in GitLab and creating an end-to-end pipeline, enhancing your team's efficiency and software reliability.",
    learningOutcomes: [
      "Understanding continuous integration and delivery with GitLab",
      "Setting up a project in GitLab",
      "Applying lean manufacturing models",
      "Creating and running a pipeline",
      "Adding tests to the pipeline",
      "Generating a website using GitLab",
      "Understanding continuous delivery concepts",
      "Managing environments and environment variables",
      "Creating a deployment pipeline",
      "Automating deployments",
      "Completing a continuous delivery pipeline",
      "Releasing to production",
    ],
    archived: true,
  },
  {
    name: "Docker for Developers",
    slug: "bf3b572548b56f714cc70ee2c1447312a84869f6a93edb55e3d13b13337f3bd5",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/bf3b572548b56f714cc70ee2c1447312a84869f6a93edb55e3d13b13337f3bd5",
    skills: [
      devOps,
      docker,
      containerization,
      kubernetes,
      travisCI,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a comprehensive guide to leveraging Docker for application development. It covers everything from creating your first Docker image to deploying your app to the cloud. The course is designed to equip learners with practical skills such as setting up a full-stack environment with Docker, deploying and adding nodes to a Docker swarm, creating a cluster using Kubernetes, and integrating GitHub with Travis for Docker projects.`,
    learningOutcomes: [
      "Creating first Docker image.",
      "Setting up a full-stack environment with Docker.",
      "Deploying and adding nodes to a Docker swarm.",
      "Creating a cluster using Kubernetes.",
      "Setting up GitHub with Travis for Docker projects.",
    ],
  },
  {
    name: "Kubernetes: Provisioning with kind",
    slug: "a63c2359250f6a04bd19dab4ebd049edb511a1a9f2c3ef66a0a8d1df004f7d8d",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/a63c2359250f6a04bd19dab4ebd049edb511a1a9f2c3ef66a0a8d1df004f7d8d",
    skills: [
      devOps,
      kubernetes,
      docker,
      awsK3s,
      aws,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a focused guide on how to provision Kubernetes clusters using kind. It covers the challenges of installing Kubernetes and its prerequisites, and demonstrates how to deploy Kubernetes in Docker using K3s, in both single- and multinode clusters. This course is designed to polish your skills in Kubernetes, containerization, and clusterization.`,
    learningOutcomes: [
      "Installing Kubernetes and its prerequisites.",
      "Deploying Kubernetes in Docker with kind.",
      "Choosing a strategy for provisioning Kubernetes clusters.",
    ],
  },
  {
    name: "Ansible Essential Training",
    slug: "5eed7f56e5d7dc61b17a3f5fb3cb9fc42130506e948df550bf00899b5868b0a1",
    category: "DevOps",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/5eed7f56e5d7dc61b17a3f5fb3cb9fc42130506e948df550bf00899b5868b0a1",
    skills: [
      devOps,
      ansible,
      infrastructureAsCode,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course delves into the intermediate to advanced use cases of Ansible, a powerful IT automation engine. It covers the construction and execution of Ansible playbooks, task building, role reuse, and leveraging content from the Ansible community through Ansible Galaxy. Additionally, it explores encrypting secret information, managing network devices with Ansible, and leveraging the power of idempotence, equipping you with the skills to optimize tasks and updates efficiently.`,
    learningOutcomes: [
      "Building effective and reusable tasks in Ansible.",
      "Organizing tasks into roles and managing roles with Ansible Galaxy.",
      "Encrypting sensitive information with Ansible Vault.",
      "Performing network management with Ansible.",
      "Understanding and leveraging idempotence in Ansible.",
    ],
  },
  {
    name: "Python Automation and Testing",
    slug: "be0745932c948f80c1f9d32c0703eeaf94a3fdf3d35368a2619b8043ebe1c2f2",
    category: "DevOps",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/be0745932c948f80c1f9d32c0703eeaf94a3fdf3d35368a2619b8043ebe1c2f2",
    skills: [
      devOps,
      python,
      automation,
      testing,
      webDevelopment,
      html,
      problemSolving,
      criticalThinking,
    ],

    description:
      "This course provides a comprehensive guide to automating web UI tests using Python and Selenium WebDriver. It covers the installation of Python, understanding the browsers supported by Selenium, and handling exceptions in Selenium. The course also provides practical examples of automating web UI tests and controlling test timing and execution, equipping you with the skills to enhance your development workflow.",
    learningOutcomes: [
      "Installing Python for automation and testing",
      "Recognizing browsers supported by Selenium",
      "Finding elements when a unique ID is not available",
      'Understanding the purpose of "send_keys" in Selenium',
      "Handling exceptions raised when a function tries to locate an element not yet loaded into the DOM",
      "Automating web UI tests using Selenium WebDriver and Python",
      "Controlling test timing and execution with waits",
    ],
    archived: true,
  },
];

const webDevelopmentCertificates: CertificateInterface[] = [
  {
    name: "Building RESTful APIs with Flask",
    slug: "c5ccec418e67284d7945832543376e344173867d424cc1c7c7e7f4235b14debe",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/c5ccec418e67284d7945832543376e344173867d424cc1c7c7e7f4235b14debe",
    skills: [
      flask,
      python,
      rest,
      apis,
      jwt,
      databases,
      sql,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides fundamental knowledge on building RESTful APIs, a crucial component for web and mobile projects. It offers a hands-on approach to quickly building, securing, and testing an effective RESTful API using Python and Flask, the Python microframework. The course covers database access, authentication, and other common tasks in Flask, and introduces key plugins that enhance the use of Flask. It's designed to equip learners with the skills to enable highly connected interactions between applications.
    `,
    learningOutcomes: [
      "Creating a new Flask project.",
      "Working with databases in Flask.",
      "Implementing API security with JWT.",
      "Implementing CRUD operations in API.",
      "Exporting project's requirements file.",
      "Testing APIs with Postman.",
    ],
    archived: true,
  },
  {
    name: "Learning REST APIs",
    slug: "d16b210de3459c563295c4868ac19097bdddf84976d2137fa08293ec698f3380",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/d16b210de3459c563295c4868ac19097bdddf84976d2137fa08293ec698f3380",
    skills: [rest, apis, problemSolving, criticalThinking],

    description: `This course introduces the basics of REST APIs, explaining their importance and how they can enhance application efficiency. It explores the relationship between HTTP and REST APIs, the six constraints of REST, and HTTP status messages. The course also guides learners on how to start consuming REST APIs to integrate them into data-driven applications, making it a valuable resource for those looking to understand and utilize REST APIs.`,
    learningOutcomes: [
      "Understanding what is a REST API.",
      "Learning about the interaction with REST APIs.",
      "Exploring the anatomy of a REST request.",
      "Interpreting the response header.",
      "Understanding HTTP status messages.",
      "Learning about request/response pairs in REST.",
    ],
    archived: true,
  },
  {
    name: "Designing RESTful APIs",
    slug: "a54ec39fe8ae07277cfbfb553a61f1d6a0c95f23969a3f665d5e5c0afbd9fd68",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/a54ec39fe8ae07277cfbfb553a61f1d6a0c95f23969a3f665d5e5c0afbd9fd68",
    skills: [rest, apis, problemSolving, criticalThinking],

    description: `This course provides a comprehensive guide on planning and modeling APIs, a crucial skill for any developer creating websites. It introduces the six REST design constraints that guide architecture and offers advice on identifying system users and their activities. The course emphasizes the importance of validating your design before building it and explores the necessary HTTP concepts and REST constraints. It concludes with a discussion on common API design patterns, making it a valuable resource for developers looking to enhance their API design skills.`,
    learningOutcomes: [
      "Approaches to adding an API.",
      "Modeling tips for APIs.",
      "Identifying activities for API design.",
      "Creating and grouping API methods.",
      "Validating your API design.",
      "Understanding HTTP headers and response codes.",
      "Addressing common design challenges.",
      "Best practices for versioning.",
      "Approaches to hypermedia and documentation.",
    ],
  },
  {
    name: "RESTful APIs with Node.js and Express",
    slug: "c00cb40bda2152dd86d29b813b0d1b172123452a0b87b6017aec13115e693487",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/c00cb40bda2152dd86d29b813b0d1b172123452a0b87b6017aec13115e693487",
    skills: [rest, mongoDB, databases, problemSolving, criticalThinking],

    description: `This course guides learners on how to create a simple, RESTful web API using Node.js and Express, popular JavaScript libraries. It covers setting up the project, including the Express server and testing environment, and creating endpoints for data manipulation in a MongoDB database. The course also explores serving static files like images with the API and introduces additional libraries, such as Koa and LoopBack, that can streamline API development. It's designed for those interested in back-end programming without the need for extensive knowledge in the area.`,
    learningOutcomes: [
      "Building web API with Node.js and Express.",
      "Setting up project and creating endpoints.",
      "Serving static files with API.",
      "Exploring additional libraries for API development.",
      "Understanding basics of RESTful APIs and CRUD operations.",
    ],
    archived: true,
  },
  {
    name: "CSS Fundamentals: Unlock the Power of Web Styling",
    slug: "ff054b4dd1a8fec0eb00ee80a59bc82e5fed3e50b11bba3e3cd33026f0a0eee0",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/ff054b4dd1a8fec0eb00ee80a59bc82e5fed3e50b11bba3e3cd33026f0a0eee0",
    skills: [css, html, problemSolving, criticalThinking],

    description: `This course offers a comprehensive exploration of Cascading Style Sheets (CSS), the language that enhances HTML's appearance in the browser. It provides an overview of what CSS is, how it works with HTML, authoring options, and common CSS concepts like the CSS box model, fonts, and color. The course is designed to be flexible, allowing learners to either follow it from start to finish or jump to specific topics of interest. It aims to lay a solid foundation for working with styles on the web, making it a valuable resource for those looking to master the fundamentals of CSS.`,
    learningOutcomes: [
      "Understanding what CSS is and how it works with HTML.",
      "Learning common CSS concepts.",
      "Exploring the cascade, specificity, and inheritance in CSS.",
      "Creating layouts with flexbox, grid, and frameworks.",
      "Using browser tools and validation tools for CSS.",
    ],
    archived: true,
  },
  {
    name: "Firebase Essential Training",
    slug: "5b6b19227f501cb7dab97b2378a58bc7740bd590a2e44916bf07ba59fd2fc06f",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/5b6b19227f501cb7dab97b2378a58bc7740bd590a2e44916bf07ba59fd2fc06f",
    skills: [firebase, gcp, problemSolving, criticalThinking],

    description: `This course provides a comprehensive guide on integrating Firebase into a React application, transforming it into a fully functional app. It covers Firebase's capabilities, including Firebase Authentication, which eliminates the need for setting up an authentication server, and Cloud Functions for defining back-end functionality. The course aims to help developers leverage Firebase to handle concerns like performance, security, offline functionality, hosting, and authentication, allowing them to focus on building user-centric applications.`,
    learningOutcomes: [
      "Understanding Firebase and its usage.",
      "Learning Firebase Authentication.",
      "Using Firestore for data storage and query.",
      "Implementing Cloud Functions for back-end logic.",
      "Using Cloud Storage for file handling.",
      "Deploying web app with Firebase Hosting.",
    ],
    archived: true,
  },
  {
    name: "Flask Essential Training",
    slug: "4585e03073dcdf552484e6a6d9bc407d1b7e0ad3872d6a3b114d3e3d0869e9ea",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/4585e03073dcdf552484e6a6d9bc407d1b7e0ad3872d6a3b114d3e3d0869e9ea",
    skills: [
      python,
      flask,
      gunicorn,
      jinja,
      bootstrap,
      rest,
      problemSolving,
      criticalThinking,
    ],

    description: `This course offers a comprehensive guide to Flask, a Python framework for building lightweight and dynamic web applications. It covers the pros and cons of working with Flask, the creation of a Flask app, data flow, working with Jinja templates, using blueprints and views for organization, testing, and deployment with Gunicorn. The course provides training and hands-on examples, making it a valuable resource for those looking to quickly learn and start using Flask.`,
    learningOutcomes: [
      "Understanding pros and cons of Flask.",
      "Creating first route in Flask.",
      "Working with Jinja templates in Flask.",
      "Using GET and POST requests in Flask.",
      "Understanding data flow in Flask.",
      "Setting up an API in Flask.",
      "Templating Flask with Bootstrap.",
      "Testing Flask app.",
      "Deploying app with Gunicorn.",
    ],
  },
  {
    name: "Learning Django",
    slug: "7b5e4d7314ff1b615a3ae959f0d936e66808a5f718a85e42813d957d4ec492d7",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/7b5e4d7314ff1b615a3ae959f0d936e66808a5f718a85e42813d957d4ec492d7",
    skills: [
      python,
      django,
      css,
      html,
      javascript,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a comprehensive introduction to Django, a free and open-source framework designed on top of Python that supports data-driven architecture. It guides learners through creating a Django project, defining a data model and fields, querying the database, and using Django's built-in URL handlers, views, and templates. The course also covers how to enhance Django templates with CSS and JavaScript, making it a valuable resource for those looking to quickly start and efficiently manage web applications with Django.`,
    learningOutcomes: [
      "Rapid web application development with Django.",
      "Setting up a Django project.",
      "Working with Django models and the admin.",
      "Building URL handlers and views in Django.",
      "Creating Django templates.",
    ],
  },
  {
    name: "GraphQL Essential Training",
    slug: "3c1654b23256c27553b9d6288d9592aa47fe825a7bf85714283f3e61e26f6f58",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/3c1654b23256c27553b9d6288d9592aa47fe825a7bf85714283f3e61e26f6f58",
    skills: [
      graphQL,
      apollo,
      mongoDB,
      sql,
      databases,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides an introduction to GraphQL, a query language for APIs that optimizes data retrieval. It covers the setup of GraphQL, exploration of the GraphQL schema, and understanding of basic types and fields. The course also guides learners on setting up persistence using SQL and MongoDB with GraphQL, adding new items with mutations, and leveraging advanced features in queries. It's designed to equip learners with the skills to efficiently use GraphQL for their data needs.`,
    learningOutcomes: [
      "Setting up GraphQL and using GraphiQL and Apollo Server.",
      "Exploring the GraphQL schema.",
      "Setting up persistence with SQL and MongoDB in GraphQL.",
      "Using advanced features in GraphQL queries.",
    ],
  },
  {
    name: "HTML Essential Training",
    slug: "983c6ba63131250c1d3df7e13f5e8f8951c02cb64c02c33d99e80df23cf3c869",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/983c6ba63131250c1d3df7e13f5e8f8951c02cb64c02c33d99e80df23cf3c869",
    skills: [html, problemSolving, criticalThinking, creativity],

    description: `This course provides a comprehensive guide to crafting excellent HTML, the foundation of website and web application development. It emphasizes the importance of semantic markup, which ensures content is understood by both human audiences and computer systems, including screen readers and search engines. The course covers all fundamental concepts needed to use HTML thoughtfully, making it a valuable resource for those looking to enhance their web development skills.`,
    learningOutcomes: [
      "Understanding basic syntax of HTML elements.",
      "Formatting content in HTML.",
      "Displaying images using HTML.",
      "Creating links in HTML.",
      "Understanding global HTML attributes.",
      "Building navigation in HTML.",
      "Structuring content with HTML.",
      "Building forms using HTML.",
      "Creating tables in HTML.",
    ],
    archived: true,
  },
  {
    name: "Node.js Essential Training",
    slug: "ef41e5cf67f7657353febca7c6b206bf7dd8e28497c393790d8a266842c81132",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/ef41e5cf67f7657353febca7c6b206bf7dd8e28497c393790d8a266842c81132",
    skills: [javascript, problemSolving, criticalThinking],

    description: `
    Node.js is a powerful tool for controlling servers, building web applications, and creating event-driven programs. And it takes JavaScript—a language familiar to all web developers—out of the browser. With Node.js, you can build applications that run on your laptop or even the cloud. In this course, learn the essentials of Node.js and start creating your own JavaScript applications. This course shows how to install Node.js and work with the Node.js core, which includes standard input, standard output, the module system, the file system, and how to write and run JavaScript on the server. Upon wrapping up this course, you'll be equipped with fundamental Node.js concepts and techniques that you can put to use in your next project.
    `,
    learningOutcomes: [
      "Learning Node.js basics and core.",
      "Understanding what Node.js is and its usage.",
      "Learning about Node globals.",
      "Creating and using Node modules.",
      "Managing files and streams in Node.js.",
    ],
    archived: true,
  },
  {
    name: "React.js Essential Training",
    slug: "f2226c0a5de58874e8b882b91fe8945f69d0f0b6de15fa70a09082a08bd464fd",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/f2226c0a5de58874e8b882b91fe8945f69d0f0b6de15fa70a09082a08bd464fd",
    skills: [
      react,
      javascript,
      testing,
      html,
      css,
      problemSolving,
      criticalThinking,
      creativity,
    ],

    description: `This course offers an introduction to React.js, a JavaScript library known for its reusable components and scalability, making applications more maintainable and efficient. It covers the basics of the React library, the modern syntax and best practices for creating React components, setting up Chrome tools for React, working with built-in Hooks, and using the Create React App for testing. By the end of the course, learners will be equipped with the essentials of React.js, preparing them to build their own browser-based projects.`,
    learningOutcomes: [
      "Learning basics of React.js.",
      "Creating reusable components in React.",
      "Handling forms and user input in React.",
      "Fetching data and using React Router.",
      "Testing and deploying React applications.",
    ],
  },
  {
    name: "Learning Next.js",
    slug: "a2ae9eb61db705535ebd73746bfe20e0988633b80ade57c12aa523a9bbdae3db",
    category: "Web Development",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/a2ae9eb61db705535ebd73746bfe20e0988633b80ade57c12aa523a9bbdae3db",
    skills: [
      nextjs,
      react,
      javascript,
      html,
      css,
      problemSolving,
      criticalThinking,
      creativity,
    ],

    description: `This course provides a comprehensive guide to Next.js, a popular, React-based web development framework that combines the benefits of server-side rendering with the speed and ease of a single-page app. It covers basic features like pages, data fetching, and layout options, as well as advanced topics like dynamic and API routes. The course aims to equip learners with the skills to build, manage, and customize a complete web application from scratch in JavaScript, offering a seamless developer experience with zero configuration and lightning-fast, dynamic page speeds.`,
    learningOutcomes: [
      "Learning the benefits of Next.js.",
      "Building a file-based routing system in Next.js.",
      "Pre-rendering and fetching data in Next.js.",
      "Styling a Next.js application.",
    ],
  },
  {
    name: "Using TypeScript with React",
    slug: "UC-431983c4-3861-46fc-866e-d97bd5edab77",
    category: "Web Development",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-431983c4-3861-46fc-866e-d97bd5edab77/",
    skills: [
      typescript,
      react,
      javascript,
      html,
      css,
      problemSolving,
      criticalThinking,
      creativity,
    ],

    description: `This course equips learners with the necessary TypeScript skills to confidently build React applications. It covers how to describe types for function and class components, use higher order components and render props patterns, and import third-party libraries and their types. The course includes practical projects using TypeScript with Redux and Next.js framework with Apollo GraphQL libraries. It's designed for those with prior React experience who want to learn TypeScript, enhancing their front-end development skills.`,
    learningOutcomes: [
      "Understanding basic and advanced features of TypeScript.",
      "Using TypeScript in React projects.",
      "Writing types for React patterns.",
      "Integrating TypeScript into a Create React App with Redux.",
      "Building a NextJS web app with GraphQL API using TypeScript.",
      "Using types from third-party packages and creating custom type definitions.",
      "General usage of React with TypeScript.",
    ],
  },
  {
    name: "Spring Boot For Beginners",
    slug: "l4wvdvdd",
    category: "Web Development",
    issuer: "Amigoscode",
    certificateURL: "https://app.amigoscode.com/courses/267273/certificate",
    skills: [
      springBoot,
      java,
      rest,
      apis,
      jwt,
      databases,
      sql,
      problemSolving,
      criticalThinking,
    ],

    learningOutcomes: [
      "Understanding the basics of Spring Boot",
      "Setting up a Spring Boot application using Spring Initializr",
      "Configuring an embedded web server in Spring Boot",
      "Creating your first API in Spring Boot",
      "Understanding the Spring Web MVC",
      "Converting Java objects to JSON objects",
      "Understanding the N Tier Diagram and Model",
      "Setting up a Postgres DB and configuring the datasource",
      "Creating a database with Spring Data JPA",
      "Building a CRUD API with Spring Boot",
    ],
    description: `
      This course provides a comprehensive guide to Spring Boot, a popular Java-based framework for building web applications.
      It covers the basics of Spring Boot, including setting up a Spring Boot application, configuring an embedded web server, and creating your first API.
      The course also explores the Spring Web MVC, converting Java objects to JSON objects, and setting up a Postgres DB and configuring the datasource.
      It's designed to equip learners with the skills to build their own web applications with Spring Boot.
    `,
  },
];

const databasesCertificates: CertificateInterface[] = [
  {
    name: "Database Management System (DBMS) & SQL",
    slug: "UC-b49387a5-5a13-4b1a-aba1-73cac775c026",
    category: "Databases",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-b49387a5-5a13-4b1a-aba1-73cac775c026/",
    skills: [
      sql,
      databaseManagementSystems,
      normalisation,
      indexing,
      problemSolving,
      criticalThinking,
    ],

    description: `
      This comprehensive course offers an in-depth exploration of Database Management Systems (DBMS) and SQL,
      tailored for both beginners and advanced learners. 
      It covers fundamental to advanced concepts of relational databases, including ER modeling, normalization, SQL queries, concurrency control, and indexing with B and B+ Trees. 
      The course is designed to enhance practical skills in database design and query formulation, making it ideal for academic students, competitive exam aspirants, and professionals aiming to excel in the field of database engineering.`,
    learningOutcomes: [
      "Understand the basic concepts of Database Management System (DBMS)",
      "Explain the principles of the relational data model and entity-relationship model",
      "Design and implement effective database systems using normalization techniques",
      "Develop proficiency in SQL for complex query construction and database manipulation",
      "Understand and apply concepts of concurrency control and transaction management",
      "Learn about database indexing with a focus on B and B+ Trees",
      "Acquire the ability to design ER models for real-world database applications",
      "Gain insights into advanced database concepts for competitive exams and professional certification",
    ],
  },
  {
    name: "Database Foundations: Intro to Databases",
    slug: "8b2d47f66f59b8b9724a6c1f05f15e27a9b08c3caaf95169c1d6c64537a1d066",
    category: "Databases",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/8b2d47f66f59b8b9724a6c1f05f15e27a9b08c3caaf95169c1d6c64537a1d066",
    skills: [sql, problemSolving, criticalThinking],

    description: `
    This course guides you through setting up container-based servers, connecting a management GUI, and building a database. It covers how to set up a database playground, include a user-friendly graphical interface, create table objects, add data to a table, and retrieve and manipulate data. The course is applicable to learners on any operating system and includes exercise files for hands-on practice. It concludes with suggestions for continuing your learning journey.`,
    learningOutcomes: [
      "Explaining database core concepts.",
      "Constructing a database testing environment.",
      "Operating graphical tools to manage databases.",
      "Defining database table objects.",
      "Adding data to database tables.",
      "Exploring core SQL commands for data retrieval.",
      "Using SQL to manipulate retrieved database data.",
    ],
  },
  {
    name: "Introduction to MongoDB",
    slug: "f024344050a592ea0bb2ada78e0175fabecabab2248ffeb58671b9fe4adfc141",
    category: "Databases",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/f024344050a592ea0bb2ada78e0175fabecabab2248ffeb58671b9fe4adfc141",
    skills: [
      mongoDB,
      noSql,
      databaseManagementSystems,
      indexing,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course provides foundational knowledge and skills for working with MongoDB, a popular document model database. It covers an introduction to MongoDB Atlas, data structuring, connection to a MongoDB database, and performing key tasks such as CRUD operations, aggregation, indexing, data modeling, transactions, and creating a user search experience. By the end of the course, you'll be equipped to start working with MongoDB.`,
    learningOutcomes: [
      "Introduction to MongoDB Atlas.",
      "Understanding MongoDB and the Document Model.",
      "Connecting to a MongoDB Database.",
      "Performing MongoDB CRUD Operations.",
      "Using MongoDB Aggregation.",
      "Creating and using MongoDB Indexes.",
      "Using MongoDB Atlas Search.",
      "Introduction to MongoDB Data Modeling.",
      "Using MongoDB Transactions.",
    ],
  },
  {
    name: "Redis Essential Training",
    slug: "209aec09fbb007c809840a071b5db71dc8e08da5b92799121e158ed1e185062b",
    category: "Databases",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/209aec09fbb007c809840a071b5db71dc8e08da5b92799121e158ed1e185062b",
    skills: [
      redis,
      noSql,
      databaseManagementSystems,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course covers the core concepts and basic functionality of Redis, an open-source, in-memory database. It guides you through the fundamentals of working with data structures, exploring hashes, lists and sets, key naming strategies, and various ways to read and represent data. The course also delves into pub/sub, message buses, streams, and keyspace notifications. By the end, you'll be equipped to deploy Redis as a database, a cache, a message broker, or a streaming engine.`,
    learningOutcomes: [
      "Learning core concepts and basic functionality of Redis.",
      "Understanding different data types and structures in Redis.",
      "Exploring various ways to read and represent data in Redis.",
      "Applying Redis knowledge to practical examples.",
      "Comparing Redis to relational databases and using key naming strategies.",
    ],
  },
];

const mathematicsCertificates: CertificateInterface[] = [
  {
    name: "Discrete Mathematics",
    slug: "UC-8d13c37d-5013-4873-b4fd-56a867ad853d",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-8d13c37d-5013-4873-b4fd-56a867ad853d/",
    skills: [
      discrete,
      logics,
      probability,
      statistics,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course focuses on Discrete Mathematics, a fundamental area of Mathematics and Computer Science that deals with discrete rather than continuous topics. It aims to build the mathematical foundation for various computer science and mathematics courses. The course covers essential topics such as sets, logic, number theory, proofs, functions, relations, graph theory, statistics, combinatorics, and sequences and series, equipping students with the ability to understand mathematical language.`,
    learningOutcomes: [
      "Developing ability to think, read and write abstractly and Mathematically.",
      "Learning fundamentals of Set Theory.",
      "Understanding tautologies, contradictions, De Morgan's Laws in Logic.",
      "Creating truth tables for compound statements.",
      "Writing, reading and proving Mathematical statements.",
      "Understanding boolean expressions, logical gates and digital circuits.",
      "Understanding the Fundamental Theorem of Arithmetics, modular arithmetic.",
      "Acquiring a solid foundation in functions.",
      "Finding equivalence relations and equivalence classes.",
      "Learning essential concepts in Statistics and Combinatorics.",
      "Mastering arithmetic and geometric sequences, and partial sums.",
      "Learning fundamental concepts in Graph Theory.",
    ],
  },
  {
    name: "A-Level Maths: Pure (Year 1 / AS)",
    slug: "UC-630e6292-a0ee-4ebb-94f0-ebaeedb101a8",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-630e6292-a0ee-4ebb-94f0-ebaeedb101a8/",
    skills: [
      algebra,
      trigonometry,
      calculus,
      vectors,
      problemSolving,
      criticalThinking,
    ],

    description: `This course covers all the pure content in A-Level AS maths, suitable for all major exam boards. It delves into equations and inequalities, graphs, straight line graphs, circles, polynomial division, proof, binomial expansion, trigonometry, vectors, differentiation, integration, and exponentials and logarithms. The course includes explanatory videos, quizzes, and worksheets with questions from real A-Level past papers, providing a comprehensive understanding of A-Level AS maths.`,
    learningOutcomes: [
      "Understanding quadratics",
      "Manipulating polynomials",
      "Solving equations",
      "Working with inequalities",
      "Interpreting graphs",
      "Applying circle theorems",
      "Proving mathematical statements",
      "Expanding binomials",
      "Applying trigonometry",
      "Working with vectors",
      "Differentiating functions",
      "Integrating functions",
      "Understanding exponentials",
    ],
  },
  {
    name: "A-Level Maths: Pure (Year 2)",
    slug: "UC-f951f5eb-0e4c-4fd6-8db0-29c24e616a2b",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-f951f5eb-0e4c-4fd6-8db0-29c24e616a2b/",
    skills: [
      algebra,
      geometry,
      trigonometry,
      calculus,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course covers the second year pure content in A-Level Maths, suitable for all major exam boards. It explores parametric equations, functions in graphs, binomial expansion, radians, trigonometric functions and identities, differentiation, integration, numerical methods, and vectors. The course includes explanatory videos, quizzes, and worksheets with questions from real A-Level past papers, providing a comprehensive understanding of advanced pure maths.
    `,
    learningOutcomes: [
      "Decomposing partial fractions",
      "Understanding functions",
      "Interpreting graphs",
      "Analyzing sequences",
      "Summing series",
      "Expanding binomials",
      "Converting radians",
      "Applying trigonometry",
      "Differentiating functions",
      "Integrating functions",
      "Solving parametric equations",
      "Applying numerical methods",
      "Working with vectors",
    ],
  },
  {
    name: "A-Level Maths: Mechanics (Year 1 / AS)",
    slug: "UC-84beb6d6-275d-41ff-8215-c4918454b846",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-84beb6d6-275d-41ff-8215-c4918454b846/",
    skills: [mechanics, problemSolving, criticalThinking],

    description: `
    This course focuses on A-Level Mechanics, providing an understanding of key concepts such as Newton's laws of motion, kinematics, dynamics, and variable acceleration. It includes the application of constant acceleration formulae (SUVAT) and calculus to motion problems, understanding vectors, and using a calculator for A-level mechanics. The course offers a comprehensive understanding of A-Level Mechanics through various learning outcomes.`,
    learningOutcomes: [
      "Understanding mechanics",
      "Applying physics principles",
      "Analyzing kinematics",
      "Studying dynamics",
      "Working with variable acceleration",
    ],
  },
  {
    name: "A-Level Maths: Mechanics (Year 2)",
    slug: "UC-729218f1-da7b-4684-857f-78f9920686f2",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-729218f1-da7b-4684-857f-78f9920686f2/",
    skills: [mechanics, problemSolving, criticalThinking],

    description: `
    This course covers the mechanics component of maths A-Level 2nd year content, building on the first year course content. It is suitable for all major exam boards and is ideal for anyone interested in furthering their understanding of the subject. The course delves into moments, kinematics, and dynamics, teaching students how to calculate the moment of a force, model a projectile flying through the air, and work with friction in various scenarios.`,
    learningOutcomes: [
      "Understanding mechanics",
      "Applying physics principles",
      "Calculating moments",
      "Working with forces",
      "Analyzing friction",
      "Modeling projectiles",
      "Achieving equilibrium",
      "Studying dynamics",
    ],
  },
  {
    name: "A-Level Maths: Statistics (Year 1 / AS)",
    slug: "UC-4a1b790f-b0d8-430b-8dfd-d40a60c0ebee",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-4a1b790f-b0d8-430b-8dfd-d40a60c0ebee/",
    skills: [probability, statistics, problemSolving, criticalThinking],

    description: `
    This course covers the statistics component of maths A-Level AS content, suitable for all major exam boards. It provides an introduction to statistics, teaching students how to analyze and represent data, understand bivariate data, probability, binomial distribution, hypothesis tests, sampling, and large data sets. The course is ideal for anyone interested in getting started with statistics.`,
    learningOutcomes: [
      "Understanding statistics",
      "Calculating measures of location",
      "Determining measures of spread",
      "Handling data",
      "Representing data",
      "Analyzing bivariable data",
      "Calculating probability",
      "Applying binomial distribution",
      "Testing hypotheses",
      "Sampling data",
      "Working with large data sets",
    ],
  },
  {
    name: "A-Level Maths: Statistics (Year 2)",
    slug: "UC-1efbccad-5f12-4002-85cc-1efebfb81e34",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-1efbccad-5f12-4002-85cc-1efebfb81e34/",
    skills: [probability, statistics, problemSolving, criticalThinking],
    description: `This course covers the statistics component of maths A-Level 2nd year content, building on the first year course content. It is suitable for all major exam boards and is ideal for anyone interested in furthering their understanding of the subject. The course delves into correlation, regression, conditional probability, and the normal distribution, teaching students how to measure correlation, calculate equations of regression lines, explore conditional probability problems, and use the normal distribution.`,
    learningOutcomes: [
      "Understanding statistics",
      "Measuring correlation",
      "Calculating regression",
      "Exploring conditional probability",
      "Working with discrete random variables",
      "Applying normal distribution",
      "Testing hypotheses",
      "Analyzing data",
    ],
  },
  {
    name: "Complete A-Level Maths: Mechanics in 5 Lectures",
    slug: "UC-5aabeb79-4fb8-4cab-a5d5-3daa1b009170",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-5aabeb79-4fb8-4cab-a5d5-3daa1b009170/",
    skills: [mechanics, problemSolving, criticalThinking],

    description: `
    This course, designed by Westbound Maths, covers the entire A-Level Applied Maths: Mechanics syllabus, representing a significant portion of the final exam weight for the A-Level Mathematics qualification. The course delves into topics such as forces, moments, vectors, and kinematics, providing a comprehensive understanding of A-Level Applied Maths: Mechanics.
    `,
    learningOutcomes: [
      "Understanding mechanics",
      "Applying physics principles",
      "Analyzing kinematics",
      "Studying dynamics",
      "Working with variable acceleration",
      "Calculating moments",
      "Working with forces",
      "Analyzing friction",
      "Modeling projectiles",
      "Achieving equilibrium",
      "Studying dynamics",
    ],
    archived: true,
  },
  {
    name: "Complete A-Level Pure Maths Course in 10 Lectures",
    slug: "UC-e2179bc4-5760-4a77-88a4-a2738d22a96e",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-e2179bc4-5760-4a77-88a4-a2738d22a96e/",
    skills: [
      algebra,
      trigonometry,
      calculus,
      vectors,
      problemSolving,
      criticalThinking,
    ],

    description: `
    This course, designed by Westbound Maths, covers the entire A-Level Pure Maths syllabus, representing a significant portion of the final exam weight for the A-Level Mathematics qualification. The course delves into topics such as sequence and series, binomial expansion, trigonometry, algebra, functions, parametric equations, differentiation, and integration, providing a comprehensive understanding of A-Level Pure Maths.`,
    learningOutcomes: [
      "Understanding quadratics",
      "Manipulating polynomials",
      "Solving equations",
      "Working with inequalities",
      "Interpreting graphs",
      "Applying circle theorems",
      "Proving mathematical statements",
      "Expanding binomials",
      "Applying trigonometry",
      "Working with vectors",
      "Decomposing partial fractions",
      "Understanding functions",
      "Interpreting graphs",
      "Analyzing sequences",
      "Summing series",
      "Expanding binomials",
      "Converting radians",
      "Applying trigonometry",
      "Differentiating functions",
      "Integrating functions",
      "Solving parametric equations",
      "Applying numerical methods",
      "Working with vectors",
    ],
    archived: true,
  },
  {
    name: "Complete A-Level Maths: Statistics in 6 Lectures",
    slug: "UC-fbc6d079-db3f-405f-8c32-f242b266d826",
    category: "Mathematics",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-fbc6d079-db3f-405f-8c32-f242b266d826/",
    skills: [probability, statistics, problemSolving, criticalThinking],

    description: `
    This course, designed by Westbound Maths, covers the entire A-Level Applied Maths: Statistics syllabus, representing a significant portion of the final exam weight for the A-Level Mathematics qualification. The course delves into topics such as statistical sampling methods, statistical measures, correlation, regression, discrete and continuous probability distribution, hypothesis testing, and probability, providing a comprehensive understanding of A-Level Applied Maths: Statistics.`,
    learningOutcomes: [
      "Understanding statistics",
      "Calculating measures of location",
      "Determining measures of spread",
      "Handling data",
      "Representing data",
      "Analyzing bivariable data",
      "Calculating probability",
      "Applying binomial distribution",
      "Testing hypotheses",
      "Sampling data",
      "Working with large data sets",
      "Measuring correlation",
      "Calculating regression",
      "Exploring conditional probability",
      "Working with discrete random variables",
      "Applying normal distribution",
      "Understanding Poisson distribution",
      "Working with continuous random variables",
      "Applying geometric distribution",
    ],
    archived: true,
  },
];

const softwareEngineeringCertificates: CertificateInterface[] = [
  {
    name: "Create an Open-Source Project in Python",
    slug: "6afc37d98889e1ed209d677fd7928ece257125ca8d538ed6b0fa0ed18e4e30d6",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/6afc37d98889e1ed209d677fd7928ece257125ca8d538ed6b0fa0ed18e4e30d6",
    skills: [
      python,
      poetry,
      pytest,
      tox,
      gitHubActions,
      continuousIntegration,
      continuousDeployment,
      linting,
      black,
      problemSolving,
      criticalThinking,
      projectManagement,
    ],

    description: `This course guides learners through the process of starting, building, testing, and maintaining an open-source project in Python. It introduces learners to Poetry, a popular dependency management tool, and covers how to write and manage tests using pytest and tox. The course also discusses code tidiness and style guide adherence using PEP 8, Black, Flake8, and pre-commit, and demonstrates how to set up a workflow on GitHub Action. It concludes with best practices for open-source projects.`,
    learningOutcomes: [
      "Using Poetry for Python project and dependency management.",
      "Writing and running pytests for code quality and functionality.",
      "Using PEP 8, Black, Flake8, and pre-commit for code tidiness and style guide adherence.",
      "Using tox for standardized testing across Python versions and environments.",
      "Setting up a GitHub Action workflow for automated testing and code coverage.",
    ],
    archived: true,
  },
  {
    name: "Introducing Maven",
    slug: "551778db5ecef81f732b9e48d50db3fe709f877f1ac9c834923b0c96bb636e72",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/551778db5ecef81f732b9e48d50db3fe709f877f1ac9c834923b0c96bb636e72",
    skills: [java, maven, problemSolving, criticalThinking, projectManagement],

    description: `This course provides a comprehensive introduction to Apache Maven, a powerful build system widely used by Java developers. It covers the basics of using Maven for dependency management, builds, and reporting. The course delves into the project object model (POM), the build life cycle, and the use of Core and Tools plugins for task automation. It also explores dependency management, including the creation of uber JAR files, and concludes with a section on reporting with Maven sites and popular plugins.`,
    learningOutcomes: [
      "Exploring POM files.",
      "Understanding the build life cycle.",
      "Using build plugins.",
      "Managing dependencies with Maven.",
      "Generating Maven reports.",
      "Working with Maven sites.",
    ],
    archived: true,
  },
  {
    name: "Learning Gradle",
    slug: "1fcbb76a7feb53dc0b8585896de025b31799feeb7819544ba6e6ebf454ef6769",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/1fcbb76a7feb53dc0b8585896de025b31799feeb7819544ba6e6ebf454ef6769",
    skills: [
      java,
      gradle,
      junit,
      problemSolving,
      criticalThinking,
      projectManagement,
      testing,
    ],

    learningOutcomes: [
      "Understanding Build files and conventions",
      "Defining and configuring a task",
      "Understanding the directed acyclic graph (DAG)",
      "Learning Build lifecycle phases",
      "Applying reusable functionality with plugins",
      "Understanding Domain object runtime representation",
      "Referencing the documentation",
      "Defining and executing a task",
    ],
    description:
      "This course offers a deep dive into Gradle, an open-source build automation tool, providing the core concepts and building blocks necessary for automation. You will learn how to define build logic, use Gradle support in IntelliJ IDEA, and understand the three phases of build execution. The course also covers how to locate and apply plugins, create a new task for a compressed TAR file, and gain insights from a deeper look at a Gradle build. After completing this course, you will be equipped to implement and execute build logic with Gradle.",
    archived: true,
  },
  {
    name: "Gradle for Java-Based Applications and Libraries",
    slug: "8c9027d06b51638e29fcac4c109275401f5202a046eb80de8f65fcc20c9c733b",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/8c9027d06b51638e29fcac4c109275401f5202a046eb80de8f65fcc20c9c733b",
    skills: [
      java,
      gradle,
      maven,
      problemSolving,
      criticalThinking,
      projectManagement,
    ],

    learningOutcomes: [
      "Understanding the anatomy of a simple Java project",
      "Applying the Java plugin",
      "Compiling Java source code",
      "Packaging a JAR file",
      "Exploring the Java Application plugin",
      "Generating Javadocs for a Java project",
      "Understanding Dependency Management Basics",
      "Declaring a dependency on an external library",
      "Rendering the dependency tree",
      "Declaring a project dependency",
      "Using the Maven Publish plugin to publish a library",
      "Consuming an external dependency",
      "Using the JUnit 5 test framework",
      "Declaring JUnit dependencies",
      "Executing tests and inspecting the results",
      "Fixing a failed test suite",
    ],
    description:
      "This course provides a comprehensive guide to using Gradle for building and testing Java programs. It covers typical tasks such as compiling code, adding dependencies, running tests, and building a JAR file. The course also delves into the project structure and source code of a simple Java project, the application of the Java plugin for Gradle, and the generation of Javadocs. It further explores the basics of dependency management and the steps to test a Java project and fix a failed test suite. This course is a valuable resource for anyone looking to deepen their Gradle knowledge.",
    archived: true,
  },
  {
    name: "Software Testing Foundations: Test Techniques",
    slug: "f3297827ac972df2c87c56883f1217ba051a4f12df86886d33f902f2fda5614c",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/f3297827ac972df2c87c56883f1217ba051a4f12df86886d33f902f2fda5614c",
    skills: [testing, problemSolving, criticalThinking],

    description: `
    This course emphasizes the importance of technique in software testing, aiming to refine and hone the skills of software testers. It covers key testing techniques like black-box testing, white-box testing, and experienced-based testing. The course also provides advice on how to effectively communicate the testing process to ensure results are not lost in technical jargon, making it a valuable resource for software testers looking to enhance their skills or prepare for an ISTQB certification.`,
    learningOutcomes: [
      "Applying black-box testing",
      "Implementing white-box testing",
      "Utilizing experienced-based testing",
    ],
  },
  {
    name: "The Git & Github Bootcamp",
    slug: "UC-ba00c0c9-221d-4939-99b4-90244570a81b",
    category: "Software Engineering",
    issuer: "Udemy",
    certificateURL:
      "https://www.udemy.com/certificate/UC-ba00c0c9-221d-4939-99b4-90244570a81b/",
    skills: [git, gitHub, problemSolving, criticalThinking],

    description: `
    This comprehensive course provides an in-depth understanding of Git and GitHub, essential tools for any code-related field. The course is divided into four units: Git Essentials, Next Level Git, Github & Collaboration, and The Tricky Bits. It covers everything from basic Git mechanics like committing and branching, to advanced topics like rebasing and interactive rebase. The course also delves into collaboration workflows, contributing to open source projects, and using features like Github Gists and Github Pages. With numerous diagrams, visual references, and exercises, this course offers a practical and engaging approach to mastering Git and GitHub.`,
    learningOutcomes: [
      "Understanding Git's internal workings.",
      "Explaining Git objects: trees, blobs, commits, and annotated tags.",
      "Mastering the essential Git workflow: adding & committing.",
      "Working with Git branches.",
      "Performing Git merges and resolving merge conflicts.",
      "Using Git diff to reveal changes over time.",
      "Mastering Git stashing.",
      "Undoing changes using git restore, git revert, and git reset.",
      "Working with local and remote repositories.",
      "Mastering collaboration workflows: pull requests, 'fork & clone', etc.",
      "Squashing, cleaning up, and rewriting history using interactive rebase.",
      "Retrieving 'lost' work using git reflogs.",
      "Writing custom and powerful Git aliases.",
      "Marking releases and versions using Git tags.",
      "Hosting static websites using Github Pages.",
      "Creating markdown READMEs.",
      "Sharing code and snippets using Github Gists.",
    ],
  },
  {
    name: "Programming Foundations: Design Patterns",
    slug: "f14a53c061bc271d233daeb5f46d5441dc2e86f386420c0fbd846291a5cccaf8",
    category: "Software Engineering",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/f14a53c061bc271d233daeb5f46d5441dc2e86f386420c0fbd846291a5cccaf8",
    skills: [
      designPatterns,
      oop,
      python,
      java,
      javascript,
      problemSolving,
      criticalThinking,
    ],

    description: `
      A course that offers reusable solutions to common challenges in software development. 
      It introduces learners to the concept of design patterns and explores several of the most frequently used object-oriented patterns. 
      The course focuses on the practical application of patterns like the strategy, adapter, observer, and decorator, providing real-world context through code demos. 
      This course aims to equip learners with proven and tested patterns to make their software more flexible and resilient to change.`,
    learningOutcomes: [
      "Understanding the encapsulation of code that varies with the Strategy pattern",
      "Recognizing the limitations of inheritance",
      "Applying the Adapter pattern",
      "Implementing the Observer pattern",
      "Extending behavior with composition and the Decorator pattern",
      "Encapsulating iteration with the Iterator pattern",
      "Creating objects with the Factory Method pattern",
      "Using design principles to guide your object-oriented design",
    ],
    archived: true,
  },
];

const managementCertificates: CertificateInterface[] = [
  {
    name: "Project Management Foundations",
    slug: "8ab210e2af6b2df598aa3e27db515103158cd049367cf6afd9949d874b7677eb",
    category: "Management",
    issuer: "NASBA",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/8ab210e2af6b2df598aa3e27db515103158cd049367cf6afd9949d874b7677eb",

    skills: [
      timeManagement,
      riskManagement,
      stakeholderManagement,
      communication,
      scopeManagement,
      costManagement,
      qualityManagement,
      procurementManagement,
      integrationManagement,
      humanResourceManagement,
    ],
    description: `This course offers a comprehensive understanding of project management fundamentals, applicable to both small and complex enterprise-wide initiatives. It covers key aspects from establishing project goals and building a project plan, to managing resources, meeting deadlines, and closing the project. The course also provides tips for effective communication, meeting management, and gaining customer acceptance. It includes exercises based on a healthcare/IT case study project and provides an overview of the changes introduced in the Project Management Institute's latest guide.`,
    learningOutcomes: [
      "Identifying the definition of project management.",
      "Exploring traditional and agile project management.",
      "Analyzing project stakeholders.",
      "Identifying project goal and objectives.",
      "Strategizing to gather requirements.",
      "Developing a project budget.",
      "Crafting a quality plan.",
      "Determining processes for procuring resources.",
      "Developing a project schedule.",
      "Monitoring and controlling progress and performance.",
    ],
    archived: true,
  },
  {
    name: "Project Management Foundations",
    slug: "23788be7119de6bc027865d8345bcd7e8c98563fc1a8a373351e05fa79e1b6ef",
    category: "Management",
    issuer: "PMI",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/23788be7119de6bc027865d8345bcd7e8c98563fc1a8a373351e05fa79e1b6ef",
    skills: [
      timeManagement,
      riskManagement,
      stakeholderManagement,
      communication,
      scopeManagement,
      costManagement,
      qualityManagement,
      procurementManagement,
      integrationManagement,
      humanResourceManagement,
    ],
    description: `This course offers a comprehensive understanding of project management fundamentals, applicable to both small and complex enterprise-wide initiatives. It covers key aspects from establishing project goals and building a project plan, to managing resources, meeting deadlines, and closing the project. The course also provides tips for effective communication, meeting management, and gaining customer acceptance. It includes exercises based on a healthcare/IT case study project and provides an overview of the changes introduced in the Project Management Institute's latest guide.`,
    learningOutcomes: [
      "Identifying the definition of project management.",
      "Exploring traditional and agile project management.",
      "Analyzing project stakeholders.",
      "Identifying project goal and objectives.",
      "Strategizing to gather requirements.",
      "Developing a project budget.",
      "Crafting a quality plan.",
      "Determining processes for procuring resources.",
      "Developing a project schedule.",
      "Monitoring and controlling progress and performance.",
    ],
    archived: true,
  },
];

const cloudComputingCertificates: CertificateInterface[] = [
  {
    name: "AWS Essential Training for Developers",
    slug: "29e1352bda64cbc78e2f3fbf7205d2761bd8c465925eba7c4cf699aab8cf72b4",
    category: "Cloud Computing",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/29e1352bda64cbc78e2f3fbf7205d2761bd8c465925eba7c4cf699aab8cf72b4",
    skills: [
      aws,
      awsEC2,
      awsS3,
      awsVPC,
      awsLambda,
      awsCloudFormation,
      awsCloudFront,
      noSql,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a comprehensive guide on how to optimally host your application within AWS, covering services like IaaS, DBaaS, PaaS, and SaaS through hands-on examples. It delves into DevOps and security within AWS, and prepares learners for the AWS Cloud Practitioner Certification (CLF-C02) exam. The course covers a wide range of topics, from creating an IAM user group and using the Cost Explorer, to exploring AWS offerings for mobile app development and maintaining cloud infrastructure scripts with CloudFormation. It also includes a look into AWS's artificial intelligence services and the AWS Well-Architected Framework.`,
    learningOutcomes: [
      "Creating an IAM user group, user, and access key.",
      "Using the Cost Explorer to analyze service usage.",
      "Creating an EC2 instance and understanding pricing models.",
      "Right-sizing with EC2 autoscaling and creating backups with AMI Snapshot.",
      "Editing security groups for secure service exposure.",
      "Subdividing a VPC into public and private subnets.",
      "Using a NAT gateway and assigning an Elastic IP to EC2 instance.",
      "Creating an Application Load Balancer.",
      "Installing and configuring the CLI for S3 bucket operations.",
      "Creating a CloudFront distribution.",
      "Comparing AWS database options and understanding NoSQL offerings.",
      "Understanding use cases of AWS-managed caching server.",
      "Exploring AWS services for large datasets and messaging.",
      "Exploring AWS-managed application servers and serverless Lambda functions.",
      "Learning about AWS services for batch-processing and user login management.",
      "Exploring AWS tools for mobile app development and automated workflows.",
      "Maintaining cloud infrastructure script with CloudFormation.",
      "Exploring AWS monitoring and logging tools.",
      "Browsing AWS artificial intelligence (AI) services.",
      "Using machine learning for problem spotting.",
      "Discovering AWS services for web traffic filtering and audit trailing.",
      "Learning AWS Well-Architected Framework for cloud infrastructure.",
    ],
  },
  {
    name: "Azure Essential Training for Developers",
    slug: "bf0cac80ff7e3f2b8148e20d6ea1fccb6eb15457a184229fee9ff439f652cfba",
    category: "Cloud Computing",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/bf0cac80ff7e3f2b8148e20d6ea1fccb6eb15457a184229fee9ff439f652cfba",
    skills: [
      azure,
      azureAppService,
      azureBlobStorage,
      azureDurableFunctions,
      azureMonitor,
      redis,
      azureFunctions,
      azureResourceManager,
      azureContainers,
      azureContainerRegistry,
      kubernetes,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a comprehensive introduction to Azure, focusing on the fundamentals necessary for developers to start building, deploying, and managing applications on this popular cloud platform. It offers a detailed overview of Azure's capabilities and services, from storage options to Kubernetes Service scaling strategies. The course is designed to equip learners with the knowledge needed for a deeper exploration of their topics of interest, making it a valuable resource for those new to Azure or those comparing it against other ecosystems.`,
    learningOutcomes: [
      "Understanding Azure subscriptions, resource groups, and regions.",
      "Exploring the capabilities of Azure App Service.",
      "Identifying when to use Azure Blob Storage.",
      "Using Durable Functions in Azure.",
      "Provisioning a virtual machine in Azure.",
      "Creating a managed Kubernetes cluster in Azure.",
      "Understanding authentication options in Azure.",
      "Using Azure Monitor to assess app health.",
      "Optimizing apps using Azure Redis.",
      "Creating an Azure function.",
      "Using Azure Resource Manager templates.",
      "Creating containers in Azure.",
      "Publishing container images to the Azure Container Registry.",
    ],
  },
  {
    name: "Google Cloud Platform (GCP) Essential Training for Developers",
    slug: "1bc3074a5e84539c7bc5fdeeee83438602cc303ba648ec90ef5fc018693e62a1",
    category: "Cloud Computing",
    issuer: "LinkedIn",
    certificateURL:
      "https://www.linkedin.com/learning/certificates/1bc3074a5e84539c7bc5fdeeee83438602cc303ba648ec90ef5fc018693e62a1",
    skills: [
      gcp,
      gcpAppEngine,
      gcpCloudSQL,
      gcpCloudStorage,
      gcpCloudTasks,
      gcpCloudScheduler,
      gcpCloudLogging,
      problemSolving,
      criticalThinking,
    ],

    description: `This course provides a comprehensive guide to designing, building, and maintaining applications in Google Cloud Platform (GCP). It covers best practices for deploying and configuring optimized settings in App Engine, setting up Cloud SQL application architecture, managing distributed queues in Cloud Tasks, and using GCP tools like Cloud Logging for application optimization. The course is designed to equip learners with the skills needed to leverage the multitude of cloud computing services provided by GCP, making it a valuable resource for developers in the cloud computing domain.`,
    learningOutcomes: [
      "Designing, building, and maintaining applications in GCP.",
      "Deploying and configuring optimized settings in App Engine.",
      "Setting up Cloud SQL application architecture and connecting to the database from App Engine.",
      "Saving and serving files through Google Cloud Storage with secure permissions and signed URLs.",
      "Running background tasks with Google Cloud Tasks and cron jobs with Google Cloud Scheduler.",
      "Logging, debugging, and optimizing apps with Google Operations tools.",
    ],
  },
];

const otherCertificates: CertificateInterface[] = [
  {
    name: "Symphony Certified Bot Developer (Java)",
    slug: "e398f5d1-7d46-4585-9ab2-effa2176920f",
    category: "Other",
    issuer: "Symphony Solutions",
    certificateURL:
      "https://www.credly.com/badges/e398f5d1-7d46-4585-9ab2-effa2176920f",
    skills: [
      java,
      springBoot,
      rest,
      symphony,
      automation,
      problemSolving,
      criticalThinking,
    ],

    description: `
      This certification is awarded to developers who have successfully completed the Symphony Certified Bot Developer (Java) training course.
      It covers the fundamentals of building a bot for the Symphony platform, including the use of the Symphony Java Client library, the Symphony REST API, and the Symphony Elements API.
      The course also covers the use of Spring Boot to create a simple bot application, and the use of the Symphony Elements API to create a bot with a user interface.
    `,
    learningOutcomes: [
      "Understanding the value proposition of bots and their types",
      "Learning the structure and architecture of BDK for Java",
      "Configuring and initializing a bot in BDK for Java",
      "Using REST API clients in BDK for Java",
      "Handling real-time events and form submissions in BDK for Java",
      "Creating and handling activities in BDK for Java",
      "Implementing message templating in BDK for Java",
      "Converting a BDK 2.0 project to Spring Boot and using BDK 2.0 with Spring Boot",
    ],
  },
  {
    name: "Symphony Certified Bot Developer (Python)",
    slug: "d87290c2-7db7-45c2-89e2-ebd2c41e8b85",
    category: "Other",
    issuer: "Symphony Solutions",
    certificateURL:
      "https://www.credly.com/badges/d87290c2-7db7-45c2-89e2-ebd2c41e8b85",
    skills: [
      python,
      poetry,
      jinja,
      rest,
      symphony,
      automation,
      problemSolving,
      criticalThinking,
    ],

    description: `
      This certification is awarded to developers who have successfully completed the Symphony Certified Bot Developer (Python) training course.
      It covers the fundamentals of building a bot for the Symphony platform, including the use of the Symphony Python Client library, the Symphony REST API, and the Symphony Elements API.
      The course also covers the use of Poetry to create a simple bot application, and the use of the Symphony Elements API to create a bot with a user interface.
    `,
    learningOutcomes: [
      "Understanding the value proposition and types of bots",
      "Learning the structure and architecture of BDK for Python",
      "Configuring and initializing a bot in BDK for Python",
      "Using REST API clients in BDK for Python",
      "Handling real-time events and form submissions in BDK for Python",
      "Creating and handling activities in BDK for Python",
      "Implementing message templating in BDK for Python",
      "Understanding high availability and Datafeed 2.0 in BDK for Python",
    ],
  },
];

export { cloudComputingCertificates };

const allCertificates = addNestedSkillsMaterialList<CertificateInterface>([
  ...programmingLanguagesCertificates,
  ...algorithmsAndDataStructuresCertificates,
  ...databasesCertificates,
  ...softwareEngineeringCertificates,
  ...webDevelopmentCertificates,
  ...machineLearningCertificates,
  ...devOpsCertificates,
  ...cloudComputingCertificates,
  ...mathematicsCertificates,
  ...managementCertificates,
  ...otherCertificates,
]);

export default allCertificates;
