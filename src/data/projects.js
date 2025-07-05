import realestate from "../assets/realestate.png";
import adoptme from "../assets/adoptme.png";
//import emergency from "../assets/emergency.png"; // Replace with actual import if you have one

const projects = [
  {
    id: 1,
    title: "Emergency Services Platform",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: 'emergency',
    github: "https://github.com/Suryab02/PranarakshaSeva",
    live: "#",
    description:
      "Real-time emergency coordination platform with geolocation tracking for ambulances and doctors, secured with JWT and optimized APIs."
  },
  {
    id: 2,
    title: "Pet Adoption Portal",
    tech: ["React", "HTML", "CSS"],
    image: adoptme,
    github: "https://github.com/Suryab02/Pet-Adoption",
    live: "https://react-pet-adoption.netlify.app/",
    description:
      "Responsive React SPA that helps users browse, search, and adopt pets via a clean UI and REST-based filtering."
  },
  {
    id: 3,
    title: "Real Estate Explorer",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    image: realestate,
    github: "https://github.com/Suryab02/au-aspire-site",
    live: "https://au-aspire-site.vercel.app/",
    description:
      "Lead-gen website for real estate using Firebase backend, Firestore DB, and WhatsApp integration for conversions."
  }
];

export default projects;
