import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>

        <p>Only authenticated users can see this page.</p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
