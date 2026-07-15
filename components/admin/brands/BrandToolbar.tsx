export default function BrandToolbar() {
    return (
        <div className="flex items-center justify-between">

            <div>
                <h1 className="text-3xl font-bold">
                    Marcas
                </h1>

                <p className="text-gray-500 mt-1">
                    Administra las marcas de JM-STORE.
                </p>
            </div>

            <button
                className="
                    rounded-lg
                    bg-black
                    px-4
                    py-2
                    text-white
                    hover:bg-neutral-800
                "
            >
                Nueva marca
            </button>

        </div>
    );
}