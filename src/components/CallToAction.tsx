import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import fastworkIconImg from "@/assets/fastwork-icon.png";
import { toast } from "sonner";

interface CallToActionProps {
  email: string;
}

export const CallToAction = ({ email }: CallToActionProps) => {
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  const handleHireMe = () => {
    window.open(
      "https://fastwork.id/user/supriyandi",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div
        ref={ctaAnimation.elementRef}
        className={`bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 text-center border border-border hover-glow transition-all duration-700 ${
          ctaAnimation.isVisible ? "scroll-visible" : "scroll-hidden-scale"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Let's work together.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Creating efficient and scalable web & backend solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleHireMe}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
          >
            <img
              src={fastworkIconImg}
              alt="Fastwork"
              className="w-6 h-6 mr-2"
            />
            Get in Touch
          </Button>
          <Button
            onClick={handleCopyEmail}
            variant="secondary"
            className="w-full sm:w-auto bg-secondary hover:bg-secondary/80"
          >
            <Copy className="w-5 h-5 mr-2" />
            Copy Email
          </Button>
        </div>
      </div>
    </section>
  );
};
