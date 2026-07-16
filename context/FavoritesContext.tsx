"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/types/product";

interface FavoritesContextType {
  favorites: Product[];

  addFavorite: (product: Product) => void;

  removeFavorite: (id: string) => void;

  isFavorite: (id: string) => boolean;
}

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites");

      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Error cargando favoritos:", error);
      localStorage.removeItem("favorites");
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

  function removeFavorite(id: string) {
    setFavorites((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  }

  function isFavorite(id: string) {
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