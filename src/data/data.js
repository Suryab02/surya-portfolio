export const personalInfo = {
  name: "Surya Prabhas Bandaru",
  firstName: "Surya Prabhas",
  lastName: "Bandaru",
  title: "Full-Stack Software Engineer",
  email: "bsprabhas2002@gmail.com",
  phone: "+91 8317647595",
  github: "https://github.com/Suryab02",
  linkedin: "https://linkedin.com/in/suryaprabhas",
  tagline:
    "Building enterprise-grade backend services, RESTful APIs, and AI-powered workflows.",
  summary: [
    "Full-Stack Software Engineer with 2+ years of full-time experience building enterprise-grade backend services, RESTful APIs, and AI-powered workflows using C#, ASP.NET Core, Angular, and Microsoft SQL Server.",
    "Proven track record delivering scalable features for multi-tenant SaaS platforms serving thousands of enterprise users, with hands-on experience in JWT/RBAC security, SQL performance tuning, and GenAI integrations.",
    "Experienced in Agile/Scrum delivery, code reviews, technical design documentation, and direct collaboration with US-based partner teams.",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["C#", "JavaScript", "Java", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "Microservices",
      "REST & SOAP",
    ],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "TypeScript", "RxJS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MySQL", "Stored Procedures", "Query Optimization"],
  },
  {
    category: "Testing",
    items: ["TDD", "xUnit", "Selenium", "Playwright", "JWT/RBAC"],
  },
  {
    category: "AI",
    items: ["Claude", "Amazon Q", "Kiro", "Gemini AI"],
  },
  {
    category: "Tools",
    items: ["Git", "AWS", "CI/CD", "Jira", "Postman"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Infor India Pvt. Ltd.",
    location: "Hyderabad",
    project: "Infor Optiva",
    period: "Mar 2024 – Present",
    highlights: [
      "Developed enterprise backend services using C#, ASP.NET Core Web API, and Entity Framework Core for a multi-tenant SaaS ERP platform.",
      "Designed RESTful APIs with pagination, filtering, and schema validation; implemented JWT authentication and RBAC across backend modules.",
      "Optimized SQL Server queries using execution plan analysis and indexing — improving performance by 40% across critical reporting modules.",
      "Engineered a bulk data upload pipeline processing 10,000+ records with row-level validation and failure recovery.",
      "Built an enterprise GenAI prompt management service with context injection and live prompt testing via AWS Bedrock.",
      "Migrated a legacy ASP.NET QA regression tool to Angular, cutting setup time by 50% for the QA team.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tech Mahindra",
    location: "Hyderabad",
    period: "Sept 2023 – Feb 2024",
    highlights: [
      "Built and maintained Java Spring Boot RESTful APIs for notification and booking modules serving production users.",
      "Wrote unit tests and resolved production bugs across Agile sprint cycles with adherence to secure coding practices.",
    ],
  },
  {
    role: "Java Full Stack Trainee",
    company: "Tech Mahindra",
    location: "College-Integrated Training",
    period: "Jan 2023 – Jun 2023",
    highlights: [
      "Completed full-stack Java training; built RESTful APIs using Java + Spring Boot with MySQL.",
      "Performed API testing in Postman and worked in Agile/Scrum using Git and Jira.",
    ],
  },
];

export const projects = [
  {
    name: "HuntDesk",
    subtitle: "AI-Powered Job Tracker",
    description:
      "End-to-end job application tracker with a Gemini AI pipeline that auto-extracts resume skills and scores job-fit — reducing manual screening effort by 70%.",
    achievement: "Won internal hackathon: Best Gemini AI Productivity Tool",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini AI"],
    link: "https://huntdesk.vercel.app",
  },
  {
    name: "CityEatsInsight",
    subtitle: "Food Sentiment Intelligence",
    description:
      "Automated NLP sentiment pipeline that aggregates restaurant trends from Reddit using Gemini AI — zero manual labeling. Reduced API calls by 60% via caching and request batching.",
    tech: ["React", "FastAPI", "Gemini AI", "Reddit API"],
    link: "https://city-eats-insight.vercel.app",
  },
  {
    name: "PranarakshaSeva",
    subtitle: "Real-Time Emergency Response",
    description:
      "GPS-based real-time emergency response platform with live location tracking. Research published in Novyi Mir Journal (2023).",
    achievement: "1st Place, Tech Mahindra Internal Innovation Competition",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: null,
  },
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering",
  school: "Presidency University, Bengaluru",
  period: "Aug 2019 – Jun 2023",
  gpa: "8.5 / 10",
};
