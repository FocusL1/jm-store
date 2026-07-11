interface RatingProps {
  rating: number;
  reviews: number;
}

export default function Rating({
  rating,
  reviews,
}: RatingProps) {
  return (
    <div className="flex items-center gap-3 mt-4">

      <span className="text-yellow-400 text-lg">
        ⭐ {rating}
      </span>

      <span className="text-gray-400">
        ({reviews} opiniones)
      </span>

    </div>
  );
}