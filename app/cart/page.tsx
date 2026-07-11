"use client";

import Header from "@/components/layout/Header";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const totalProducts = cart.length;

  const totalUnits = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <main className="bg-black min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-yellow-400">
            Mi carrito
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Revisa tus productos antes de finalizar la compra.
          </p>

          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 mt-12">

              {/* Productos */}

              <div className="lg:col-span-2 space-y-6">

                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

              {/* Resumen */}

              <CartSummary
                totalProducts={totalProducts}
                totalUnits={totalUnits}
                subtotal={subtotal}
              />

            </div>
          )}

        </div>
      </main>
    </>
  );
}