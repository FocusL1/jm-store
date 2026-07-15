"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;

  onClose: () => void;

  footer?: ReactNode;

  size?: "sm" | "md" | "lg" | "xl";
}

export default function Modal({
  open,
  title,
  children,
  onClose,
  footer,
  size = "lg",
}: ModalProps) {

  if (!open) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div
        className={`
          w-full
          ${sizes[size]}
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900
          shadow-2xl
        `}
      >

        <div className="border-b border-zinc-800 px-8 py-6">

          <h2 className="text-2xl font-bold text-yellow-400">

            {title}

          </h2>

        </div>

        <div className="p-8">

          {children}

        </div>

        <div className="flex justify-end gap-4 border-t border-zinc-800 px-8 py-6">

          {footer ? (

            footer

          ) : (

            <Button
              variant="secondary"
              onClick={onClose}
            >
              Cerrar
            </Button>

          )}

        </div>

      </div>

    </div>

  );

}