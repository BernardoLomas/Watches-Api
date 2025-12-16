import { useEffect, useState } from "react";
import { api } from "../api/http";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import Checkout from "./Checkout";
import CartSummary from "../components/CartSummary";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"products" | "checkout">("products");

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get<Product[]>("/products");
        if (isMounted) setProducts(response.data);
      } catch (erro: any) {
        if (isMounted) {
          setError(erro?.message ?? "Failed to load products");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  if (view === "checkout")
    return <Checkout onBack={() => setView("products")} />;
  if (loading) return <div style={{ padding: 24 }}>Loading...</div>;
  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>;

  return (
    <div className="container">
      <div style={{ padding: 24 }}>
        <h1>Products</h1>

        <button onClick={() => setView("checkout")}>Go to checkout</button>

        <div style={{ marginTop: 16 }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <CartSummary />
      </div>
    </div>
  );
}
