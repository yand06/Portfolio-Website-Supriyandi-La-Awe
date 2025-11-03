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
        <Button variant="ghost" className="text-primary hover:text-primary/80">
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
                projectAnimation.isVisible ? "scroll-visible" : "scroll-hidden-left"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectItem project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
