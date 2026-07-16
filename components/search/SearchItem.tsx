"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface Props {
  product: Product;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function SearchItem({
  product,
}: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex items-center gap-4 p-4 hover:bg-zinc-800 transition rounded-xl"
    >
      <div className="relative w-16 h-16 bg-black rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1">
        <p className="text-yellow-400 text-sm">
          {product.brand}
        </p>

        <h3 className="text-white font-semibold">
          {product.name}
        </h3>

        <p className="text-yellow-300 font-bold mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}