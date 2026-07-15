"use client";

import { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {

  label: string;

}

export default function Checkbox({

  label,

  className = "",

  ...props

}: CheckboxProps) {

  return (

    <label className="flex items-center gap-3 cursor-pointer select-none">

      <input
        type="checkbox"
        {...props}
        className={`
          h-5
          w-5
          rounded
          border-zinc-700
          bg-zinc-800
          text-yellow-400
          focus:ring-yellow-400
          ${className}
        `}
      />

      <span className="text-zinc-200">

        {label}

      </span>

    </label>

  );

}