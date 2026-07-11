"use client";

import { useMemo, useState } from "react";

import { products } from "@/data/products";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (search.length === 0) {
      return [];
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <div className="relative w-full max-w-lg">

      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {query.trim() !== "" && (
        <div className="absolute top-full left-0 right-0 z-50">
          <SearchResults
            products={filteredProducts}
          />
        </div>
      )}

    </div>
  );
}