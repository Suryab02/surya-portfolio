import realestate from "../assets/realestate.png";
import adoptme from "../assets/adoptme.png";
import emergency from "../assets/PSEVA.png";
import cityinsights from "../assets/cityinsights.png";
import huntdesk from "../assets/huntdesk.png";

const projects = [
  {
    id: 1,
    title: "HuntDesk - AI Job Application Tracker",
    shortTitle: "HuntDesk",
    tech: ["React", "FastAPI", "PostgreSQL", "Google Gemini AI", "JWT"],
    image: huntdesk,
    github: "https://github.com/Suryab02/huntdesk",
    live: "https://huntdesk.vercel.app/",
    description: "Architected a full-stack SaaS platform for job application tracking with AI-based resume parsing and intelligent job matching. Features a resume processing pipeline that extracts skills and experience using Gemini AI to provide match scoring.",
    highlights: [
      "AI resume parsing & intelligent job-match scoring",
      "FastAPI backend with optimized PostgreSQL queries",
      "JWT-based security and role-based data isolation",
      "Real-time analytics for response rates & skill gaps",
      "Sub-100ms API response times through caching",
      "Deployed on Railway & Vercel for scalable hosting"
    ]
  },
  {
    id: 2,
    title: "CityEatsInsight - Food Trend Analysis",
    shortTitle: "CityEatsInsight",
    tech: ["React", "FastAPI", "Reddit API", "Google Gemini AI", "NLP"],
    image: cityinsights,
    github: "https://github.com/Suryab02/CityEatsInsight",
    live: "https://city-eats-insight.vercel.app/",
    description: "Engineered a data aggregation and sentiment analysis platform to extract restaurant trends from social media. Built a robust NLP pipeline for text preprocessing and sentiment analysis on large volumes of Reddit data.",
    highlights: [
      "Social media data extraction using Reddit API",
      "NLP pipeline for sentiment & trend aggregation",
      "Gemini AI integration for intelligent city insights",
      "Reduced API calls by 60% via intelligent caching",
      "Optimized backend performance through batching",
      "FastAPI backend with background task processing"
    ]
  },
  {
    id: 3,
    title: "PranarakshaSeva - Emergency Platform",
    shortTitle: "PranarakshaSeva",
    tech: ["React", "Node.js", "Express", "MongoDB", "Geolocation"],
    image: emergency,
    github: "https://github.com/Suryab02/PranarakshaSeva",
    live: "https://pranaraksha-seva-qc15.vercel.app/",
    description: "Developed a real-time emergency response platform for coordination between hospitals, ambulances, and doctors. Automated responder tracking and optimized database schemas for zero-latency data access.",
    highlights: [
      "Won 1st Place in Tech Mahindra Innovation Comp",
      "Research paper published in Novyi Mir Journal",
      "Real-time GPS location tracking for responders",
      "JWT-based secure authentication & API access",
      "Designed scalable NoSQL schema for live data"
    ]
  },
  {
    id: 4,
    title: "Pet Adoption Portal",
    shortTitle: "AdoptMe",
    tech: ["React", "Tailwind CSS", "REST APIs", "Responsive Design"],
    image: adoptme,
    github: "https://github.com/Suryab02/Pet-Adoption",
    live: "https://react-pet-adoption.netlify.app/",
    description: "Responsive React SPA that helps users browse, search, and adopt pets via a clean UI and REST-based filtering.",
    highlights: [
      "Advanced search and filtering system",
      "Dynamic pet profile cards",
      "Smooth animations and transitions",
      "Mobile-first responsive design",
      "RESTful API integration"
    ]
  },
  {
    id: 5,
    title: "Real Estate Explorer",
    shortTitle: "AU Aspire",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firestore", "WhatsApp API"],
    image: realestate,
    github: "https://github.com/Suryab02/au-aspire-site",
    live: "https://au-aspire-site.vercel.app/",
    description: "Lead-generation website for real estate using Firebase backend, Firestore DB, and WhatsApp integration for customer conversions.",
    highlights: [
      "Firebase authentication and database",
      "WhatsApp business integration",
      "Lead capture and management",
      "SEO optimized pages",
      "Interactive property showcase"
    ]
  }
];

export default projects;