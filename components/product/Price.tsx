interface PriceProps {
  price: number;
  oldPrice?: number;
  discount?: number;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Price({
  price,
  oldPrice,
  discount,
}: PriceProps) {
  return (
    <div className="mt-4">

      {oldPrice && (
        <p className="text-gray-500 line-through text-lg">
          {formatPrice(oldPrice)}
        </p>
      )}

      <div className="flex items-center gap-3 mt-1">

        <p className="text-yellow-400 text-3xl font-bold">
          {formatPrice(price)}
        </p>

        {discount && (
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

      </div>

    </div>
  );
}