"use client";

import type { Product } from "@/types/product";

import { useFavorites } from "@/context/FavoritesContext";

interface Props {
  product: Product;
}

export default function FavoriteButton({
  product,
}: Props) {

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(product.id);

  function handleFavorite() {
    if (favorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  }

  return (
    <button
      onClick={handleFavorite}
      className="text-3xl hover:scale-110 transition"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}