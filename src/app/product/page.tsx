//Ini CSR Page
"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { Product } from "@/types/product"; //Product Tipe Data Terpisah
import NavigationBar from "@/components/NavigationBar";
import { ProductList } from "@/app/product/components/ProductList"; //Handle Smua data Produk dalam API(Database)
import Spinner from "@/components/Spinner";
import Footer from "@/components/Footer";

export default function PageProducts() {
  // Handel API
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await axios.get<Product[]>(
          "https://api.escuelajs.co/api/v1/products",
        );
        setProducts(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Something went wrong";
        setErrorMessage(message);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="font-mono w-full">
      <NavigationBar />
      <section className="mt-10 md:mx-5 lg:w-[68rem] lg:m-auto">
        <div>
          {isLoading && <Spinner />}
          {errorMessage && (
            <p className="text-red-500">Error: {errorMessage}</p>
          )}
          {!isLoading && !errorMessage && <ProductList products={products} />}
        </div>
      </section>
      <Footer />
    </main>
  );
}
