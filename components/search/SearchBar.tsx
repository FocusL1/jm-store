"use client";

import { useEffect, useMemo, useState } from "react";

import type { Product } from "@/types/product";
import { getProducts } from "@/services/products";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return [];

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });
  }, [products, query]);

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