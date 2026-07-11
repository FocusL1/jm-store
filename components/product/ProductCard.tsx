"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/data/types";

import Price from "./Price";
import Rating from "./Rating";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2">

      {/* Imagen */}

      <div className="relative h-64 bg-black">

        <Link href={`/products/${product.slug}`}>

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </Link>

        {/* Favorito */}

        <div className="absolute top-4 right-4 z-10">
          <FavoriteButton product={product} />
        </div>

      </div>

      {/* Información */}

      <div className="p-5">

        <Link href={`/products/${product.slug}`}>

          <p className="text-yellow-400 text-sm uppercase">
            {product.brand}
          </p>

          <h3 className="text-white text-xl font-semibold mt-2">
            {product.name}
          </h3>

        </Link>

        <Price
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
        />

        <Rating
          rating={product.rating}
          reviews={product.reviews}
        />

        <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
          Agregar al carrito
        </button>

      </div>

    </div>
  );
}