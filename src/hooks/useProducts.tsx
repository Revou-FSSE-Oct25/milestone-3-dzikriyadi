import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return products;
}
