"use client";

import { useState } from "react";

import Modal from "@/components/ui/Modal";
import ProductForm from "./ProductForm";

export default function ProductToolbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        <div>

          <h1 className="text-4xl font-bold text-yellow-400">
            Productos
          </h1>

          <p className="text-gray-400 mt-2">
            Administra todos los productos de JM-STORE.
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            font-bold
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          + Nuevo producto
        </button>

      </div>

      <Modal
        open={open}
        title="Nuevo producto"
        onClose={() => setOpen(false)}
      >
        <ProductForm />
      </Modal>

    </>
  );
}