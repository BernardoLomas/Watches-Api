import { useCart } from "../context/CartContext";

interface Props {
  showRemove?: boolean;
}

export default function CartSummary({ showRemove = false }: Props) {
  const { items, removeFromCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="cart-summary">
      <h2>Cart</h2>

      {items.length === 0 && <p className="empty-cart">Cart is empty</p>}

      {items.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div className="cart-item-info">
            <span className="cart-item-name">{item.product.name}</span>
            <span className="cart-item-qty"> | Quantity: {item.quantity}</span>
          </div>

          <div className="cart-item-actions">
            <span className="cart-item-price">
              R$ {item.subtotal.toFixed(2)}
            </span>

            {showRemove && (
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="cart-total">
          <strong>Total</strong>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}
