"use client";

import { Product } from "@/data/types";
import SearchItem from "./SearchItem";

interface SearchResultsProps {
  products: Product[];
}

export default function SearchResults({
  products,
}: SearchResultsProps) {
  if (products.length === 0) {
    return (
      <div className="bg-zinc-900 rounded-xl mt-2 p-6 text-center">

        <p className="text-gray-400">
          No se encontraron productos.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-xl mt-2 overflow-hidden border border-zinc-800 shadow-2xl">

      {products.map((product) => (
        <SearchItem
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}