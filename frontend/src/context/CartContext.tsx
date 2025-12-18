import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";
import { api } from "../api/http";
import { useToast } from "./ToastContext";

interface CartItem {
  product: Product;
  quantity: number;
  subtotal: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  checkout: () => Promise<void>;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { showToast } = useToast();

  async function addToCart(product: Product) {
    try {
      const existing = items.find((i) => i.product.id === product.id);

      if (existing) {
        setItems((prev) =>
          prev.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  subtotal: (item.quantity + 1) * item.product.price,
                }
              : item
          )
        );
        showToast("Item quantity updated!", "success");
        return;
      }

      await api.post("/cart/items", {
        productId: product.id,
        quantity: 1,
      });

      setItems((prev) => [
        ...prev,
        {
          product,
          quantity: 1,
          subtotal: product.price,
        },
      ]);

      showToast("Item added to cart!", "success");
    } catch {
      showToast("Failed to add item to cart!", "error");
    }
  }

  async function checkout() {
    try {
      await api.post("/checkout", {
        items: items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      });

      setItems([]);
      showToast("Order placed successfully!", "success");
    } catch {
      showToast("Checkout failed!", "error");
    }
  }

  function removeFromCart(productId: number) {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast("Item removed from cart!", "success");
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, checkout, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
