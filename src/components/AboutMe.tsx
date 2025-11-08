import { Code2, Database, Server, Globe, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedGridItem } from "@/components/AnimatedGrid";

// Skill Item Component - Hook di top level
interface SkillItemProps {
  skill: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  return (
    <AnimatedGridItem
      index={index}
      className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift hover-glow"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <skill.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
            {skill.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </AnimatedGridItem>
  );
};

export const AboutMe = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Vite, React, TypeScript, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Java, Spring Boot, REST APIs, Apache Kafka",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MySQL, Redis",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "Docker, Vercel",
    },
    {
      icon: Wrench,
      title: "Tools",
      description:
        "InteliJ IDEA, VS Code, Git, Postman, DBeaver, Redis Insight, Apache Netbeans, Laragon",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about" className="py-12">
      {/* Title */}
      <AnimatedSection threshold={0.1}>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          About Me
        </h2>
      </AnimatedSection>

      {/* Description Card */}
      <AnimatedSection threshold={0.2} className="mb-8">
        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
          <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
            I am a dedicated and passionate{" "}
            <button
              onClick={() =>
                handleLinkClick(
                  "https://www.dicoding.com/blog/apa-itu-full-stack-developer-keahlian-keahlian-yang-harus-dikuasai/"
                )
              }
              className="font-semibold text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
            >
              Fullstack Developer
            </button>{" "}
            specializing in building robust web applications using Java Spring
            Boot, Hibernate, Vite, React, TypeScript, and Tailwind CSS. I focus
            on creating efficient, user-friendly solutions with experience
            delivering scalable backend systems and modern responsive frontends.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            I thrive in{" "}
            <button
              onClick={() =>
                handleLinkClick(
                  "https://www.dicoding.com/blog/konsep-agile-pada-software-development/"
                )
              }
              className="font-semibold text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
            >
              Agile
            </button>{" "}
            team environments, prioritizing clean code and automated testing to
            ensure reliability. Beyond coding, I am continuously learning new
            technologies and enjoy sharing knowledge through blogging and
            mentoring.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I believe the right technology and effective collaboration drive
            successful projects. Let's build something great together!
          </p>
        </div>
      </AnimatedSection>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};
