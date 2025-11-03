import { Code2, Database, Server, Globe, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const AboutMe = () => {
  const titleAnimation = useScrollAnimation();
  const descAnimation = useScrollAnimation({ threshold: 0.2 });

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

  return (
    <section id="about" className="py-12">
      <div
        ref={titleAnimation.elementRef}
        className={`transition-all duration-700 ${
          titleAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          About Me
        </h2>
      </div>

      <div
        ref={descAnimation.elementRef}
        className={`bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8 mb-8 transition-all duration-700 ${
          descAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <p className="text-lg text-foreground mb-4 leading-relaxed">
          I am a dedicated{" "}
          <span className="font-semibold text-primary">
            Fullstack Developer
          </span>{" "}
          with over one year of professional experience in developing scalable
          web applications. I focus on delivering efficient and user-centric
          solutions that effectively address real-world challenges.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          My methodology integrates best practices in clean coding, modern
          technologies, and a comprehensive understanding of both frontend and
          backend architectures. I excel at transforming complex requirements
          into elegant, maintainable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const skillAnimation = useScrollAnimation({
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px",
          });

          return (
            <div
              key={skill.title}
              ref={skillAnimation.elementRef}
              className={`bg-card rounded-xl shadow-sm border border-border p-6 hover-lift hover-glow transition-all duration-700 ${
                skillAnimation.isVisible
                  ? "scroll-visible"
                  : "scroll-hidden-scale"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
