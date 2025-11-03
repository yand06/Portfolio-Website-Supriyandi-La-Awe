import { ChevronRight, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <a
      href={product.link || "#"}
      className="block bg-card border border-border rounded-xl p-4 hover:bg-secondary/50 hover-lift hover-glow transition-smooth cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-accent" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground group-hover:text-accent transition-smooth">
              {product.title}
            </h3>
            {product.tag && (
              <Badge variant="secondary" className="text-xs">
                {product.tag}
              </Badge>
            )}
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-smooth flex-shrink-0" />
      </div>
    </a>
  );
};
