"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>

      {/* Imagen principal */}

      <div className="bg-zinc-900 rounded-3xl p-8">

        <div className="relative h-[550px]">

          <Image
            src={selectedImage}
            alt={productName}
            fill
            priority
            className="object-contain"
          />

        </div>

      </div>

      {/* Miniaturas */}

      <div className="flex gap-4 mt-6 overflow-x-auto">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition
              ${
                selectedImage === image
                  ? "border-yellow-400"
                  : "border-zinc-700 hover:border-yellow-400"
              }`}
          >

            <Image
              src={image}
              alt={`${productName}-${index}`}
              fill
              className="object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}