// Skills Data - Organized into categories
const skills = [
  // Languages
  {
    id: 1,
    name: "C#",
    icon: "🎯",
    category: "Languages",
    proficiency: "Advanced",
    description: "Enterprise backend development, .NET Core, LINQ"
  },
  {
    id: 2,
    name: "JavaScript",
    icon: "⚡",
    category: "Languages",
    proficiency: "Advanced",
    description: "ES6+, Async/Await, DOM Manipulation, Node.js"
  },
  {
    id: 3,
    name: "SQL",
    icon: "📊",
    category: "Languages",
    proficiency: "Advanced",
    description: "Query Optimization, Complex Joins, Procedural SQL"
  },
  {
    id: 4,
    name: "Python",
    icon: "🐍",
    category: "Languages",
    proficiency: "Intermediate",
    description: "Scripting, FastAPI, AI Integration (Basics)"
  },

  // Backend Development
  {
    id: 5,
    name: "ASP.NET Core",
    icon: "🧩",
    category: "Backend",
    proficiency: "Advanced",
    description: "Web API, Dependency Injection, Middleware, Microservices"
  },
  {
    id: 6,
    name: "ASP.NET MVC",
    icon: "🏗️",
    category: "Backend",
    proficiency: "Advanced",
    description: "Pattern-based development, Razor, Area management"
  },
  {
    id: 7,
    name: "Entity Framework",
    icon: "🏛️",
    category: "Backend",
    proficiency: "Advanced",
    description: "ORM, Code-First, Migrations, Performance Tuning"
  },
  {
    id: 8,
    name: "Microservices",
    icon: "☁️",
    category: "Backend",
    proficiency: "Intermediate",
    description: "Distributed systems, Event-driven architecture"
  },
  {
    id: 9,
    name: "Java Spring Boot",
    icon: "🌱",
    category: "Backend",
    proficiency: "Intermediate",
    description: "REST APIs, Spring Security, Dependency Injection"
  },

  // Frontend Development
  {
    id: 10,
    name: "Angular",
    icon: "🅰️",
    category: "Frontend",
    proficiency: "Intermediate",
    description: "TypeScript, RxJS, Components, Services"
  },
  {
    id: 11,
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Hooks, Redux Toolkit, Context API, Tailwind"
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: "💨",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Utility-first design, Responsive interfaces"
  },
  {
    id: 13,
    name: "HTML/CSS/jQuery",
    icon: "🌐",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Semantic UI, AJAX, DOM Manipulation"
  },

  // Databases
  {
    id: 14,
    name: "SQL Server",
    icon: "💾",
    category: "Database",
    proficiency: "Advanced",
    description: "Stored Procedures, Indexing, Query Tuning"
  },
  {
    id: 15,
    name: "Oracle",
    icon: "🏮",
    category: "Database",
    proficiency: "Intermediate",
    description: "Relational database management, PL/SQL"
  },
  {
    id: 16,
    name: "MySQL",
    icon: "🐬",
    category: "Database",
    proficiency: "Advanced",
    description: "Schema design, Query optimization"
  },
  {
    id: 17,
    name: "MongoDB",
    icon: "🍃",
    category: "Database",
    proficiency: "Intermediate",
    description: "NoSQL, Document-based storage, Aggregation"
  },

  // Cloud & DevOps
  {
    id: 18,
    name: "AWS",
    icon: "☁️",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "EC2, S3, RDS, Lambda, Basic Infrastructure"
  },
  {
    id: 19,
    name: "Docker",
    icon: "🐳",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "Containerization, Image management"
  },
  {
    id: 20,
    name: "CI/CD",
    icon: "🚀",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "Automated pipelines, GitHub Actions"
  },
  {
    id: 21,
    name: "Git",
    icon: "🔧",
    category: "Cloud & DevOps",
    proficiency: "Advanced",
    description: "Version control, Branching strategies"
  },

  // Tools
  {
    id: 22,
    name: "Postman/Bruno",
    icon: "📡",
    category: "Tools",
    proficiency: "Advanced",
    description: "API Testing, Automated documentation"
  },
  {
    id: 23,
    name: "SSIS/SSRS",
    icon: "📈",
    category: "Tools",
    proficiency: "Intermediate",
    description: "ETL Processes, Data reporting, Analytics"
  },
  {
    id: 24,
    name: "GenAI/Gemini",
    icon: "✨",
    category: "Tools",
    proficiency: "Intermediate",
    description: "Intelligent data extraction, AI integration"
  },
  {
    id: 25,
    name: "Jira/GitHub",
    icon: "📋",
    category: "Tools",
    proficiency: "Advanced",
    description: "Agile management, Issue tracking, Collaboration"
  }
];

export default skills;

