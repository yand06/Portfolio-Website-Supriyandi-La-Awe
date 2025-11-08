import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke top setiap kali route berubah
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Langsung ke atas tanpa animasi
    });
  }, [pathname]);

  return null; // Component ini tidak render apa-apa
};
