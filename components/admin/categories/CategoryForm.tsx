"use client";

import { useState } from "react";
import { createCategory } from "@/services/categories";

export default function CategoryForm() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [featured, setFeatured] = useState(false);
    const [active, setActive] = useState(true);

    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        setLoading(true);

        try {

            await createCategory({

                name,

                slug: name
                    .trim()
                    .toLowerCase()
                    .replace(/\s+/g, "-"),

                description,

                featured,

                active,

            });

            alert("Categoría creada correctamente.");

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert("Ocurrió un error.");

        }

        setLoading(false);

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 rounded-2xl p-8 space-y-6 border border-zinc-700"
        >

            <h2 className="text-2xl font-bold text-yellow-400">
                Nueva categoría
            </h2>

            <div>

                <label className="block mb-2">
                    Nombre
                </label>

                <input
                    className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    required
                />

            </div>

            <div>

                <label className="block mb-2">
                    Descripción
                </label>

                <textarea
                    className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-3"
                    rows={4}
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />

            </div>

            <div className="flex gap-8">

                <label className="flex items-center gap-2">

                    <input
                        type="checkbox"
                        checked={featured}
                        onChange={(e) =>
                            setFeatured(e.target.checked)
                        }
                    />

                    Destacada

                </label>

                <label className="flex items-center gap-2">

                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) =>
                            setActive(e.target.checked)
                        }
                    />

                    Activa

                </label>

            </div>

            <button

                type="submit"

                disabled={loading}

                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-bold"

            >

                {loading
                    ? "Guardando..."
                    : "Guardar categoría"}

            </button>

        </form>

    );

}