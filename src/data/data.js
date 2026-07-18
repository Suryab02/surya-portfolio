export const personalInfo = {
  name: "Surya Prabhas Bandaru",
  firstName: "Surya Prabhas",
  lastName: "Bandaru",
  title: "Backend-Focused Full-Stack Engineer",
  location: "Hyderabad, India",
  availability: "Open to full-time roles · Hyderabad / Remote",
  resumeUrl: "/resume.pdf",
  email: "bsprabhas2002@gmail.com",
  phone: "+91 8317647595",
  github: "https://github.com/Suryab02",
  linkedin: "https://www.linkedin.com/in/bsuryaprabhas/",
  tagline:
    "Building dependable backend systems, data-heavy workflows, and practical LLM integrations.",
  summary: [
    "I'm a full-stack engineer with 2+ years of experience, currently at Infor, where I build backend microservices and APIs for a multi-tenant SaaS ERP platform used by thousands of enterprise users.",
    "My day-to-day is C#, ASP.NET Core, Angular, and SQL Server, with additional work in prompt design, LLM integration, and structured extraction from PDF, Excel, and XML. I use Amazon Q and Kiro as development tools, not as substitutes for engineering judgment.",
    "I care about measurable results — faster queries, fewer errors, less manual work — and I like writing about how systems actually work.",
  ],
};

export const home = {
  heroComment: "// systems-minded software engineer",
  heroTagline:
    "I build dependable backend services, data-processing pipelines, LLM-backed extraction workflows, and the interfaces around them.",
  about:
    "I'm a software engineer in Hyderabad who gravitates toward the machinery behind the screen: APIs, data flows, failure modes, and the small decisions that make systems dependable. I enjoy taking ambiguous operations, finding the real constraint, and building a path people can trust.",
  now: [
    { label: "building", value: "enterprise services + document extraction" },
    { label: "exploring", value: "distributed systems and local LLM tooling" },
    { label: "off-screen", value: "teardowns, long reads, hardware" },
  ],
  stats: [
    { value: "2+ yrs", label: "in production" },
    { value: "10k+", label: "records per pipeline run" },
    { value: "40%", label: "faster reporting" },
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["C#", "SQL", "JavaScript", "Python"],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    items: [
      "ASP.NET Core",
      "Web API",
      "Entity Framework",
      "ADO.NET",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    category: "Frontend Foundations",
    icon: "layout",
    items: ["Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Data & Databases",
    icon: "database",
    items: ["SQL Server", "Oracle", "MySQL", "ETL", "Query Optimization"],
  },
  {
    category: "AI Engineering Capabilities",
    icon: "sparkles",
    items: [
      "Prompt Engineering",
      "LLM Integration",
      "Document Extraction",
      "Structured Output Pipelines",
    ],
  },
  {
    category: "Cloud & Delivery",
    icon: "terminal",
    items: ["AWS", "Docker", "CI/CD", "Git"],
  },
  {
    category: "Engineering Tools",
    icon: "shield-check",
    items: ["Postman", "GitHub", "Jira", "Amazon Q", "Kiro"],
  },
  {
    category: "Security & Reliability Practices",
    icon: "shield-check",
    items: ["JWT/RBAC", "Schema Validation", "Production Debugging", "Failure Recovery"],
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
      "Built LLM-backed document-processing pipelines for structured extraction from PDF, Excel, and XML inputs.",
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
    slug: "huntdesk",
    name: "Loomo (formerly HuntDesk)",
    subtitle: "AI-Assisted Job Tracker",
    year: "2024",
    blurb:
      "A job-search workspace for tracking applications, matching roles, and acting on follow-ups.",
    accent: { label: "hackathon winner", href: "https://huntdesk.vercel.app" },
    description:
      "The current evolution of HuntDesk: a full-stack job tracker with resume and job parsing, match scoring, application workflows, generated follow-ups, analytics, and a browser extension.",
    achievement: "Winner: Best Gemini AI Productivity Tool (Internal Hackathon)",
    metrics: ["Browser extension + app workflow", "Public full-stack implementation"],
    tech: ["React + TypeScript", "FastAPI", "PostgreSQL", "Gemini API"],
    link: "https://huntdesk.vercel.app",
    repo: "https://github.com/Suryab02/Loomo",
    caseStudy: {
      type: "Independent full-stack build",
      ownership: "Designed and built the application workflow, React/TypeScript client, FastAPI/JWT backend, PostgreSQL persistence, Gemini integration, and browser extension.",
      constraint: "Resume and job descriptions are unstructured, while the product still needs a predictable score users can understand.",
      reflection: "The next step would be a labeled evaluation set, confidence reporting, and clearer explanations for why each skill affected the score.",
      evidenceNote: "The public repository uses the product's current name, Loomo. The hackathon recognition is recorded in the project history, but no public award artifact is currently linked.",
      artifacts: [
        { type: "Live", label: "Working product", href: "https://huntdesk.vercel.app", note: "Inspect the application flow from job tracking to résumé-assisted matching." },
        { type: "Source", label: "Loomo repository", href: "https://github.com/Suryab02/Loomo", note: "Review the current React/TypeScript, FastAPI, PostgreSQL, AI, and browser-extension implementation." },
      ],
      eyebrow: "From document to decision",
      challenge:
        "Job tracking tools record applications, but they rarely help decide which role deserves attention. The useful problem was not storage—it was turning an unstructured résumé and a job description into an explainable signal.",
      system:
        "A React client sends résumé and job data to a FastAPI service. The Gemini API handles skill extraction, application logic computes the fit score, and PostgreSQL stores the result behind JWT-authenticated user accounts.",
      decisions: [
        "Use AI for the unstructured extraction step, then turn the result into a clear product signal.",
        "Show the score as decision support, not an unexplained verdict.",
        "Keep application tracking useful on its own instead of making every workflow depend on analysis.",
        "Add a browser extension so jobs can enter the workflow from supported job pages.",
      ],
      flow: ["Résumé + job", "Validated API", "Skill extraction", "Fit scoring", "Saved insight"],
      outcome:
        "The original HuntDesk concept won Best Gemini AI Productivity Tool in an internal hackathon and has since evolved into the broader Loomo workflow available in the public repository.",
    },
  },
  {
    slug: "city-eats-insight",
    name: "CityEatsInsight",
    subtitle: "Food Trend Analysis",
    year: "2024",
    blurb:
      "Finds restaurant and cuisine patterns in recent city-specific Reddit discussions.",
    accent: { label: "live demo", href: "https://city-eats-insight.vercel.app" },
    description:
      "A Reddit analysis pipeline that collects food discussions and uses the Gemini API to structure recurring restaurant and cuisine trends, with a deterministic NLP fallback.",
    metrics: ["Top 5 posts analyzed per request", "Gemini + NLP fallback"],
    tech: ["React", "FastAPI", "Gemini API", "Reddit API"],
    link: "https://city-eats-insight.vercel.app",
    repo: "https://github.com/Suryab02/CityEatsInsight",
    caseStudy: {
      type: "Independent full-stack build",
      ownership: "Built the Reddit collection and analysis workflow, Gemini extraction path, deterministic fallback, cache-write helper, and React presentation layer.",
      constraint: "External API and model calls are expensive and noisy, so repeated analysis cannot happen on every interface action.",
      reflection: "I would wire cache reads into the main execution path, then add dataset versioning, source-level traceability, and request-count benchmarks.",
      evidenceNote: "The repository contains a six-hour cache helper and writes results, but the current main execution path does not load cached data. No API-reduction benchmark is claimed.",
      artifacts: [
        { type: "Live", label: "Working product", href: "https://city-eats-insight.vercel.app", note: "Inspect the city-level trend exploration experience." },
        { type: "Source", label: "Public repository", href: "https://github.com/Suryab02/CityEatsInsight", note: "Review the Reddit collection, cache-write helper, Gemini analysis, fallback path, and React implementation." },
      ],
      eyebrow: "Turning conversation into a signal",
      challenge:
        "Reddit contains useful local food intelligence, but it is noisy and repetitive. The product needed to surface patterns without presenting generated guesses as facts.",
      system:
        "The pipeline collects relevant Reddit discussions, analyzes up to five top posts with the Gemini API, falls back to a simpler NLP path when needed, and presents the results in a city-level view.",
      decisions: [
        "Limit model analysis to the top five retrieved posts to control request volume.",
        "Fall back to deterministic extraction when Gemini fails or reaches quota.",
        "Present generated trends as patterns in conversation, not objective rankings.",
      ],
      flow: ["Reddit data", "Top-post selection", "Gemini analysis", "NLP fallback", "City view"],
      outcome:
        "The project demonstrates an end-to-end path from Reddit discussions to a browsable view of recurring food trends, with graceful fallback when model analysis is unavailable.",
    },
  },
  {
    slug: "pranaraksha-seva",
    name: "PranarakshaSeva",
    subtitle: "Emergency Services Coordination",
    year: "2023",
    blurb: "Location-aware access to blood banks, doctors, ambulances, and emergency requests.",
    accent: { label: "published research", href: null },
    description:
      "A React and FastAPI healthcare-services platform backed by MongoDB, with location-aware search, emergency requests, role-based administration, and invite-only operator onboarding.",
    achievement: "1st Place: Tech Mahindra Internal Innovation Competition",
    metrics: ["Protected admin workflows", "Public source + screenshots"],
    tech: ["React", "FastAPI", "MongoDB", "Leaflet"],
    link: null,
    repo: "https://github.com/Suryab02/PranarakshaSeva",
    caseStudy: {
      type: "Team innovation project",
      ownership: "Contributed to the emergency-response concept and built full-stack workflows for service discovery, requests, location-aware views, and role-based administration.",
      constraint: "Guests need fast access to service information, while blood-bank inventory and administrative actions must remain protected and attributable.",
      reflection: "A production version would need stronger audit trails, verified provider data, operational monitoring, and field testing with participating healthcare teams.",
      evidenceNote: "The award and publication are internal/project-record claims; a public verification artifact is not currently linked on this site.",
      artifacts: [
        { type: "Source", label: "Public repository", href: "https://github.com/Suryab02/PranarakshaSeva", note: "Review the React, FastAPI, MongoDB, mapping, authentication, and operator-onboarding implementation." },
        { type: "Status", label: "Award and paper not public", href: null, note: "The competition result and research paper are recorded in the project history, but no public verification URL is currently available." },
      ],
      eyebrow: "Distance matters when time does",
      challenge:
        "Healthcare-service discovery breaks down when blood availability, doctor verification, ambulance access, and requests live in separate channels. The system needed one operational path for guests and administrators.",
      system:
        "A React client works with a FastAPI backend and MongoDB persistence through Motor/PyMongo. It exposes service search and request APIs, map-based results, admin authentication, and invite-only blood-bank onboarding.",
      decisions: [
        "Keep guest access to essential service searches separate from protected admin operations.",
        "Use map-based results to make proximity and service locations understandable.",
        "Make blood-bank administration invite-only instead of allowing open registration.",
      ],
      flow: ["Guest request", "Service lookup", "Location-aware results", "Admin action", "Stored update"],
      outcome:
        "The concept won first place in Tech Mahindra's internal innovation competition, and its distributed architecture was developed into published research.",
    },
  },
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering",
  school: "Presidency University",
  period: "Aug 2019 – Jun 2023",
  gpa: "8.5 / 10",
};

export const achievements = [
  "1st Place – Tech Mahindra Internal Innovation Competition for PranarakshaSeva, a location-aware emergency healthcare-services platform.",
  "Published research paper on distributed system architecture and real-time data handling in Novyi Mir Research Journal (2023).",
];
