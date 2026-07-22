"use client";

import { useEffect, useState } from "react";

import ImageUploader from "./ImageUploader";

import { createProduct, updateProduct } from "@/services/products";
import type { Product } from "@/types/product";

interface ProductFormProps {
  product?: Product | null;
  onSuccess?: () => void;
}

export default function ProductForm({
  product,
  onSuccess,
}: ProductFormProps) {
  const isEditing = !!product;

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [stock, setStock] = useState("");

  const [image, setImage] = useState("");

  const [featured, setFeatured] = useState(false);
  const [flash, setFlash] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [active, setActive] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) return;

    setName(product.name);
    setSlug(product.slug);
    setDescription(product.description ?? "");

    setBrand(product.brand);
    setCategory(product.category);

    setPrice(product.price.toString());

    setOldPrice(
      product.old_price
        ? product.old_price.toString()
        : ""
    );

    setStock(product.stock.toString());

    setImage(product.image);

    setFeatured(product.featured);
    setFlash(product.flash);

    setBestSeller(product.best_seller);

    setIsNew(product.is_new);

    setActive(product.active);
  }, [product]);
    async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      !name ||
      !slug ||
      !brand ||
      !category ||
      !price ||
      !stock ||
      !image
    ) {
      alert(
        "Debes completar todos los campos obligatorios."
      );
      return;
    }

    try {
      setLoading(true);

      const data = {
        name,
        slug,
        description,

        brand,
        category,

        image,
        images: [],

        price: Number(price),

        old_price:
          oldPrice === ""
            ? null
            : Number(oldPrice),

        stock: Number(stock),

        discount: 0,

        rating: 0,

        reviews: 0,

        featured,

        featured_order: 0,

        flash,

        flash_order: 0,

        best_seller: bestSeller,

        is_new: isNew,

        active,

        free_shipping: false,

        sold: 0,

        views: 0,
      };

      if (isEditing) {
        await updateProduct(product!.id, data);

        alert(
          "Producto actualizado correctamente."
        );
      } else {
        await createProduct(data);

        alert(
          "Producto creado correctamente."
        );

        setName("");
        setSlug("");
        setDescription("");

        setBrand("");
        setCategory("");

        setPrice("");
        setOldPrice("");
        setStock("");

        setImage("");

        setFeatured(false);
        setFlash(false);
        setBestSeller(false);
        setIsNew(false);
        setActive(true);
      }

      onSuccess?.();

    } catch (error) {

      console.error(error);

      alert(
        "No fue posible guardar el producto."
      );

    } finally {

      setLoading(false);

    }
  }
    return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-gray-300">
            Nombre
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-gray-300">
            Slug
          </label>

          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-gray-300">
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
          <label className="mb-2 block text-gray-300">
            Marca
          </label>

          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-gray-300">
            Categoría
          </label>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-gray-300">
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
          <label className="mb-2 block text-gray-300">
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
          <label className="mb-2 block text-gray-300">
            Stock
          </label>

          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <ImageUploader
            value={image}
            onChange={setImage}
          />
        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-5">

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              setFeatured(e.target.checked)
            }
          />
          Destacado
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={flash}
            onChange={(e) =>
              setFlash(e.target.checked)
            }
          />
          Flash
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={bestSeller}
            onChange={(e) =>
              setBestSeller(e.target.checked)
            }
          />
          Best Seller
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={isNew}
            onChange={(e) =>
              setIsNew(e.target.checked)
            }
          />
          Nuevo
        </label>

        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) =>
              setActive(e.target.checked)
            }
          />
          Activo
        </label>

      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-50"
        >
          {loading
            ? isEditing
              ? "Actualizando..."
              : "Guardando..."
            : isEditing
              ? "Actualizar producto"
              : "Guardar producto"}
        </button>
      </div>

    </form>
  );
}