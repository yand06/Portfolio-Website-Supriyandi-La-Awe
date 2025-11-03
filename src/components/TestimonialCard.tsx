import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover-lift transition-smooth h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          {testimonial.avatarUrl ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <Quote className="w-6 h-6 text-primary" />
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>

        {testimonial.rating && (
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-primary text-primary"
              />
            ))}
          </div>
        )}
      </div>

      <blockquote className="text-muted-foreground italic leading-relaxed flex-1">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
};
