"use client";

import { Product } from "@/data/types";
import { useFavorites } from "@/context/FavoritesContext";

interface FavoriteButtonProps {
  product: Product;
}

export default function FavoriteButton({
  product,
}: FavoriteButtonProps) {
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
      aria-label="Favorito"
      className="text-3xl transition-transform hover:scale-110"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}