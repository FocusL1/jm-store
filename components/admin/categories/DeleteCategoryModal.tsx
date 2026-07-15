"use client";

import { Category } from "@/types";

interface Props {
  open: boolean;
  category: Category | null;
  onClose: () => void;
  onConfirm: () => void;
  deleting: boolean;
}

export default function DeleteCategoryModal({
  open,
  category,
  onClose,
  onConfirm,
  deleting,
}: Props) {
  if (!open || !category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">

        <div className="border-b border-zinc-800 px-8 py-6">

          <h2 className="text-2xl font-bold text-red-500">
            Eliminar categoría
          </h2>

        </div>

        <div className="space-y-4 p-8">

          <p className="text-zinc-300">
            ¿Seguro que deseas eliminar la categoría?
          </p>

          <div className="rounded-xl border border-red-800 bg-red-950/40 p-4">

            <p className="text-lg font-semibold text-white">
              {category.name}
            </p>

          </div>

          <p className="text-sm text-zinc-500">
            Esta acción no podrá deshacerse.
          </p>

        </div>

        <div className="flex justify-end gap-4 border-t border-zinc-800 px-8 py-6">

          <button
            onClick={onClose}
            disabled={deleting}
            className="rounded-xl bg-zinc-700 px-6 py-3 text-white hover:bg-zinc-600 disabled:opacity-60"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            disabled={deleting}
            className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-500 disabled:opacity-60"
          >
            {deleting ? "Eliminando..." : "Eliminar"}
          </button>

        </div>

      </div>

    </div>
  );
}