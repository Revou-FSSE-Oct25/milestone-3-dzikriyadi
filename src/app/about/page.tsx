//Contoh SSG
import AboutPage, { AboutPageProps } from "@/components/AboutPage";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

// export const revalidate = 3600; // SSG with ISR: cara agar bisa tervalidasi setiap 1 jam

async function getAboutData(): Promise<AboutPageProps> {
  // Example: fetch from an API endpoint or CMS
  // For now, returning hardcoded data (which is also static)
  // You can replace this with: await fetch('https://api.example.com/about')

  ////////////////

  return {
    title: "About this Website",
    description:
      "This is a minimal ecommerce demo site focused on clean, monochrome design and simple UX. It showcases product listings, detail pages, and a lightweight checkout flow built with Next.js and Tailwind CSS.",
    whyTitle: "Why this project?",
    whyText:
      "The goal is to demonstrate a minimal, accessible, and responsive UI pattern that adapts well to dark mode. Components use neutral tones, subtle borders, and clear typographic hierarchy to let products shine.",
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "Tailwind CSS",
      "Shadcn/Tailwind component styling",
    ],
    faqs: [
      {
        question: "How do I place an order?",
        answer:
          'Select a product, choose quantity, then use the "Add to Cart & Checkout" button to proceed.',
      },
      {
        question: "Can I return items?",
        answer:
          "Yes — the demo includes return policy text but no real backend; adapt as needed for your store.",
      },
      {
        question: "Is this production ready?",
        answer:
          "This repo is a starting point. Add authentication, payments, and hardened backend integrations for production use.",
      },
    ],
  };
}

export default async function Page() {
  const aboutData = await getAboutData();

  return (
    <main className="font-mono w-full">
      <NavigationBar />
      <section>
        <AboutPage {...aboutData} />
      </section>
      <Footer />
    </main>
  );
}
