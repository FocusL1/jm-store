"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];

  addToCart: (
    product: Product,
    quantity: number
  ) => void;

  removeFromCart: (
    productId: string
  ) => void;

  increaseQuantity: (
    productId: string
  ) => void;

  decreaseQuantity: (
    productId: string
  ) => void;
}

const CartContext =
  createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({
  children,
}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(
        "jm-store-cart"
      );

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error(
        "Error cargando carrito:",
        error
      );

      localStorage.removeItem(
        "jm-store-cart"
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "jm-store-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(
    product: Product,
    quantity: number
  ) {
    setCart((current) => {
      const exists = current.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity,
        },
      ];
    });
  }

  function removeFromCart(
    productId: string
  ) {
    setCart((current) =>
      current.filter(
        (item) => item.id !== productId
      )
    );
  }

  function increaseQuantity(
    productId: string
  ) {
    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(
    productId: string
  ) {
    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe usarse dentro de CartProvider"
    );
  }

  return context;
}