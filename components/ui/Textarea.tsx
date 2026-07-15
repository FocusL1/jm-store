"use client";

import { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;

  error?: string;

}

export default function Textarea({

  label,

  error,

  className = "",

  ...props

}: TextareaProps) {

  return (

    <div className="space-y-2">

      {label && (

        <label className="block text-sm font-medium text-zinc-300">

          {label}

        </label>

      )}

      <textarea

        {...props}

        className={`
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-800
          px-4
          py-3
          text-white
          outline-none
          resize-none
          transition
          focus:border-yellow-400
          ${className}
        `}

      />

      {error && (

        <p className="text-sm text-red-500">

          {error}

        </p>

      )}

    </div>

  );

}