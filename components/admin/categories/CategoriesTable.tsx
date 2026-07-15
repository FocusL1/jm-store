"use client";

import { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  getCategories,
  deleteCategory,
} from "@/services/categories";

import { Category } from "@/types";

import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

export default function CategoriesTable() {

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [modalOpen, setModalOpen] =
    useState(false);

  const [deleteModalOpen, setDeleteModalOpen] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  async function handleDelete() {

    if (!selectedCategory) return;

    try {

      setDeleting(true);

      await deleteCategory(selectedCategory.id);

      alert("Categoría eliminada correctamente.");

      setDeleteModalOpen(false);

      setSelectedCategory(null);

      loadCategories();

    } catch (error) {

      console.error(error);

      alert("No fue posible eliminar la categoría.");

    } finally {

      setDeleting(false);

    }

  }

  return (
    <>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">

        <table className="w-full">

          <thead className="bg-zinc-800 text-zinc-300 uppercase text-sm">

            <tr>

              <th className="px-6 py-4 text-left">
                Categoría
              </th>

              <th className="px-6 py-4 text-left">
                Slug
              </th>

              <th className="px-6 py-4 text-center">
                Destacada
              </th>

              <th className="px-6 py-4 text-center">
                Activa
              </th>

              <th className="px-6 py-4 text-center">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.map((category) => (

              <tr
                key={category.id}
                className="border-t border-zinc-800 hover:bg-zinc-800 transition"
              >

                <td className="px-6 py-4 text-white font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-4 text-zinc-400">
                  {category.slug}
                </td>

                <td className="text-center">

                  {category.featured ? (

                    <CheckCircle2
                      size={20}
                      className="mx-auto text-green-500"

                    />

                  ) : (

                    <XCircle
                      size={20}
                      className="mx-auto text-zinc-500"

                    />

                  )}

                </td>

                <td className="text-center">

                  {category.active ? (

                    <CheckCircle2
                      size={20}
                      className="mx-auto text-green-500"

                    />

                  ) : (

                    <XCircle

                      size={20}

                      className="mx-auto text-red-500"

                    />

                  )}

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">                     
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setModalOpen(true);
                      }}
                      className="text-yellow-400 hover:text-yellow-300 transition"

                    >

                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => {

                        setSelectedCategory(category);

                        setDeleteModalOpen(true);

                      }}

                      className="text-red-500 hover:text-red-400 transition"

                    >
                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <EditCategoryModal
        open={modalOpen}
        category={selectedCategory}
        onClose={() => {
          setModalOpen(false);
        }}
        onUpdated={() => {
          loadCategories();
          setModalOpen(false);
        }}
      />

      <DeleteCategoryModal
        open={deleteModalOpen}
        category={selectedCategory}
        onClose={() => {
          setDeleteModalOpen(false);
        }}
        onConfirm={handleDelete}
        deleting={deleting}
      />

    </>

  );

}