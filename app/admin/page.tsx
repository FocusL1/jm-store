"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface DashboardStats {
  products: number;
  orders: number;
  users: number;
  sales: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    products: 0,
    orders: 0,
    users: 0,
    sales: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    setLoading(true);

    const { count: products } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    // Estas tablas las conectaremos después
    const orders = 0;
    const users = 0;
    const sales = 0;

    setStats({
      products: products ?? 0,
      orders,
      users,
      sales,
    });

    setLoading(false);
  }

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

            {loading
              ? "..."
              : stats.products}

          </p>

        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <h2 className="text-gray-400">
            Pedidos
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">

            {loading
              ? "..."
              : stats.orders}

          </p>

        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <h2 className="text-gray-400">
            Clientes
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">

            {loading
              ? "..."
              : stats.users}

          </p>

        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

          <h2 className="text-gray-400">
            Ventas
          </h2>

          <p className="text-5xl font-bold text-yellow-400 mt-4">

            ${loading
              ? "..."
              : stats.sales}

          </p>

        </div>

      </div>

    </div>
  );
}