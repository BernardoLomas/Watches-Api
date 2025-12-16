import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="card-footer">
        <strong>R$ {product.price.toFixed(2)}</strong>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}
