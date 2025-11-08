import { ProductItem } from "./ProductItem";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Product } from "@/types";

interface ProductListProps {
  products: Product[];
}

const AnimatedProductItem = ({ product }: { product: Product }) => {
  const productAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={productAnimation.elementRef}
      className={`transition-all duration-700 ${
        productAnimation.isVisible ? "scroll-visible" : "scroll-hidden-right"
      }`}
    >
      <ProductItem product={product} />
    </div>
  );
};

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
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <AnimatedProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
