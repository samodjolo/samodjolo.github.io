import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Contact {
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

interface PortfolioState {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  contact: Contact;
}

const initialState: PortfolioState = {
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Spring Boot, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/api/placeholder/400/300",
      tech: ["React", "Java Spring", "MongoDB", "Spring Boot", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "Request Demo",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      tech: ["Next.js", "TypeScript", "Java Spring", "PostgreSQL", "Tailwind"],
      github: "https://github.com/yourusername/taskapp",
      demo: "Request Demo",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/300",
      tech: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/weather",
      demo: "Request Demo",
      featured: false
    },
    {
      id: 4,
      title: "AI Chat Application",
      description: "Modern chat application with AI integration, real-time messaging, and smart conversation features.",
      image: "/api/placeholder/400/300",
      tech: ["Next.js", "OpenAI API", "WebSockets", "Redis"],
      github: "https://github.com/yourusername/ai-chat",
      demo: "Request Demo",
      featured: true
    }
  ],
  skills: [
    // Backend Skills
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 87 },
    { name: "MongoDB", level: 82 },
    // Frontend Skills
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Redux", level: 78 },
    // DevOps & Tools
    { name: "Docker", level: 82 },
    { name: "Kubernetes", level: 75 },
    { name: "Jenkins", level: 70 },
    { name: "Ollama", level: 72 },
    { name: "Linux", level: 85 },
    { name: "Networking", level: 78 }
  ],
  experiences: [
    {
      id: 1,
      company: "Krazy Fish Media",
      position: "Full Stack Developer",
      duration: "2025 - Present",
      description: "Developing comprehensive web solutions using modern technology stack. Building scalable applications with React, Next.js, and Java Spring Boot. Collaborating with cross-functional teams to deliver high-quality digital products and implementing best practices for performance optimization."
    },
    {
      id: 2,
      company: "Relof3 Project (Hackathon)",
      position: "Full Stack Developer",
      duration: "2025",
      description: "Participated in an intensive hackathon project to develop a fully customizable CMS platform. Implemented dynamic content management features, user-friendly admin interfaces, and flexible templating systems. Collaborated with a team of developers to deliver a complete solution within tight deadlines."
    },
    {
      id: 3,
      company: "NCR Corporation",
      position: "Service Desk Specialist - SBONet Platform",
      duration: "2024 - Present",
      description: "Providing technical support and maintenance for SBONet, a comprehensive web-based inventory management platform. Troubleshooting complex system issues, managing user accounts, and ensuring optimal platform performance. Collaborating with development teams to identify and resolve technical challenges."
    },
    {
      id: 4,
      company: "Gamtix (Online iGaming Startup)",
      position: "Full Stack Developer",
      duration: "2022 - 2024",
      description: "Developed and maintained online gaming platform applications for the iGaming industry. Built robust backend services with TypeScript and Node.js, created responsive frontend interfaces with React and TypeScript. Implemented secure payment processing, real-time gaming features, user authentication systems, and compliance frameworks for regulatory requirements in the online gambling sector."
    },
    {
      id: 5,
      company: "SIT Programming School",
      position: "Programming & Mathematics Instructor",
      duration: "2022 - 2023",
      description: "Taught programming fundamentals, advanced Java concepts, and mathematical foundations for computer science. Designed curriculum for web development courses, mentored students in practical projects, and helped bridge the gap between theoretical knowledge and real-world application."
    },
    {
      id: 6,
      company: "Freelance",
      position: "Independent Full Stack Developer",
      duration: "2019 - Present",
      description: "Providing custom web development solutions for various clients across different industries. Specializing in e-commerce platforms, business management systems, and API integrations. Managing complete project lifecycle from requirements gathering to deployment and maintenance."
    }
  ],
  contact: {
    email: "raygaming20@gmail.com",
    phone: "+381692573160",
    location: "Belgrade, Serbia",
    social: {
      github: "https://github.com/samodjolo",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername"
    }
  }
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    updateContact: (state, action: PayloadAction<Partial<Contact>>) => {
      state.contact = { ...state.contact, ...action.payload };
    }
  }
});

export const { addProject, updateProject, deleteProject, updateContact } = portfolioSlice.actions;
export default portfolioSlice.reducer;