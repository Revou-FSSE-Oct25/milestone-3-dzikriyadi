"use client";
import { ProductList } from "@/app/product/components/ProductList";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Spinner from "@/components/Spinner";
import { Product } from "@/types/product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const [quantity, setQuantity] = useState(1);

  //////////////////////
  useEffect(() => {
    console.log("the params is " + params.id);
    async function loadProduct() {
      try {
        const { data } = await axios.get<Product[]>(
          `https://api.escuelajs.co/api/v1/categories/${params.id}/products`,
        );
        setProducts(data);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong, Try Again Leter";
        setErrorMessage(message);
      } finally {
        setIsLoading(false);
      }
    }

    if (params.id) {
      loadProduct();
    }
  }, [params.id]);
  //////////////////////

  return (
    <>
      <main className="font-mono w-full">
        <NavigationBar />
        <section className=" md:px-5 lg:w-[68rem] lg:m-auto lg:mt-10 mt-10">
          <div>
            {isLoading && <Spinner />}
            {!isLoading && !errorMessage && products.length === 0 && (
              <p className="text-center text-gray-500">
                No products found in this category.
              </p>
            )}
            {!isLoading && !errorMessage && <ProductList products={products} />}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
