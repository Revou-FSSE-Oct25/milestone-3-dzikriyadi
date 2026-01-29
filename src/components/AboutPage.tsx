export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="prose prose-invert max-w-none text-gray-300">
        <h1 className="text-3xl font-light">About this Website</h1>
        <p className="mt-4 text-base leading-relaxed">
          This is a minimal ecommerce demo site focused on clean, monochrome
          design and simple UX. It showcases product listings, detail pages, and
          a lightweight checkout flow built with Next.js and Tailwind CSS.
        </p>

        <h2 className="mt-8 text-2xl font-medium">Why this project?</h2>
        <p className="mt-3 text-base leading-relaxed">
          The goal is to demonstrate a minimal, accessible, and responsive UI
          pattern that adapts well to dark mode. Components use neutral tones,
          subtle borders, and clear typographic hierarchy to let products shine.
        </p>

        <h2 className="mt-8 text-2xl font-medium">Technology</h2>
        <ul className="mt-3 list-disc list-inside text-base space-y-1">
          <li>Next.js (App Router)</li>
          <li>React 19</li>
          <li>Tailwind CSS</li>
          <li>Shadcn/Tailwind component styling</li>
        </ul>

        <h2 className="mt-12 text-2xl font-light">FAQ</h2>
        <div className="mt-4 space-y-6">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              How do I place an order?
            </p>
            <p className="mt-2 text-base text-gray-300">
              Select a product, choose quantity, then use the "Add to Cart &
              Checkout" button to proceed.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Can I return items?
            </p>
            <p className="mt-2 text-base text-gray-300">
              Yes — the demo includes return policy text but no real backend;
              adapt as needed for your store.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Is this production ready?
            </p>
            <p className="mt-2 text-base text-gray-300">
              This repo is a starting point. Add authentication, payments, and
              hardened backend integrations for production use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
