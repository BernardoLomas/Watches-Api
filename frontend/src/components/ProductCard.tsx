import type { Product } from '../types/product'
import { useCart } from '../context/CartContext'

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart()

    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 8,
                marginBottom: 12
            }}
        >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>R$ {product.price.toFixed(2)}</strong>

            <div style={{ marginTop: 8}}>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}