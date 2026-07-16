"use client";

import { useState } from "react";

import type { Product } from "@/types/product";

import { useCart } from "@/context/CartContext";

import Price from "./Price";
import Rating from "./Rating";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  function increaseQuantity() {
    setQuantity((q) => q + 1);
  }

  function decreaseQuantity() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function handleAddToCart() {
    addToCart(product, quantity);

    alert(
      `${quantity} unidad(es) agregadas al carrito`
    );
  }

  return (
    <div>

      <p className="text-yellow-400 font-semibold text-lg">
        {product.brand}
      </p>

      <div className="flex justify-between items-start mt-3">

        <h1 className="text-5xl font-bold text-white">
          {product.name}
        </h1>

        <FavoriteButton product={product} />

      </div>

      <Rating
        rating={product.rating}
        reviews={product.reviews}
      />

      <Price
        price={product.price}
        oldPrice={product.old_price ?? undefined}
        discount={product.discount}
      />

      <div className="mt-8">

        {product.stock > 0 ? (
          <p className="text-green-400">
            ✓ Disponible ({product.stock})
          </p>
        ) : (
          <p className="text-red-500">
            Agotado
          </p>
        )}

      </div>

      <div className="mt-8">

        <h3 className="text-white font-semibold mb-4">
          Cantidad
        </h3>

        <QuantitySelector
          quantity={quantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />

      </div>

      <div className="mt-10">

        <h2 className="text-white text-xl font-semibold mb-4">
          Descripción
        </h2>

        <p className="text-gray-300 leading-8">
          {product.description}
        </p>

      </div>

      <ProductActions
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}