"use client";

import { useState } from "react";

const brands = [
  "Sony",
  "Microsoft",
  "Nintendo",
  "Apple",
  "Samsung",
  "JBL",
  "Logitech",
  "Asus",
  "HP",
  "Lenovo",
];

const categories = [
  "Gaming",
  "Computadores",
  "Celulares",
  "Audio",
  "Monitores",
  "Periféricos",
  "Smart Home",
  "Hogar",
];

export default function ProductForm() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [stock, setStock] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const [featured, setFeatured] = useState(false);
  const [flash, setFlash] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [active, setActive] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      name,
      slug,
      description,
      brand,
      category,
      price,
      oldPrice,
      stock,
      image,
      featured,
      flash,
      bestSeller,
      isNew,
      active,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-gray-300">
            Nombre
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Slug
          </label>

          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-300">
            Descripción
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Marca
          </label>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          >
            <option value="">Seleccione una marca</option>

            {brands.map((brand) => (
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Categoría
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          >
            <option value="">Seleccione una categoría</option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Precio
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Precio anterior
          </label>

          <input
            type="number"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Stock
          </label>

          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Imagen
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.length) {
                setImage(e.target.files[0]);
              }
            }}
            className="block w-full text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:px-4 file:py-2 file:font-bold file:text-black hover:file:bg-yellow-300"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-5 gap-4">

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Destacado
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={flash}
            onChange={(e) => setFlash(e.target.checked)}
          />
          Flash
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={bestSeller}
            onChange={(e) => setBestSeller(e.target.checked)}
          />
          Best Seller
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={isNew}
            onChange={(e) => setIsNew(e.target.checked)}
          />
          Nuevo
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Activo
        </label>

      </div>

      <button
        type="submit"
        className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
      >
        Guardar producto
      </button>
    </form>
  );
}