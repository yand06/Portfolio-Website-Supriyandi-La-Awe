import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Project } from "@/types";
import { Footer } from "@/components/Footer";

interface ProjectDetailProps {
  projects: Project[];
}

export const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  const headerAnimation = useScrollAnimation();
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const overviewAnimation = useScrollAnimation({ threshold: 0.3 });
  const techAnimation = useScrollAnimation({ threshold: 0.3 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.3 });
  const reflectionAnimation = useScrollAnimation({ threshold: 0.3 });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div
          ref={headerAnimation.elementRef}
          className={`mb-12 transition-all duration-700 ${
            headerAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover-glow group"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl text-muted-foreground mb-6">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button className="hover-glow group">
                View Live
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" className="hover-glow group">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {project.heroImage && (
          <div
            ref={heroAnimation.elementRef}
            className={`mb-16 transition-all duration-700 ${
              heroAnimation.isVisible ? "scroll-visible" : "scroll-hidden-scale"
            }`}
          >
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Overview Section */}
        {project.overview && (
          <section
            ref={overviewAnimation.elementRef}
            className={`mb-16 transition-all duration-700 ${
              overviewAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <section
            ref={techAnimation.elementRef}
            className={`mb-16 transition-all duration-700 ${
              techAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => {
                const techItemAnimation = useScrollAnimation({
                  threshold: 0.3,
                });
                return (
                  <div
                    key={tech}
                    ref={techItemAnimation.elementRef}
                    data-delay-index={index}
                    className={`stagger-item bg-card border border-border rounded-xl p-4 text-center hover-lift transition-all duration-700 ${
                      techItemAnimation.isVisible
                        ? "scroll-visible"
                        : "scroll-hidden-scale"
                    }`}
                  >
                    <p className="font-semibold text-foreground">{tech}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <section
            ref={featuresAnimation.elementRef}
            className={`mb-16 transition-all duration-700 ${
              featuresAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => {
                const featureItemAnimation = useScrollAnimation({
                  threshold: 0.3,
                });
                return (
                  <div
                    key={feature}
                    ref={featureItemAnimation.elementRef}
                    data-delay-index={index}
                    className={`stagger-item bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-700 ${
                      featureItemAnimation.isVisible
                        ? "scroll-visible"
                        : "scroll-hidden"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => {
                const screenshotAnimation = useScrollAnimation({
                  threshold: 0.3,
                });
                return (
                  <div
                    key={screenshot}
                    ref={screenshotAnimation.elementRef}
                    data-delay-index={index}
                    className={`stagger-item-lg bg-card rounded-xl shadow-md overflow-hidden border border-border hover-lift transition-all duration-700 ${
                      screenshotAnimation.isVisible
                        ? "scroll-visible"
                        : "scroll-hidden-scale"
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Project Reflection */}
        {project.reflection && (
          <section
            ref={reflectionAnimation.elementRef}
            className={`mb-16 transition-all duration-700 ${
              reflectionAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Reflection
            </h2>
            <div className="bg-secondary/30 border border-border rounded-xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {project.reflection}
              </p>
            </div>
          </section>
        )}
      </div>
      <footer className="container mx-auto px-4 max-w-4xl">
        <Footer />
      </footer>
    </div>
  );
};
