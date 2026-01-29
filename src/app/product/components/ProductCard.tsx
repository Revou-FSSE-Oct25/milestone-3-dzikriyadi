import Link from "next/link";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = Array.isArray(product.image)
    ? product.image[0]
    : product.image || product.images || "";

  const categoryName =
    typeof product.category === "object"
      ? product.category.name
      : product.category;

  return (
    <article className="rounded-lg border border-slate-800 p-4 flex flex-col h-full">
      <Link href={`/product/${product.id}`} className="group">
        <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md bg-slate-900">
          {imageUrl ? (
            // plain img keeps compatibility with external urls
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="text-sm text-gray-500">No image</div>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-400">{categoryName}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-light text-gray-200">
              ${product.price.toFixed(2)}
            </span>
            <span />
          </div>
        </div>
      </Link>

      <div className="mt-4 pt-4 border-t border-slate-800">
        <Link
          href={`/product/${product.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm text-gray-200 hover:bg-white/5 transition"
        >
          View Detail
        </Link>
      </div>
    </article>
  );
}
