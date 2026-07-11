import {
  Laptop,
  Smartphone,
  Gamepad2,
  Headphones,
  Watch,
  House,
  Camera,
  Car,
} from "lucide-react";

const categories = [
  {
    title: "Computadores",
    icon: Laptop,
  },
  {
    title: "Celulares",
    icon: Smartphone,
  },
  {
    title: "Gaming",
    icon: Gamepad2,
  },
  {
    title: "Audio",
    icon: Headphones,
  },
  {
    title: "Smartwatch",
    icon: Watch,
  },
  {
    title: "Hogar",
    icon: House,
  },
  {
    title: "Cámaras",
    icon: Camera,
  },
  {
    title: "Accesorios",
    icon: Car,
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Explora nuestras categorías
        </h2>

        <p className="text-center text-gray-400 mb-14 text-lg">
          Todo lo que necesitas en tecnología, videojuegos y hogar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-300 cursor-pointer"
              >
                <Icon
                  size={55}
                  className="text-yellow-400 mb-5"
                />

                <h3 className="text-white text-xl font-semibold">
                  {category.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}