"use client";

import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

interface ToastProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export default function Toast({
  open,
  message,
  type = "success",
  onClose,
}: ToastProps) {
  if (!open) return null;

  const styles = {
    success: {
      icon: <CheckCircle2 size={22} />,
      color: "bg-green-600",
    },
    error: {
      icon: <AlertCircle size={22} />,
      color: "bg-red-600",
    },
    info: {
      icon: <Info size={22} />,
      color: "bg-blue-600",
    },
  };

  return (
    <div className="fixed top-6 right-6 z-[100] animate-in fade-in slide-in-from-top-4">

      <div
        className={`
          flex
          items-center
          gap-4
          rounded-xl
          px-6
          py-4
          shadow-2xl
          text-white
          ${styles[type].color}
        `}
      >
        {styles[type].icon}

        <span className="font-medium">
          {message}
        </span>

        <button
          onClick={onClose}
          className="ml-2 opacity-80 hover:opacity-100"
        >
          <X size={18} />
        </button>

      </div>

    </div>
  );
}