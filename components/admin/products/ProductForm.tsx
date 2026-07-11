"use client";

import { useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    old_price: "",
    stock: "",
    image: "",
    featured: false,
    active: true,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const target = e.target;

    const value =
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 text-white">
            Nombre
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="block mb-2 text-white">
            Slug
          </label>

          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />
        </div>

      </div>

      <div>

        <label className="block mb-2 text-white">
          Descripción
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 text-white">
            Marca
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />

        </div>

        <div>

          <label className="block mb-2 text-white">
            Categoría
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div>

          <label className="block mb-2 text-white">
            Precio
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />

        </div>

        <div>

          <label className="block mb-2 text-white">
            Precio anterior
          </label>

          <input
            type="number"
            name="old_price"
            value={formData.old_price}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />

        </div>

        <div>

          <label className="block mb-2 text-white">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
          />

        </div>

      </div>

      <div>

        <label className="block mb-2 text-white">
          Imagen
        </label>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
        />

      </div>

      <div className="flex gap-10">

        <label className="flex items-center gap-3 text-white">

          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />

          Producto destacado

        </label>

        <label className="flex items-center gap-3 text-white">

          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleChange}
          />

          Activo

        </label>

      </div>

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg"
      >
        Guardar producto
      </button>

    </form>
  );
}