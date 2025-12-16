import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";
import { api } from "../api/http";

interface CartItem {
  product: Product;
  quantity: number;
  subtotal: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  checkout: () => Promise<void>;
  removeFromCart: (productId: number) => void
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  async function addToCart(product: Product) {
    const response = await api.post("/cart/items", {
      productId: product.id,
      quantity: 1,
    });

    setItems((prev) => [...prev, response.data]);
  }

  async function checkout() {
    await api.post("/checkout", {
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
    });

    setItems([]);
  }

  function removeFromCart(productId: number) {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }

  return (
    <CartContext.Provider value={{ items, addToCart, checkout, removeFromCart }}>
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
