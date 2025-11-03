import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductItem } from "./ProductItem";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Product } from "@/types";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section className="py-12">
      <div
        ref={titleAnimation.elementRef}
        className={`flex items-center justify-between mb-6 transition-all duration-700 ${
          titleAnimation.isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Products
        </h2>
        <Button variant="ghost" className="text-primary hover:text-primary/80">
          View All
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-3">
        {products.map((product, index) => {
          const productAnimation = useScrollAnimation({ threshold: 0.3 });
          
          return (
            <div
              key={product.id}
              ref={productAnimation.elementRef}
              className={`transition-all duration-700 ${
                productAnimation.isVisible ? "scroll-visible" : "scroll-hidden-right"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
