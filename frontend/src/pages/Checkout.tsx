import { useCart } from "../context/CartContext";
import CartSummary from "../components/CartSummary";
import { useToast } from "../context/ToastContext";

interface Props {
  onBack: () => void;
}

export default function Checkout({ onBack }: Props) {
  const { checkout, items } = useCart();
  const { showToast } = useToast();

  async function handleCheckout() {
    try {
      await checkout();
      showToast("Order placed successfully!", "success");
      onBack();
    } catch {
      showToast("Checkout failed!", "error");
    }
  }

  if (items.length === 0) {
    return (
      <div className="container">
        <h1>Checkout</h1>
        <p>Your cart is empty</p>
        <button className="back-btn" onClick={onBack}>Back to products</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Checkout</h1>

      <CartSummary showRemove />

      <div className="checkout-actions">
        <button onClick={handleCheckout}>Confirm Order</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
