import { useCart } from "../context/CartContext";

interface Props {
  onBack: () => void;
}

export default function Checkout({ onBack }: Props) {
  const { items, checkout } = useCart();

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  async function handleCheckout() {
    try {
      await checkout();
      alert("Order succesfully placed!");
      onBack();
    } catch {
      alert("Failed to place order!");
    }
  }

  return (
    <div className="container">
      <h1>Checkout</h1>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.length > 0 && (
        <>
          <div className="checkout-summary">
            {items.map((item) => (
              <div key={item.product.id} className="checkout-item">
                <span>
                  {item.product.name} x {item.quantity}
                </span>
                <span>R$ {item.subtotal.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <strong>Total:</strong>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>

          <div className="checkout-actions">
            <button onClick={handleCheckout}>Confirm Order</button>
            <button onClick={onBack}>Back</button>
          </div>
        </>
      )}
    </div>
  );
}
