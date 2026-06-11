export const personalInfo = {
  name: "Surya Prabhas Bandaru",
  firstName: "Surya Prabhas",
  lastName: "Bandaru",
  title: "Full-Stack Software Engineer",
  location: "Hyderabad, India",
  availability: "Open to full-time roles · Hyderabad / Remote",
  resumeUrl: "https://drive.google.com/file/d/11wRlGo4BsnVxS5PnlT0VtZRN2Np3rv7_/view?usp=drivesdk",
  email: "bsprabhas2002@gmail.com",
  phone: "+91 8317647595",
  github: "https://github.com/Suryab02",
  linkedin: "https://www.linkedin.com/in/bsuryaprabhas/",
  tagline:
    "Engineering scalable backend services, robust APIs, and intelligent AI-driven workflows.",
  summary: [
    "I am a Full-Stack Software Engineer with over 2 years of experience architecting and delivering enterprise-grade backend services, RESTful APIs, and AI-integrated workflows. My technical foundation spans C#, ASP.NET Core, Angular, and Microsoft SQL Server.",
    "My focus is on driving measurable impact. I have a proven track record of shipping highly scalable features for multi-tenant SaaS platforms that serve thousands of enterprise users. My deep expertise spans JWT/RBAC security architectures, advanced SQL performance tuning, and integrating cutting-edge Generative AI pipelines.",
    "Thriving in fast-paced Agile environments, I collaborate closely with global partner teams to ensure rigorous code quality, comprehensive technical design, and seamless CI/CD deployments.",
  ],
};

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["C#", "JavaScript", "Java", "SQL"],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework",
      "Microservices",
      "REST/SOAP",
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["Angular", "React", "TypeScript", "RxJS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["SQL Server", "MySQL", "Stored Procedures", "Query Optimization"],
  },
  {
    category: "Testing",
    icon: "shield-check",
    items: ["TDD", "xUnit", "Selenium", "Playwright", "JWT/RBAC"],
  },
  {
    category: "AI & Data",
    icon: "sparkles",
    items: ["Claude", "Amazon Q", "Gemini AI", "Prompt Engineering"],
  },
  {
    category: "DevOps",
    icon: "terminal",
    items: ["Git", "AWS", "CI/CD", "Docker", "Postman"],
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
      "Engineered enterprise backend services utilizing C#, ASP.NET Core Web API, and Entity Framework Core for a high-traffic, multi-tenant SaaS ERP platform.",
      "Architected secure, paginated RESTful APIs with strict schema validation, robust JWT authentication, and comprehensive Role-Based Access Control (RBAC).",
      "Accelerated critical reporting modules by 40% through deep SQL Server execution plan analysis, strategic indexing, and stored procedure optimization.",
      "Designed a resilient bulk data ingestion pipeline capable of processing 10,000+ records simultaneously, featuring strict row-level validation and automated failure recovery.",
      "Pioneered an enterprise GenAI prompt management service, leveraging AWS Bedrock for context injection and dynamic intelligence extraction.",
      "Modernized a legacy ASP.NET QA regression tool by migrating it to Angular, significantly improving UX and reducing setup time by 50%.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tech Mahindra",
    location: "Hyderabad",
    period: "Sept 2023 – Feb 2024",
    highlights: [
      "Developed and maintained mission-critical Java Spring Boot RESTful APIs for high-volume notification and booking modules.",
      "Ensured platform stability by rapidly resolving production defects and implementing rigorous unit tests within tight Agile sprint cycles.",
    ],
  },
  {
    role: "Java Full Stack Trainee",
    company: "Tech Mahindra",
    location: "Bengaluru",
    period: "Jan 2023 – Jun 2023",
    highlights: [
      "Built and deployed end-to-end RESTful architectures utilizing Java, Spring Boot, and MySQL during an intensive college-integrated program.",
      "Executed comprehensive API lifecycle management via Postman, adhering strictly to Agile/Scrum methodologies using Git and Jira.",
    ],
  },
];

export const projects = [
  {
    name: "HuntDesk",
    subtitle: "AI-Powered Job Tracker",
    description:
      "An end-to-end job application tracker featuring a custom Gemini AI pipeline. The system automatically extracts resume skills and computes job-fit scores, drastically reducing manual screening effort by 70%.",
    achievement: "Winner: Best Gemini AI Productivity Tool (Internal Hackathon)",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini AI"],
    link: "https://huntdesk.vercel.app",
  },
  {
    name: "CityEatsInsight",
    subtitle: "Food Sentiment Intelligence",
    description:
      "A fully automated NLP sentiment pipeline that aggregates and analyzes restaurant trends from Reddit. By leveraging Gemini AI and intelligent request caching, it achieved zero manual labeling while reducing API overhead by 60%.",
    tech: ["React", "FastAPI", "Gemini AI", "Reddit API"],
    link: "https://city-eats-insight.vercel.app",
  },
  {
    name: "PranarakshaSeva",
    subtitle: "Real-Time Emergency Response",
    description:
      "A GPS-based emergency response platform featuring live location tracking and real-time dispatch capabilities. This research was successfully published in the Novyi Mir Journal (2023).",
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
