import Link from "next/link";
import Search from "./Search";
import { deleteProduct } from "./actions";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

const LIMIT = 15;

async function getProducts(page: number, search: string) {
  const offset = (page - 1) * LIMIT;

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?title=${search}&offset=${offset}&limit=${LIMIT}`,
    { cache: "no-store" },
  );

  if (!res.ok) throw new Error("Failed fetch");

  return res.json();
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const search = params.search || "";

  const products = await getProducts(page, search);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Product Management</h1>

        <Link
          href="/admin/products/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Create Product
        </Link>
      </div>

      <Search />

      <table className="w-full border rounded-lg">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: any) => (
            <tr key={product.id} className="border-b">
              <td className="p-3">{product.title}</td>
              <td className="p-3">${product.price}</td>
              <td className="p-3">{product.category?.name}</td>

              <td className="p-3 text-right space-x-3">
                <Link
                  href={`/admin/products/${product.id}`}
                  className="underline"
                >
                  Edit
                </Link>

                <form action={deleteProduct.bind(null, product.id)}>
                  <button type="submit" className="text-red-500 cursor-pointer">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-6">
        <Link
          href={`/admin/products?page=${page - 1}&search=${search}`}
          className={page <= 1 ? "opacity-40 pointer-events-none" : ""}
        >
          Previous
        </Link>

        <span>Page {page}</span>

        <Link href={`/admin/products?page=${page + 1}&search=${search}`}>
          Next
        </Link>
      </div>
    </div>
  );
}
