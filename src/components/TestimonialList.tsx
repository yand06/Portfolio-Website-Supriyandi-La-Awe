import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./TestimonialCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Testimonial } from "@/types";

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export const TestimonialList = ({ testimonials }: TestimonialListProps) => {
  const titleAnimation = useScrollAnimation();

  return (
    <section id="testimonials" className="py-12">
      <div
        ref={titleAnimation.elementRef}
        className={`flex items-center justify-between mb-6 transition-all duration-700 ${
          titleAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Testimonials
        </h2>
        <Button
          variant="ghost"
          className="text-primary hover:text-white"
          onClick={() =>
            window.open(
              "https://fastwork.id/user/supriyandi?source=web_marketplace_profile-menu_profile",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          View All
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => {
          const cardAnimation = useScrollAnimation({ threshold: 0.2 });

          return (
            <div
              key={testimonial.id}
              ref={cardAnimation.elementRef}
              className={`transition-all duration-700 ${
                cardAnimation.isVisible
                  ? "scroll-visible"
                  : "scroll-hidden-scale"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
