import Image from "next/image";

const deals = [
  {
    id: 1,
    name: "MacBook Air M3",
    image: "/images/banners/banner2.jpg",
    price: "$5.499.000",
    oldPrice: "$6.299.000",
    discount: "-13%",
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    image: "/images/banners/banner1.jpg",
    price: "$4.199.000",
    oldPrice: "$4.899.000",
    discount: "-14%",
  },
  {
    id: 3,
    name: "PlayStation 5 Pro",
    image: "/images/banners/banner4.jpg",
    price: "$3.199.000",
    oldPrice: "$3.799.000",
    discount: "-16%",
  },
  {
    id: 4,
    name: "Monitor Curvo MSI",
    image: "/images/banners/banner3.jpg",
    price: "$1.499.000",
    oldPrice: "$1.899.000",
    discount: "-21%",
  },
];

export default function FlashDeals() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <div>

            <span className="text-red-500 font-bold uppercase tracking-widest">
              ⚡ Solo por hoy
            </span>

            <h2 className="text-5xl font-extrabold text-yellow-400 mt-3">
              Ofertas Flash
            </h2>

          </div>

          <div className="mt-8 md:mt-0 flex gap-4">

            <div className="bg-zinc-900 px-5 py-3 rounded-xl border border-yellow-500 text-center">
              <p className="text-3xl font-bold text-yellow-400">08</p>
              <span className="text-gray-400 text-sm">Horas</span>
            </div>

            <div className="bg-zinc-900 px-5 py-3 rounded-xl border border-yellow-500 text-center">
              <p className="text-3xl font-bold text-yellow-400">26</p>
              <span className="text-gray-400 text-sm">Min</span>
            </div>

            <div className="bg-zinc-900 px-5 py-3 rounded-xl border border-yellow-500 text-center">
              <p className="text-3xl font-bold text-yellow-400">59</p>
              <span className="text-gray-400 text-sm">Seg</span>
            </div>

          </div>

        </div>

        {/* Productos */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {deals.map((product) => (

            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(239,68,68,0.25)] transition-all duration-300"
            >

              <div className="relative h-64">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  {product.discount}
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-white text-xl font-semibold mb-4">
                  {product.name}
                </h3>

                <p className="text-gray-500 line-through">
                  {product.oldPrice}
                </p>

                <p className="text-yellow-400 text-3xl font-bold mb-6">
                  {product.price}
                </p>

                <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl transition">
                  Comprar ahora
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}