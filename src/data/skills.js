// Skills Data - Organized into 5 Main Categories

const skills = [
  // Frontend Development
  {
    id: 1,
    name: "HTML5",
    icon: "🌐",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Semantic markup, accessibility, SEO optimization"
  },
  {
    id: 2,
    name: "CSS3",
    icon: "🎨",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Flexbox, Grid, Animations, Responsive Design"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "⚡",
    category: "Frontend",
    proficiency: "Advanced",
    description: "ES6+, Async/Await, DOM Manipulation, Event Handling"
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "📘",
    category: "Frontend",
    proficiency: "Intermediate",
    description: "Type Safety, Interfaces, Generics, OOP Concepts"
  },
  {
    id: 5,
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Hooks, Context API, State Management, Component Design"
  },
  {
    id: 6,
    name: "Angular",
    icon: "🅰️",
    category: "Frontend",
    proficiency: "Intermediate",
    description: "TypeScript, RxJS, Dependency Injection, Services"
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: "💨",
    category: "Frontend",
    proficiency: "Advanced",
    description: "Utility-first CSS, Custom Configuration, Responsive Design"
  },
  {
    id: 8,
    name: "Bootstrap",
    icon: "📦",
    category: "Frontend",
    proficiency: "Intermediate",
    description: "Grid System, Components, Responsive Framework"
  },

  // Backend Development
  {
    id: 9,
    name: "Node.js",
    icon: "🌲",
    category: "Backend",
    proficiency: "Advanced",
    description: "Express.js, Server Architecture, Middleware, REST APIs"
  },
  {
    id: 10,
    name: ".NET Core",
    icon: "🧩",
    category: "Backend",
    proficiency: "Advanced",
    description: "C#, ASP.NET, Entity Framework, MVC Architecture"
  },
  {
    id: 11,
    name: "Spring Boot",
    icon: "🌱",
    category: "Backend",
    proficiency: "Intermediate",
    description: "Java, REST APIs, Dependency Injection, Security"
  },
  {
    id: 12,
    name: "FastAPI",
    icon: "⚙️",
    category: "Backend",
    proficiency: "Intermediate",
    description: "Python, Async APIs, Type Validation, Auto Documentation"
  },
  {
    id: 13,
    name: "Python",
    icon: "🐍",
    category: "Backend",
    proficiency: "Intermediate",
    description: "Data Processing, Scripting, API Development"
  },
  {
    id: 14,
    name: "Express.js",
    icon: "📱",
    category: "Backend",
    proficiency: "Advanced",
    description: "Middleware, Routing, Error Handling, Authentication"
  },
  {
    id: 15,
    name: "JSP",
    icon: "📝",
    category: "Backend",
    proficiency: "Intermediate",
    description: "Java Server Pages, Dynamic Web Content, MVC"
  },

  // Database
  {
    id: 16,
    name: "MongoDB",
    icon: "🍃",
    category: "Database",
    proficiency: "Advanced",
    description: "NoSQL, CRUD Operations, Aggregation, Indexing"
  },
  {
    id: 17,
    name: "MySQL",
    icon: "🐬",
    category: "Database",
    proficiency: "Advanced",
    description: "SQL, Query Optimization, Normalization, Joins"
  },
  {
    id: 18,
    name: "Firebase",
    icon: "🔥",
    category: "Database",
    proficiency: "Intermediate",
    description: "Firestore, Real-time Database, Authentication, Hosting"
  },

  // Cloud & DevOps
  {
    id: 19,
    name: "AWS",
    icon: "☁️",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "EC2, S3, Lambda, RDS, CloudFormation, IAM"
  },
  {
    id: 21,
    name: "Docker",
    icon: "🐳",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "Containerization, Docker Compose, Image Management"
  },
  {
    id: 22,
    name: "Vercel",
    icon: "⬜",
    category: "Cloud & DevOps",
    proficiency: "Advanced",
    description: "Deployment, CI/CD, Edge Functions, Environment Variables"
  },
  {
    id: 23,
    name: "Git",
    icon: "🔧",
    category: "Cloud & DevOps",
    proficiency: "Advanced",
    description: "Version Control, Branching, Merging, GitHub/GitLab"
  },

  // Tools & Libraries
  {
    id: 24,
    name: "Hibernate",
    icon: "🏛️",
    category: "Tools & Libraries",
    proficiency: "Intermediate",
    description: "ORM, Mapping, Query Language, Lazy Loading"
  },
  {
    id: 25,
    name: "Axios",
    icon: "📡",
    category: "Tools & Libraries",
    proficiency: "Advanced",
    description: "HTTP Client, Interceptors, Error Handling, Promises"
  },
  {
    id: 26,
    name: "Framer Motion",
    icon: "✨",
    category: "Tools & Libraries",
    proficiency: "Intermediate",
    description: "Animations, Gestures, Transitions, Interactive UI"
  },
];

export default skills;
