import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center bg-gradient-to-r from-yellow-500/10 to-zinc-900 border border-yellow-500 rounded-3xl overflow-hidden p-10">

          {/* Texto */}

          <div>

            <span className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full mb-6">
              🔥 OFERTA ESPECIAL
            </span>

            <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Hasta
              <span className="text-yellow-400"> 40% OFF </span>
              en tecnología gamer
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              Aprovecha descuentos exclusivos en computadores,
              consolas, celulares, accesorios y mucho más.
              Solo por tiempo limitado.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-bold text-lg px-8 py-4 rounded-xl">
              Comprar ahora
            </button>

          </div>

          {/* Imagen */}

          <div className="relative h-[450px]">

            <Image
              src="/images/banners/banner2.jpg"
              alt="Oferta JM STORE"
              fill
              className="object-cover rounded-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}