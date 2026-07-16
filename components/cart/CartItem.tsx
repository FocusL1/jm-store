"use client";

import Image from "next/image";

import type { Product } from "@/types/product";

import { useCart } from "@/context/CartContext";

interface CartItemProps {
  product: Product & {
    quantity: number;
  };
}

export default function CartItem({
  product,
}: CartItemProps) {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  function handleRemove() {
    const confirmed = window.confirm(
      `¿Deseas eliminar "${product.name}" del carrito?`
    );

    if (confirmed) {
      removeFromCart(product.id);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex gap-6 items-center">

      <div className="relative w-32 h-32 bg-black rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3"
        />
      </div>

      <div className="flex-1">

        <p className="text-yellow-400 font-semibold">
          {product.brand}
        </p>

        <h2 className="text-white text-2xl font-bold mt-2">
          {product.name}
        </h2>

        <p className="text-yellow-400 text-2xl font-bold mt-4">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </p>

        <div className="flex items-center gap-4 mt-6">

          <button
            onClick={() => decreaseQuantity(product.id)}
            className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-bold transition"
          >
            −
          </button>

          <span className="text-white text-xl font-bold w-8 text-center">
            {product.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(product.id)}
            className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-bold transition"
          >
            +
          </button>

        </div>

      </div>

      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-400 font-bold transition"
      >
        Eliminar
      </button>

    </div>
  );
}