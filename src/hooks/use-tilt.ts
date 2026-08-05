import { useState, useCallback, useRef } from "react";

interface TiltState {
  x: number;
  y: number;
}

export function useTilt() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

  const setRef = useCallback((el: HTMLDivElement | null) => {
    elementRef.current = el;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = elementRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return {
    setRef,
    tilt,
    handleMouseMove,
    handleMouseLeave,
    style: {
      transformStyle: "preserve-3d" as const,
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    },
  };
}