"use client";

import { useEffect, useState } from "react";
import { updateCategory } from "@/services/categories";
import { Category } from "@/types";

interface Props {
  open: boolean;
  category: Category | null;
  onClose: () => void;
  onUpdated: () => void;
}

export default function EditCategoryModal({
  open,
  category,
  onClose,
  onUpdated,
}: Props) {

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [active, setActive] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {

    if (!category) return;

    setName(category.name);
    setSlug(category.slug);
    setDescription(category.description ?? "");
    setFeatured(category.featured);
    setActive(category.active);

  }, [category]);

  if (!open || !category) return null;

  async function handleSave() {

    try {

      setSaving(true);

      await updateCategory(category!.id, {
        name,
        slug,
        description,
        featured,
        active,
      });

      alert("Categoría actualizada correctamente.");

      onUpdated();

    } catch (error) {

      console.error(error);

      alert("No fue posible actualizar la categoría.");

    } finally {

      setSaving(false);

    }

  }

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 rounded-2xl w-full max-w-2xl border border-zinc-700 shadow-2xl">

        <div className="border-b border-zinc-800 px-8 py-6">

          <h2 className="text-2xl font-bold text-yellow-400">
            Editar categoría
          </h2>

        </div>

        <div className="p-8 space-y-6">

          <div>

            <label className="block mb-2 text-zinc-300">
              Nombre
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                px-4
                py-3
                text-white
                focus:outline-none
                focus:border-yellow-400
              "
            />

          </div>

          <div>

            <label className="block mb-2 text-zinc-300">
              Slug
            </label>

            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="
                w-full
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                px-4
                py-3
                text-white
                focus:outline-none
                focus:border-yellow-400
              "
            />

          </div>

          <div>

            <label className="block mb-2 text-zinc-300">
              Descripción
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                w-full
                rounded-xl
                bg-zinc-800
                border
                border-zinc-700
                px-4
                py-3
                text-white
                resize-none
                focus:outline-none
                focus:border-yellow-400
              "
            />

          </div>

          <div className="flex gap-8">

            <label className="flex items-center gap-3 text-white">

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />

              Destacada

            </label>

            <label className="flex items-center gap-3 text-white">

              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />

              Activa

            </label>

          </div>

        </div>

        <div className="flex justify-end gap-4 border-t border-zinc-800 px-8 py-6">

          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-xl
              bg-zinc-700
              hover:bg-zinc-600
              text-white
            "
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            disabled={saving}
            className="
              px-6
              py-3
              rounded-xl
              bg-yellow-400
              hover:bg-yellow-300
              disabled:opacity-60
              text-black
              font-bold
            "
          >
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>

        </div>

      </div>

    </div>

  );

}