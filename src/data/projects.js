import realestate from "../assets/realestate.png";
import adoptme from "../assets/adoptme.png";
import emergency from "../assets/PSEVA.png";
import cityinsights from "../assets/cityinsights.png"

const projects = [
   {
    id: 1,
    title: "CityEatsInsight - AI Food City Explorer",
    shortTitle: "CityEatsInsight",
    tech: ["React", "Google Gemini AI", "FastAPI", "Python", "TailwindCSS"],
    image: cityinsights,
    github: "https://github.com/Suryab02/CityEatsInsight",
    live: "https://city-eats-insight.vercel.app/",
    description: "Full-stack AI-powered web application that analyzes Reddit discussions to provide AI-generated insights about food culture, restaurants, and dining experiences in Indian cities. Built with React, FastAPI, and Google Gemini AI.",
    highlights: [
      "Real-time Reddit data scraping and analysis",
      "Google Gemini AI for intelligent insights",
      "NLP-based comment sentiment analysis",
      "Advanced caching with 6-hour expiry",
      "Geolocation-based city detection",
      "Autocomplete city suggestions",
      "Trending cities and search history",
      "Dark mode with responsive UI",
      "Serverless FastAPI backend on Vercel",
      "Automatic deployment on code push"
    ]
  },
  {
    id: 2,
    title: "Emergency Services Platform",
    shortTitle: "PranarakshaSeva",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Geolocation"],
    image: emergency,
    github: "https://github.com/Suryab02/PranarakshaSeva",
    live: "https://pranaraksha-seva-qc15.vercel.app/",
    description: "Real-time emergency coordination platform with geolocation tracking for ambulances and doctors, secured with JWT and optimized APIs.",
    highlights: [
      "Real-time GPS tracking for emergency responders",
      "JWT-based secure authentication",
      "Optimized REST APIs for fast response",
      "Responsive design for mobile users",
      "Won 1st place at TechMahindra Innovation Drive"
    ]
  },
  {
    id: 3,
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
    id: 4,
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