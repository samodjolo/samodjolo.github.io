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
      company: "Tech Solutions Inc",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance."
    },
    {
      id: 2,
      company: "Digital Innovation Lab",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience for various client projects. Collaborated with designers and backend developers to deliver high-quality solutions."
    },
    {
      id: 3,
      company: "StartupXYZ",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Built features for a growing SaaS platform, participated in agile development processes, and gained experience with modern web technologies."
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