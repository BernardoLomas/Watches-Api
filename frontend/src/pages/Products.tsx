import { useEffect, useState } from "react";
import { api } from "../api/http";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import Checkout from "./Checkout";
import { useToast } from "../context/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"products" | "checkout">("products");
  const { items } = useCart();
  const { showToast } = useToast();
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

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

  if (view === "checkout") return <Checkout onBack={() => setView("products")} />;
  if (loading) return <div style={{ padding: 24 }}>Loading...</div>;
  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container">
      <Navbar />

      <header className="filters-bar">
        <div className="filters">
          {/*Lembrar de coloadar os filtros de pesquisa aq depois*/}
        </div>
      </header>

      <section className="products-grid">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </div>
      
      <Footer />
    </div>
  );
}
