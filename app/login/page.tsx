"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 border border-yellow-500 rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-yellow-400 text-center">
          Iniciar Sesión
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Panel Administrativo JM-STORE
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jmstore556@gmail.com"
              required
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-black font-bold py-3 rounded-xl transition"
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </main>
  );
}