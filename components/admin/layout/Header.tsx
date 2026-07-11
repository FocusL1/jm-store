export default function Header() {
  return (
    <header className="h-24 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-10">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Panel de Administración
        </h1>

        <p className="text-gray-400 mt-1">
          Gestión completa de JM-STORE
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">
          J
        </div>

      </div>

    </header>
  );
}