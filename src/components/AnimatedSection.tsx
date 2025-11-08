import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  animationType?: "fade" | "slide" | "scale";
}

export const AnimatedSection = ({
  children,
  className = "",
  threshold = 0.2,
  animationType = "fade",
}: AnimatedSectionProps) => {
  const [ref, isVisible] = useInView<HTMLDivElement>({
    threshold,
    freezeOnceVisible: true, // Performance: hanya animasi sekali
  });

  const animationClass = {
    fade: isVisible ? "scroll-visible" : "scroll-hidden",
    slide: isVisible ? "scroll-visible" : "scroll-hidden",
    scale: isVisible ? "scroll-visible" : "scroll-hidden-scale",
  }[animationType];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
