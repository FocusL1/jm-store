"use client";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4 mt-8">

      <button
        onClick={onDecrease}
        className="w-10 h-10 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
      >
        −
      </button>

      <span className="text-white text-xl w-8 text-center font-semibold">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="w-10 h-10 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
      >
        +
      </button>

    </div>
  );
}