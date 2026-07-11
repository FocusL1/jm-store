"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import CartIcon from "./CartIcon";
import FavoritesIcon from "./FavoritesIcon";

import SearchBar from "@/components/search/SearchBar";

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-yellow-500 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-3">

        {/* Logo */}
        <Logo />

        {/* Navegación */}
        <Navigation />

        {/* Buscador */}
        <div className="w-full max-w-md">
          <SearchBar />
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-6">

          <FavoritesIcon />

          <CartIcon />

          <button
            className="text-3xl hover:scale-110 transition"
            aria-label="Perfil"
          >
            👤
          </button>

        </div>

      </div>

    </header>
  );
}