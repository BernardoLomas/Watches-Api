import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { items, removeFromCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {items.length === 0 && <p>cart is empty</p>}

      {items.map((item) => (
        <div className="cart-item" key={item.product.id}>
          <span>
            {item.product.name} x {item.quantity}
          </span>

          <button
            onClick={() => removeFromCart(item.product.id)}
            style={{
              background: "transparent",
              color: "#e81118",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && <strong>Total: R$ {total.toFixed(2)}</strong>}
    </div>
  );
}
