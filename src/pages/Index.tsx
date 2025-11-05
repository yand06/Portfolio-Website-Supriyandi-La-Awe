import { TopBar } from "@/components/TopBar";
import { ProfileCard } from "@/components/ProfileCard";
import { AboutMe } from "@/components/AboutMe";
import { ProjectList } from "@/components/ProjectList";
import { ProductList } from "@/components/ProductList";
import { TestimonialList } from "@/components/TestimonialList";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import type { Project } from "@/types";
import { profile, products, testimonials } from "@/data";

interface IndexProps {
  projects: Project[];
}

const Index = ({ projects }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <TopBar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <section id="home" className="pt-20 pb-8">
          <ProfileCard profile={profile} />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectList projects={projects} />
        </section>

        {/* Products Section */}
        <section id="products">
          <ProductList products={products} />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialList testimonials={testimonials} />
        </section>

        {/* Call to Action */}
        <section id="contact">
          <CallToAction email={profile.email} />
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 max-w-4xl">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
