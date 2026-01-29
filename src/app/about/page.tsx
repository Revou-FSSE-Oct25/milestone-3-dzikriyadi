import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

export const revalidate = false; // SSG: static page, no revalidation

export default function Page() {
  return (
    <main className="font-mono w-full">
      <NavigationBar />
      <section>
        <AboutPage />
      </section>

      <Footer />
    </main>
  );
}
