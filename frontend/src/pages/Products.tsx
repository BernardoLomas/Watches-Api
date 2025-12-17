import { useEffect, useState } from "react";
import { api } from "../api/http";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Checkout from "./Checkout";
import { useToast } from "../context/ToastContext";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"products" | "checkout">("products");
  const { items } = useCart();
  const { showToast } = useToast();

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
          setError(erro?.message ?? "Failed to load products!");
          showToast("Failed to load products!", "error")
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
      <nav className="navbar">
        <strong>Bernardo Lomas Watches</strong>
        <button className="cart-button" onClick={() => setView("checkout")}>
          Cart ({items.length})
        </button>
      </nav>
      <header className="filters-bar">
        <div className="filters">
          {/*Lembrar de coloadar os filtros de pesquisa aq depois*/}
        </div>
      </header>

      <section className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <footer className="footer">
        <p>Bernardo Lomas Watches</p>
        <small> React - NodeJs - Prisma - SQLite</small>
      </footer>
    </div>
  );
}
