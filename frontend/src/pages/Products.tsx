import { useEffect, useState } from "react";
import { api } from "../api/http";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import Checkout from "./Checkout";
import { useToast } from "../context/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"products" | "checkout">("products");
  const { showToast } = useToast();
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        const response = await api.get<Product[]>("/products");
        if (isMounted) {
          setProducts(response.data);
          setCurrentPage(1);
        }
      } catch {
        showToast("Failed to load products!", "error");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  if (view === "checkout") {
    return <Checkout onBack={() => setView("products")} />;
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="app-shell">
      <Navbar onCartClick={() => setView("checkout")} />

      <main className="app-main">
        <div className="container">
          {loading ? (
            <p className="loading">Loading products...</p>
          ) : (
            <>
              <section className="products-grid">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </section>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    Prev
                  </button>

                  <span>
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
