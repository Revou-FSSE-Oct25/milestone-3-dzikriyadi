import Image from "next/image";
import { HeaderNav } from "../components/HeaderNav";

import CarouselHead from "../components/CarouselHead";
import CardProduct from "@/components/CardProduct";

export default function Home() {
  return (
    <main className=" min-h-screen lg:w-5xl  m-auto mt-[90px]  font-mono">
      <nav className="w-full max-w-5xl items-center justify-center text-sm ">
        <HeaderNav />
      </nav>
      <header className=" w-2xs m-auto md:w-full h-70 relative z-10">
        <CarouselHead />
      </header>
      <section className="flex flex-row w-[68rem] m-auto ">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
    </main>
  );
}
