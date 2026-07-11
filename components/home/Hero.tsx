import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Ofertas del mes
          </p>

          <h1 className="text-6xl font-bold text-yellow-300 mt-4 leading-tight">
            Tecnología para todos
          </h1>

          <p className="text-gray-300 mt-8 text-xl leading-relaxed">
            Descubre computadores, celulares, videojuegos,
            accesorios y productos para el hogar con los mejores
            precios del mercado.
          </p>

          <button className="mt-10 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition">
            Comprar ahora
          </button>

        </div>

        <div className="flex justify-center">

          <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden border border-yellow-500">

            <Image
              src="/images/banners/banner1.jpg"
              alt="Banner principal"
              width={420}
              height={420}
             className="object-contain w-full h-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}