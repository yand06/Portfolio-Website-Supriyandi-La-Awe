import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "./ProjectItem";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Project } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const titleAnimation = useScrollAnimation();

  const handleViewAll = () => {
    const projectsSection = document.getElementById("projects");
    window.open(
      "https://github.com/yand06https://github.com/yand06?tab=repositories",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="projects" className="py-12">
      <div
        ref={titleAnimation.elementRef}
        className={`flex items-center justify-between mb-6 transition-all duration-700 ${
          titleAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Projects
        </h2>
        <Button
          variant="ghost"
          className="text-primary hover:text-white"
          onClick={handleViewAll}
          aria-label="View all projects"
        >
          View All
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => {
          const projectAnimation = useScrollAnimation({ threshold: 0.3 });

          return (
            <div
              key={project.id}
              ref={projectAnimation.elementRef}
              className={`transition-all duration-700 ${
                projectAnimation.isVisible
                  ? "scroll-visible"
                  : "scroll-hidden-left"
              }`}
            >
              <ProjectItem project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
