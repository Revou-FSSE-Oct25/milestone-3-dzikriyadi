// SSR Page

import ProductDetailPage from "@/app/product/components/ProductDetailPage";
import type { Product } from "@/types/product";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store", // or "force-cache"
    next: { revalidate: 60 }, // ISR-style
  });

  if (!res.ok) return null;
  return (await res.json()) as Product;
}
export default async function SsrProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <>
        <NavigationBar />
        <main className="font-mono w-full min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-light ">Product Not Found</h1>
            <p className="text-red-400">Unable to load the product details.</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      {/* <NavigationBar />
      <ProductDetailPage product={product} />
      <Footer /> */}

      <main className="font-mono w-full">
        <NavigationBar />
        <section className=" ">
          <ProductDetailPage product={product} />
        </section>
        <Footer />
      </main>
    </>
  );
}
