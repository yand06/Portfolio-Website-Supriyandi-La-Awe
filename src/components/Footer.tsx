import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yand06",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/supriyandi-la-awe",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yand_la",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:supriyandilaawe@gmail.com",
    },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Supriyandi La Awe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
