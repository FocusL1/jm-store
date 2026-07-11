export default function Brands() {
  const brands = [
    "Apple",
    "Samsung",
    "ASUS",
    "Sony",
    "Logitech",
    "MSI",
    "JBL",
    "PlayStation",
  ];

  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Nuestras marcas
        </h2>

        <p className="text-center text-gray-400 text-lg mb-14">
          Trabajamos con las mejores marcas del mundo para garantizar calidad,
          innovación y confianza.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {brands.map((brand) => (

            <div
              key={brand}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl py-10 flex items-center justify-center hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.20)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white hover:text-yellow-400 transition">
                {brand}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}