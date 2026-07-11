"use client";

import Image from "next/image";
import Link from "next/link";

import { useFavorites } from "@/context/FavoritesContext";

import Header from "@/components/layout/Header";
import EmptyFavorites from "@/components/favorites/EmptyFavorites";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <>
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-16">
          <EmptyFavorites />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-yellow-400">
          Mis favoritos
        </h1>

        <p className="text-gray-400 mt-3 mb-12">
          Estos son los productos que has guardado.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {favorites.map((product) => (

            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >

              <Link href={`/products/${product.slug}`}>

                <div className="relative h-64">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                </div>

              </Link>

              <div className="p-6">

                <p className="text-yellow-400">
                  {product.brand}
                </p>

                <h2 className="text-2xl font-bold text-white mt-2">
                  {product.name}
                </h2>

                <p className="text-yellow-400 text-3xl font-bold mt-5">
                  $
                  {product.price.toLocaleString("es-CO")}
                </p>

                <div className="flex gap-4 mt-8">

                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black text-center font-bold py-3 rounded-xl transition"
                  >
                    Ver producto
                  </Link>

                  <button
                    onClick={() =>
                      removeFavorite(product.id)
                    }
                    className="px-5 rounded-xl bg-red-600 hover:bg-red-700 transition"
                  >
                    ❤️
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>
    </>
  );
}