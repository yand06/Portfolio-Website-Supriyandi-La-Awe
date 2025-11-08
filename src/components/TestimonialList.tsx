import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./TestimonialCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedGridItem } from "@/components/AnimatedGrid";
import type { Testimonial } from "@/types";

interface TestimonialListProps {
  testimonials: Testimonial[];
}

// Animated Testimonial Item Component - Hook di top level
interface AnimatedTestimonialItemProps {
  testimonial: Testimonial;
  index: number;
}

const AnimatedTestimonialItem = ({
  testimonial,
  index,
}: AnimatedTestimonialItemProps) => {
  return (
    <AnimatedGridItem index={index} className="">
      <TestimonialCard testimonial={testimonial} />
    </AnimatedGridItem>
  );
};

export const TestimonialList = ({ testimonials }: TestimonialListProps) => {
  const handleViewAll = () => {
    window.open(
      "https://fastwork.id/user/supriyandi?source=web_marketplace_profile-menu_profile",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="testimonials" className="py-12">
      {/* Title Section */}
      <AnimatedSection threshold={0.1} className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Testimonials
          </h2>
          <Button
            variant="ghost"
            className="text-primary hover:text-white hover:bg-primary transition-colors"
            onClick={handleViewAll}
          >
            View All
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </AnimatedSection>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedTestimonialItem
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
