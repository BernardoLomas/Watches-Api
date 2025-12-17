import { useCart } from "../context/CartContext";
import CartSummary from "../components/CartSummary";

interface Props {
  onBack: () => void;
}

export default function Checkout({ onBack }: Props) {
  const { checkout, items } = useCart();

  async function handleCheckout() {
    try {
      await checkout();
      alert("Order succesfully placed!");
      onBack();
    } catch {
      alert("Failed to place order!");
    }
  }

  if (items.length === 0) {
    return <p>Your cart is empty</p>;
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
