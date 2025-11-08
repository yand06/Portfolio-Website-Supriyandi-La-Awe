import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedGridItem } from "@/components/AnimatedGrid";
import { ImageLightbox } from "@/components/ImageLightbox"; // Import
import type { Project } from "@/types";
import { Footer } from "@/components/Footer";

interface ProjectDetailProps {
  projects: Project[];
}

export const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Handler untuk buka lightbox
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Handler untuk navigasi gambar
  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <AnimatedSection threshold={0.1}>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover-glow group"
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

          <div className="flex flex-wrap gap-4 mb-8">
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
        </AnimatedSection>

        {/* Hero Image - Clickable */}
        {project.heroImage && (
          <AnimatedSection
            threshold={0.2}
            animationType="scale"
            className="mb-16"
          >
            <div
              className="bg-card rounded-sm shadow-lg overflow-hidden border border-border cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleImageClick(0)}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        )}

        {/* Overview Section */}
        {project.overview && (
          <AnimatedSection threshold={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </AnimatedSection>
        )}

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <AnimatedSection threshold={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <AnimatedGridItem
                  key={tech}
                  index={index}
                  className="bg-card border border-border rounded-xl p-4 text-center hover-lift"
                >
                  <p className="font-semibold text-foreground">{tech}</p>
                </AnimatedGridItem>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <AnimatedSection threshold={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <AnimatedGridItem
                  key={index}
                  index={index}
                  className="bg-card border border-border rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                </AnimatedGridItem>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Screenshots Gallery - Clickable */}
        {project.screenshots && project.screenshots.length > 0 && (
          <AnimatedSection threshold={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <AnimatedGridItem
                  key={screenshot}
                  index={index}
                  onClick={() => handleImageClick(index + 1)} // +1 karena heroImage di index 0
                  className="bg-card rounded-sm shadow-md overflow-hidden border border-border hover-lift group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Overlay hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        Click to view
                      </span>
                    </div>
                  </div>
                </AnimatedGridItem>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Project Reflection */}
        {project.reflection && (
          <AnimatedSection threshold={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Reflection
            </h2>
            <div className="bg-secondary/30 border border-border rounded-xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {project.reflection}
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>

      <footer className="container mx-auto px-4 max-w-4xl">
        <Footer />
      </footer>

      {/* Image Lightbox Modal */}
      {(project.heroImage || project.screenshots) && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={[
            ...(project.heroImage ? [project.heroImage] : []),
            ...(project.screenshots || []),
          ]}
          currentIndex={currentImageIndex}
          onNavigate={handleNavigate}
          alt={project.title}
        />
      )}
    </div>
  );
};
