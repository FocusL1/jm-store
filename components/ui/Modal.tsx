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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-6">

      <div className="flex min-h-full items-center justify-center">

        <div
          className={`
            w-full
            ${sizes[size]}
            max-h-[90vh]
            overflow-hidden
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            shadow-2xl
            flex
            flex-col
          `}
        >

          {/* Encabezado */}

          <div className="border-b border-zinc-800 px-8 py-6 flex-shrink-0">

            <h2 className="text-2xl font-bold text-yellow-400">
              {title}
            </h2>

          </div>

          {/* Contenido */}

          <div className="flex-1 overflow-y-auto p-8">

            {children}

          </div>

          {/* Pie */}

          <div className="flex justify-end gap-4 border-t border-zinc-800 px-8 py-6 flex-shrink-0">

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

    </div>
  );
}