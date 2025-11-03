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
    title: "Agenin Project",
    description:
      "Full-stack Agenin solution with user registration, referral system, calculate commissions, and tree structure.",
    link: "#",
  },
  {
    id: "2",
    title: "JDTFLIX",
    description:
      "JDTFLIX is an application that provides a minimalist and modern interface for displaying movie data.",
    link: "https://movie-task-fe.vercel.app/login",
  },
  {
    id: "3",
    title: "Goods Inventory",
    description:
      "Goods Inventory is a real-time desktop application for managing raw material and production stock, featuring stock control and reporting, built with Java and MySQL to enhance operational efficiency.",
    link: "https://github.com/yand06/Inventory-Application-PT.Garasi-Creasindo",
  },
];

const products: Product[] = [
  {
    id: "1",
    title: "React Admin Template (Example)",
    tag: "TEMPLATE",
    link: "#",
  },
  {
    id: "2",
    title: "API Documentation Generator (Example)",
    tag: "TOOL",
    link: "#",
  },
  {
    id: "3",
    title: "UI Component Library (Example)",
    tag: "TEMPLATE",
    link: "#",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Catur Apriadi",
    role: "Customer",
    company: "Fastwork",
    content:
      "Satisfying result, delivered exactly as requested (Highly recommended).",
    rating: 5,
  },
  {
    id: "2",
    name: "cofb4rv5",
    role: "Customer",
    company: "Fastwork",
    content:
      "Great work, very responsive and easy to discuss ideas with. The result met all expectations.",
    rating: 5,
  },
  {
    id: "3",
    name: "***** (Akun anonim)",
    role: "Customer",
    company: "Fastwork",
    content: "Excellent.",
    rating: 5,
  },
  {
    id: "4",
    name: "rpamwvnx",
    role: "Customer",
    company: "Fastwork",
    content: "Impressive work, the result is very satisfying.",
    rating: 5,
  },
  {
    id: "5",
    name: "rpamwvnx",
    role: "Customer",
    company: "Fastwork",
    content:
      "Outstanding! Fast work, quick response, and very pleasant to communicate with.",
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
