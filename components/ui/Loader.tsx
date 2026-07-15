"use client";

interface LoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export default function Loader({
  text = "Cargando...",
  size = "md",
}: LoaderProps) {

  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-4",
    lg: "h-14 w-14 border-4",
  };

  return (

    <div className="flex flex-col items-center justify-center gap-4 py-10">

      <div
        className={`
          animate-spin
          rounded-full
          border-yellow-400
          border-t-transparent
          ${sizes[size]}
        `}
      />

      <p className="text-sm text-zinc-400">

        {text}

      </p>

    </div>

  );

}