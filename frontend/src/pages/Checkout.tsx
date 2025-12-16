import { useCart } from '../context/CartContext'

interface Props {
    onBack: () => void
}

export default function Checkout({ onBack }: Props) {
    const { items, checkout } = useCart()

    const total = items.reduce((sum, item) => sum + item.subtotal, 0)

    async function handleCheckout() {
        await checkout()
        alert('Order succesfully placed!')
        onBack()
    }

    if(items.length === 0) {
        return (
            <div style={{ padding: 24 }}>
                <p>Cart is empty!</p>
                <button onClick={onBack}>Back</button>
            </div>
        )
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
                <button onClick={onBack} style={{ marginLeft: 8 }}>Back</button>
            </div>
        </div>
    )
}