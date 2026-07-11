"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/data/types";

interface FavoritesContextType {
  favorites: Product[];

  addFavorite: (product: Product) => void;

  removeFavorite: (id: number) => void;

  isFavorite: (id: number) => boolean;
}

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(product: Product) {
    setFavorites((current) => {
      if (
        current.some(
          (item) => item.id === product.id
        )
      ) {
        return current;
      }

      return [...current, product];
    });
  }

  function removeFavorite(id: number) {
    setFavorites((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }

  function isFavorite(id: number) {
    return favorites.some(
      (item) => item.id === id
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context =
    useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider"
    );
  }

  return context;
}