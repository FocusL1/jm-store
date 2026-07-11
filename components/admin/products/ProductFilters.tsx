export default function ProductFilters() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Buscar producto..."
          className="
            bg-zinc-950
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:border-yellow-400
          "
        />

        <select
          className="
            bg-zinc-950
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:border-yellow-400
          "
        >
          <option>Todas las categorías</option>
        </select>

        <select
          className="
            bg-zinc-950
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:border-yellow-400
          "
        >
          <option>Todas las marcas</option>
        </select>

        <select
          className="
            bg-zinc-950
            border
            border-zinc-700
            rounded-xl
            px-4
            py-3
            text-white
            focus:outline-none
            focus:border-yellow-400
          "
        >
          <option>Todos los estados</option>
          <option>Activos</option>
          <option>Inactivos</option>
        </select>

      </div>

    </div>
  );
}