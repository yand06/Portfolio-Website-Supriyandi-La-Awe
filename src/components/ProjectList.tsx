import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Project } from "@/types";
import { ProjectItem } from "./ProjectItem";

interface ProjectListProps {
  projects: Project[];
}

// Komponen wrapper untuk setiap project item
const AnimatedProjectItem = ({ project }: { project: Project }) => {
  const projectAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={projectAnimation.elementRef}
      className={`transition-all duration-700 ${
        projectAnimation.isVisible ? "scroll-visible" : "scroll-hidden-left"
      }`}
    >
      <ProjectItem project={project} />
    </div>
  );
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const titleAnimation = useScrollAnimation();

  const handleViewAll = () => {
    window.open(
      "https://github.com/yand06?tab=repositories",
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
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <AnimatedProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
