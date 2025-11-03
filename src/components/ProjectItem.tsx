import { ChevronRight, Code2 } from "lucide-react";
import type { Project } from "@/types";

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <a
      href={project.link || "#"}
      className="block bg-card border border-border rounded-xl p-4 hover:bg-secondary/50 hover-lift hover-glow transition-smooth cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Code2 className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth flex-shrink-0" />
      </div>
    </a>
  );
};
