"use client";

interface Props {
    onNewCategory: () => void;
}

export default function CategoryToolbar({
    onNewCategory,
}: Props) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

                <h1 className="text-4xl font-bold text-yellow-400">
                    Categorías
                </h1>

                <p className="text-gray-400 mt-2">
                    Administra todas las categorías de JM-STORE.
                </p>

            </div>

            <button
                onClick={onNewCategory}
                className="
                    bg-yellow-400
                    hover:bg-yellow-300
                    text-black
                    font-bold
                    px-6
                    py-3
                    rounded-xl
                    transition
                "
            >
                + Nueva categoría
            </button>

        </div>
    );
}