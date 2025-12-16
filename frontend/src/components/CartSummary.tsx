import { useCart } from '../context/CartContext'

export default function CartSummary() {
  const { items } = useCart()

  const total = items.reduce((sum, item) => sum + item.subtotal, 0)

  return (
    <div style={{ marginTop: 24 }}>
      <h2>Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item, index) => (
        <div key={index}>
          {item.product.name} x {item.quantity}
        </div>
      ))}

      <strong>Total: R$ {total.toFixed(2)}</strong>
    </div>
  )
}
