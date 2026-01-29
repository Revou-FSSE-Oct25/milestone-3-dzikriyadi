import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-lg border-1 border-white-100 p-4">
      <img
        // if image adalah Array
        src={product.images}
        alt={product.name}
        className="h-48 w-full object-contain"
      />

      {/* Gunakan product.name sesuai pesan error tadi */}
      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>

      {/* INI DIA: Kalau category itu object, panggil .name-nya */}
      <p className="my-2 text-sm text-gray-500">
        {typeof product.category === "object"
          ? product.category.name
          : product.category}
      </p>

      <strong className="text-base">${product.price.toFixed(2)}</strong>
    </article>
  );
}
