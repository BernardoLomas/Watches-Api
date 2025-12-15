import { useEffect, useState } from 'react'
import { api } from '../api/http'
import type { Product } from '../types/product'

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        async function load() {
            try {
                setLoading(true)
                setError(null)

                const response = await api.get<Product[]>('/products')
                if (isMounted) setProducts(response.data)
            } catch (erro: any) {
                if (isMounted) {
                    setError(erro?.message ?? 'Failed to load products')
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        load()

        return () => {
            isMounted = false
        }
    }, [])

    if (loading) return <div style={{ padding: 24 }}>Loading...</div>
    if (error) return <div style= {{ padding: 24 }}>Error: {error}</div>

    return (
        <div style={{ padding: 24 }}>
            <h1>Products</h1>

            <ul style={{ marginTop: 16 }}>
                {products.map((p) => (
                    <li key={p.id} style={{ marginBottom: 12}}>
                        <strong>{p.name}</strong> - R$ {p.price.toFixed(2)}
                        <div>{p.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}