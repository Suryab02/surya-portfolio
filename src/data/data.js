export const personalInfo = {
  name: "Surya Prabhas Bandaru",
  firstName: "Surya Prabhas",
  lastName: "Bandaru",
  title: "Full-Stack Software Engineer",
  location: "Hyderabad, India",
  availability: "Open to full-time roles · Hyderabad / Remote",
  resumeUrl: "/resume.pdf",
  email: "bsprabhas2002@gmail.com",
  phone: "+91 8317647595",
  github: "https://github.com/Suryab02",
  linkedin: "https://www.linkedin.com/in/bsuryaprabhas/",
  tagline:
    "Building backend services, APIs, and AI-driven workflows for enterprise software.",
  summary: [
    "I'm a full-stack engineer with 2+ years of experience, currently at Infor, where I build backend microservices and APIs for a multi-tenant SaaS ERP platform used by thousands of enterprise users.",
    "My day-to-day is C#, ASP.NET Core, Angular, and SQL Server — with a growing focus on GenAI workflows: document-processing pipelines, prompt-based extraction, and AI-assisted development with Amazon Q and Kiro.",
    "I care about measurable results — faster queries, fewer errors, less manual work — and I like writing about how systems actually work.",
  ],
};

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["C#", "SQL", "JavaScript", "Python"],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["Angular", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["SQL Server", "Oracle", "MySQL", "Query Optimization"],
  },
  {
    category: "AI & GenAI",
    icon: "sparkles",
    items: [
      "Amazon Q",
      "Kiro",
      "Prompt Engineering",
      "LLM Integration",
      "GenAI Workflows",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "terminal",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Tools & Practices",
    icon: "shield-check",
    items: ["Postman", "Jira", "ETL", "JWT/RBAC", "TDD"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Infor",
    location: "Hyderabad",
    project: "Infor Optiva",
    period: "Mar 2024 – Present",
    highlights: [
      "Built 10+ backend microservices in C# and .NET Core for a multi-tenant SaaS platform serving thousands of concurrent users.",
      "Designed RESTful APIs with pagination, filtering, and schema validation — cutting invalid request errors by ~30%.",
      "Built a bulk data ingestion pipeline that processes 10,000+ records per run from Excel/XML with row-level validation and failure recovery, reducing manual data entry by ~65%.",
      "Created GenAI document-processing workflows for PDF, Excel, and XML extraction using prompt-based pipelines.",
      "Made critical reporting modules 40% faster through SQL and Oracle execution-plan analysis, indexing, and query restructuring.",
      "Implemented JWT authentication and role-based access control across backend services.",
      "Resolved 20+ critical production incidents across backend services, login flows, and data inconsistencies.",
      "Migrated a legacy ASPX QA regression tool to Angular, halving setup time for 15+ engineers.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tech Mahindra",
    location: "Hyderabad",
    period: "Sept 2023 – Feb 2024",
    highlights: [
      "Developed and maintained Java Spring Boot APIs for notification and booking modules serving production users.",
      "Resolved production bugs and performance bottlenecks across Agile sprint cycles, with unit testing and code reviews.",
    ],
  },
  {
    role: "Software Engineering Apprentice",
    company: "Tech Mahindra",
    location: "Hyderabad",
    period: "Feb 2023 – Aug 2023",
    highlights: [
      "Built and tested RESTful APIs with Java, Spring Boot, and MySQL in enterprise-scale training projects.",
      "Learned microservices architecture and backend best practices through mentored work with senior engineers.",
    ],
  },
];

export const projects = [
  {
    name: "HuntDesk",
    subtitle: "AI-Powered Job Tracker",
    description:
      "A full-stack job application tracker with a Gemini AI pipeline that extracts resume skills and computes job-fit scores — cutting manual screening effort by ~70%. FastAPI backend with JWT auth and PostgreSQL.",
    achievement: "Winner: Best Gemini AI Productivity Tool (Internal Hackathon)",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini AI"],
    link: "https://huntdesk.vercel.app",
    repo: "https://github.com/Suryab02/huntdesk",
  },
  {
    name: "CityEatsInsight",
    subtitle: "Food Trend Analysis",
    description:
      "An automated NLP pipeline that finds restaurant and food trends in Reddit data using Gemini AI. Caching and request batching cut external API calls by 60%.",
    tech: ["React", "FastAPI", "Gemini AI", "Reddit API"],
    link: "https://city-eats-insight.vercel.app",
    repo: "https://github.com/Suryab02/CityEatsInsight",
  },
  {
    name: "PranarakshaSeva",
    subtitle: "Real-Time Emergency Response",
    description:
      "A GPS-based emergency response platform with live location tracking and real-time dispatch. The architecture was published in the Novyi Mir Research Journal (2023).",
    achievement: "1st Place: Tech Mahindra Internal Innovation Competition",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: null,
  },
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering",
  school: "Presidency University",
  period: "Aug 2019 – Jun 2023",
  gpa: "8.5 / 10",
};

export const achievements = [
  "1st Place – Tech Mahindra Internal Innovation Competition for PranarakshaSeva, a GPS-based real-time emergency response platform.",
  "Published research paper on distributed system architecture and real-time data handling in Novyi Mir Research Journal (2023).",
];
