import { TopBar } from "@/components/TopBar";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutMe } from "@/components/AboutMe";
import { ProjectList } from "@/components/ProjectList";
import { ProductList } from "@/components/ProductList";
import { TestimonialList } from "@/components/TestimonialList";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import type { Profile, Project, Product, Testimonial } from "@/types";

const profile: Profile = {
  name: "Supriyandi La Awe",
  role: "Fullstack Developer",
  location: "Depok, Indonesia",
  available: true,
  email: "supriyandilaawe@gmail.com",
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    link: "#",
  },
  {
    id: "2",
    title: "Task Management System",
    description:
      "Collaborative task management app with real-time updates, team features, and project tracking.",
    link: "#",
  },
  {
    id: "3",
    title: "Healthcare Dashboard",
    description:
      "Medical dashboard for patient management, appointment scheduling, and health records.",
    link: "#",
  },
];

const products: Product[] = [
  {
    id: "1",
    title: "React Admin Template",
    tag: "TEMPLATE",
    link: "#",
  },
  {
    id: "2",
    title: "API Documentation Generator",
    tag: "TOOL",
    link: "#",
  },
  {
    id: "3",
    title: "UI Component Library",
    tag: "TEMPLATE",
    link: "#",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc",
    content:
      "Working with Supriyandi was an absolute pleasure. His attention to detail and ability to deliver high-quality code on time made our project a huge success.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Exceptional developer with deep knowledge of both frontend and backend. He transformed our ideas into a scalable, production-ready application.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amanda Rodriguez",
    role: "Design Lead",
    company: "Creative Studio",
    content:
      "His ability to translate designs into pixel-perfect, responsive interfaces is remarkable. Communication was smooth throughout the entire project.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    company: "E-Commerce Plus",
    content:
      "Supriyandi built our entire e-commerce platform from scratch. The code is clean, well-documented, and easy to maintain. Highly recommended!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div id="home" className="pt-20 pb-8">
          <ProfileCard profile={profile} />
        </div>

        <AboutMe />
        <ProjectList projects={projects} />
        <ProductList products={products} />
        <TestimonialList testimonials={testimonials} />
        <CallToAction email={profile.email} />
      </main>

      <div className="container mx-auto px-4 max-w-4xl">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
