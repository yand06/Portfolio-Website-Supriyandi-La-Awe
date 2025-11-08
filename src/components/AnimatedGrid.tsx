import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface AnimatedGridItemProps {
  children: ReactNode;
  index: number;
  className?: string;
  onClick?: () => void; // Tambahkan ini
}

export const AnimatedGridItem = ({
  children,
  index,
  className = "",
  onClick, // Tambahkan ini
}: AnimatedGridItemProps) => {
  const [ref, isVisible] = useInView<HTMLDivElement>({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      data-delay-index={index}
      onClick={onClick} // Tambahkan ini
      className={`stagger-item transition-all duration-700 ${
        isVisible ? "scroll-visible" : "scroll-hidden-scale"
      } ${onClick ? "cursor-pointer" : ""} ${className}`} // Tambahkan cursor
    >
      {children}
    </div>
  );
};
