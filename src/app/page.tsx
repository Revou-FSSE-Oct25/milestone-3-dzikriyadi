"use client";
import Footer from "@/components/Footer";
import HeroPage from "@/components/HeroPage";
import NavigationBar from "@/components/NavigationBar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="font-mono w-full">
        <NavigationBar />
        <section>
          <HeroPage />
        </section>
        <section></section>
        <Footer />
      </main>
    </>
  );
}

// Product / CSR
// DetailProduct / SSR
// About / SSG

// Benerin Style Product Card
// Tambah Category Card di Home
// Buat Page Detail, Product
// Buat Page About
// README
