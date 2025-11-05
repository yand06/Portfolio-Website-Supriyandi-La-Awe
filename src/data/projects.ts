import type { Project } from "@/types";
import uiInDesktop from "@/assets/UI-in-Desktop.png";
import uiRegisterMobile from "@/assets/FORM-REGISTER.png";
import uiRegisterMobile2 from "@/assets/FORM-REGISTER-2.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Agenin Project",
    subtitle: "Full-stack Web Application",
    description:
      "Full-stack Agenin solution with user registration, system referral, calculate commissions, and tree structure.",
    liveUrl: "#",
    githubUrl: "https://github.com/yand06?tab=repositories",
    heroImage: uiInDesktop,
    overview:
      "A comprehensive e-commerce platform built with modern technologies. This project demonstrates end-to-end development skills including payment processing, real-time inventory management, and data analytics. The platform handles thousands of products with optimized search and filtering capabilities.",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Postgre",
      "Tailwind CSS",
      "Kafka",
      "Docker",
    ],
    features: [
      "Users registration with referral code",
      "Commissions calculate when users transactions",
      "User comissions balance and wallet balance",
      "Tree structure",
    ],
    screenshots: [uiRegisterMobile, uiRegisterMobile2],
    reflection: "Building this Agenin project",
  },
  {
    id: "2",
    title: "Task Management System",
    subtitle: "Collaborative Productivity Tool",
    description:
      "Collaborative task management app with real-time updates, team features, and project tracking.",
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/supriyandi/taskmanager",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    overview:
      "A real-time collaborative task management system designed for teams. Features include drag-and-drop boards, real-time updates using WebSocket, and comprehensive project tracking capabilities. The system helps teams organize work efficiently with intuitive interfaces.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Redux",
      "Material-UI",
    ],
    features: [
      "Real-time collaboration with WebSocket",
      "Drag-and-drop Kanban boards",
      "Team member assignments and roles",
      "Project timeline and Gantt charts",
      "File attachments and comments",
      "Task priorities and labels",
      "Activity logs and notifications",
      "Export reports to PDF/Excel",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    ],
    reflection:
      "This project deepened my understanding of real-time communication and state management in complex applications. Implementing WebSocket for instant updates across multiple clients was challenging but rewarding. I also learned valuable lessons about designing intuitive user interfaces for productivity tools.",
  },
  {
    id: "3",
    title: "Healthcare Dashboard",
    subtitle: "Medical Management System",
    description:
      "Medical dashboard for patient management, appointment scheduling, and health records.",
    liveUrl: "https://example.com/healthcare",
    githubUrl: "https://github.com/supriyandi/healthcare",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    overview:
      "A comprehensive healthcare management system for clinics and hospitals. The dashboard streamlines patient management, appointment scheduling, and medical record keeping. Built with security and privacy as top priorities, adhering to healthcare data protection standards.",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "JWT",
      "HIPAA Compliance",
    ],
    features: [
      "Patient registration and profile management",
      "Appointment scheduling with calendar view",
      "Electronic health records (EHR) system",
      "Prescription management",
      "Medical history tracking",
      "Doctor-patient messaging",
      "Analytics and reporting dashboard",
      "Role-based access control",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
    ],
    reflection:
      "Developing a healthcare system taught me the critical importance of data security and user privacy. Implementing proper access controls and ensuring HIPAA compliance was complex but essential. This project reinforced my attention to detail and the responsibility that comes with handling sensitive information.",
  },
];
