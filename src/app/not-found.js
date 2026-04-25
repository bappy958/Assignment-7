import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-6xl font-black text-[#244D3F]">404</h2>
      <h3 className="text-2xl font-semibold mt-4">Page Not Found!</h3>
      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you are looking for might have been deleted or the URL
        was typed incorrectly.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}