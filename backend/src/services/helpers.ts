import { prisma } from '../lib/prisma'

export function validateQuantity(quantity: number) {
    if (quantity < 1 || quantity > 10) {
        throw new Error('Quantity must be between 1 and 10!')
    }
}

export async function getProductOrFail(productId: number) {
    const product = await prisma.product.findUnique({
        where: { id: productId }
    })

    if (!product) {
        throw new Error('Product not found!')
    }

    return product
}