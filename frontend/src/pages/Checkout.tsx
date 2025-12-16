import { useCart } from '../context/CartContext'

export default function Checkout() {
    const { items, checkout } = useCart()

    const total = items.reduce((sum, item) => sum + item.subtotal, 0)

    async function handleCheckout() {
        await checkout()
        alert('Order succesfully placed!')
    }

    if(items.length === 0) {
        return <p style={{ padding: 24 }}>Cart is empty!</p>
    }

    return (
        <div style={{ padding: 24 }}>
            <h1>Checkout</h1>

            {items.map((item, index) => (
                <div key={index}>
                    {item.product.name} x {item.quantity}
                </div>
            ))}

            <strong>Total: R$ {total.toFixed(2)}</strong>

            <div style={{ marginTop: 16 }}>
                <button onClick={handleCheckout}>Finish order</button>
            </div>
        </div>
    )
}