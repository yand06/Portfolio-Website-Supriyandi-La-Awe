import { useState, useEffect } from "react";
import {
  Home,
  User,
  MessageSquareQuote,
  Briefcase,
  Mail,
  FileUser,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "testimonials", icon: MessageSquareQuote, label: "Reviews" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop & Tablet Navigation - Top */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-md dark:bg-background/90"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-4">
              {navItems.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="p-2 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-foreground" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme Toggle Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="hover:scale-105 transition-transform"
                aria-label="Toggle theme"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              {/* CV Button */}
              <Button
                variant="default"
                size="sm"
                onClick={() =>
                  window.open(
                    "https://my-cv-olive-eta.vercel.app/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
              >
                <FileUser className="w-4 h-4 mr-2" />
                My CV
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-lg hover:bg-secondary active:scale-95 transition-all"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-foreground" />
              <span className="text-[10px] text-foreground/80 font-medium">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Top Actions */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 px-4 flex items-center justify-between pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 bg-background/80 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform pointer-events-auto"
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={() =>
            window.open(
              "https://my-cv-olive-eta.vercel.app/",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="h-9 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:scale-105 transition-transform pointer-events-auto"
        >
          <FileUser className="w-4 h-4" />
          My CV
        </Button>
      </div>
    </>
  );
};
