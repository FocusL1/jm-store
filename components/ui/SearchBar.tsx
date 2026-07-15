"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
}

export default function SearchBar({
  value,
  placeholder = "Buscar...",
  onChange,
  onClear,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          py-3
          pl-11
          pr-11
          text-white
          placeholder:text-zinc-500
          outline-none
          transition
          focus:border-yellow-400
        "
      />

      {value && (

        <button
          onClick={onClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-zinc-400
            hover:text-white
          "
        >

          <X size={18} />

        </button>

      )}

    </div>
  );
}