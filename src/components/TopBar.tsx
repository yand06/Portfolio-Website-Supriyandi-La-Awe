import { useState, useEffect } from "react";
import { Home, User, MessageSquareQuote, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              aria-label="About"
            >
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              aria-label="Projects"
            >
              <Briefcase className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              aria-label="Projects"
            >
              <MessageSquareQuote className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </button>
          </nav>

          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
};
