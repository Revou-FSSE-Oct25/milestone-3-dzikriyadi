import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

//////////////////////
export function ProductCard({ product }: ProductCardProps) {
  ///////Handle Imagenya
  const imageUrl = Array.isArray(product.image)
    ? product.image[0]
    : product.image || product.images || "";
  ///////Handle Categorynya
  const categoryName =
    typeof product.category === "object"
      ? product.category.name
      : product.category;

  return (
    <article className="rounded-lg border border-white-800 p-4 flex flex-col h-full ">
      <Link href={`/product/${product.id}`} className="group">
        <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md bg-slate-900">
          {imageUrl ? (
            /////////////////////////
            <img
              src={imageUrl}
              alt={product.title}
              className="w-full h-full object-cover md:h transition-transform duration-300 group-hover:scale-105 "
            />
          ) : (
            <div className="text-sm ">No image</div>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium line-clamp-2 text-base leading-snug">
            {product.title}
          </h3>
          <p className="mt-1 text-sm ">{categoryName}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-light ">
              ${product.price.toFixed(2)}
            </span>
            <span />
          </div>
        </div>
      </Link>

      <div className="mt-4 pt-4 border-t border-white-800 justify-end">
        <Link
          href={`/product/${product.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white-700 px-3 py-2 text-sm  hover:bg-white/5 transition"
        >
          View Detail
        </Link>
      </div>
    </article>
  );
}
