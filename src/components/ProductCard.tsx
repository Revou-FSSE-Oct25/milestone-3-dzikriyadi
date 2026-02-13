"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { useCartStore } from "@/store/cartStore";
// import { CartContext } from "@/context/CartContext";
// import { useContext } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  //   const cartContext = useContext(CartContext);
  //   if (!cartContext) return null;
  //   const { addToCart } = cartContext;
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <Card className="flex flex-col justify-between py-1">
      {/* IMAGE */}
      <CardContent className="p-4">
        <div className="relative w-full h-48 mb-4 group overflow-hidden rounded">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
        </div>

        <h2 className="font-semibold text-sm mb-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm font-bold">${product.price}</p>
      </CardContent>

      {/* ACTION BUTTONS */}
      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/products/${product.id}`}>View Detail</Link>
        </Button>

        <Button
          className="w-full cursor-pointer"
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
