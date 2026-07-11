export default function AdminDashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Bienvenido al panel administrativo de JM-STORE.
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-gray-400">
            Productos
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">
            0
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-gray-400">
            Pedidos
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">
            0
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-gray-400">
            Clientes
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">
            0
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-gray-400">
            Ventas
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">
            $0
          </p>
        </div>

      </div>

    </div>
  );
}