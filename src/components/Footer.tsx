import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yand06",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/supriyandi-la-awe",
      ariaLabel: "Connect with me on LinkedIn",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yand_la",
      ariaLabel: "Follow me on Instagram",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:supriyandilaawe@gmail.com",
      ariaLabel: "Send me an email",
    },
  ];

  return (
    <footer className="w-full border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Content wrapper with max-width for better readability */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Social Links */}
          <nav
            aria-label="Social media links"
            className="flex items-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="group p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </nav>

          {/* Divider - Optional, remove if too much spacing */}
          <div className="w-full max-w-xs h-px bg-border/30" />

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear}{" "}
              <span className="font-medium">Supriyandi La Awe</span>
            </p>
            <p className="text-xs text-muted-foreground/70">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
