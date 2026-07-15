"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "primary" | "secondary" | "danger" | "success";

  size?: "sm" | "md" | "lg";

  loading?: boolean;

  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-yellow-400 hover:bg-yellow-300 text-black",

    secondary:
      "bg-zinc-700 hover:bg-zinc-600 text-white",

    danger:
      "bg-red-600 hover:bg-red-500 text-white",

    success:
      "bg-green-600 hover:bg-green-500 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        rounded-xl
        font-bold
        transition-all
        duration-200
        disabled:opacity-60
        disabled:cursor-not-allowed
        shadow-lg
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}