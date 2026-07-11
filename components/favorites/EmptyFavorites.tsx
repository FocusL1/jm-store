import Link from "next/link";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="text-7xl mb-6">
        ❤️
      </div>

      <h2 className="text-4xl font-bold text-white">
        No tienes favoritos
      </h2>

      <p className="text-gray-400 mt-5 text-xl">
        Guarda tus productos favoritos para encontrarlos rápidamente.
      </p>

      <Link
        href="/products"
        className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl transition"
      >
        Explorar productos
      </Link>

    </div>
  );
}