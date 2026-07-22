"use client";

import { useState } from "react";
import Image from "next/image";

import { uploadImage } from "@/services/storage";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const url = await uploadImage(file);

      onChange(url);

      alert("Imagen subida correctamente.");
    } catch (error) {
      console.error(error);

      alert("Error subiendo la imagen.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">

      <div>

        <label className="block mb-2 font-semibold">
          Imagen del producto
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

      </div>

      {uploading && (
        <p className="text-yellow-500">
          Subiendo imagen...
        </p>
      )}

      {value && (
        <div className="relative w-64 h-64 border rounded-xl overflow-hidden">

          <Image
            src={value}
            alt="Vista previa"
            fill
            className="object-contain"
          />

        </div>
      )}

    </div>
  );
}