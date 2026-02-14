import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>

        <p>Please Login to Checkout the items.</p>
        <Link
          href="/login"
          className="mt-4 w-[147px] text-center px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          LogIn
        </Link>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
