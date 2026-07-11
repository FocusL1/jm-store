"use client";

import { useState } from "react";

import { Product } from "@/data/types";

import { useCart } from "@/context/CartContext";

import Price from "./Price";
import Rating from "./Rating";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";
import FavoriteButton from "./FavoriteButton";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAddToCart() {
    addToCart(product, quantity);

    alert(
      `${quantity} unidad(es) de "${product.name}" agregadas al carrito.`
    );
  }

  return (
    <div>

      {/* Marca */}

      <p className="text-yellow-400 font-semibold text-lg">
        {product.brand}
      </p>

      {/* Nombre + Favorito */}

      <div className="flex items-start justify-between mt-3">

        <h1 className="text-5xl font-bold text-white">
          {product.name}
        </h1>

        <FavoriteButton product={product} />

      </div>

      {/* Rating */}

      <Rating
        rating={product.rating}
        reviews={product.reviews}
      />

      {/* Precio */}

      <Price
        price={product.price}
        oldPrice={product.oldPrice}
        discount={product.discount}
      />

      {/* Stock */}

      <div className="mt-8">
        {product.stock > 0 ? (
          <p className="text-green-400 font-semibold">
            ✓ Disponible ({product.stock} unidades)
          </p>
        ) : (
          <p className="text-red-500 font-semibold">
            Agotado
          </p>
        )}
      </div>

      {/* Cantidad */}

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

      {/* Descripción */}

      <div className="mt-10">

        <h2 className="text-white text-xl font-semibold mb-4">
          Descripción
        </h2>

        <p className="text-gray-300 leading-8">
          {product.description}
        </p>

      </div>

      {/* Botones */}

      <ProductActions
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}