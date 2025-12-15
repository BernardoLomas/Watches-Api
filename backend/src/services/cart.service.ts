import { prisma } from '../lib/prisma'
import { CartItemDTO } from '../dtos/cart.dto'

export class CartService {
    static validateQuantity(quantity: number) {
        if(quantity < 1 || quantity > 10) {
            throw new Error('The quantity must be between 1 and 10!')
        }
    }

    static async addItem(item: CartItemDTO) {
        this.validateQuantity(item.quantity)

        const product = await prisma.product.findUnique({
            where: { id: item.productId }
        })

        if(!product) {
            throw new Error('Product not found!')
        }

        return {
            product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity
        }
    }

    static async updateItem(item: CartItemDTO){
        this.validateQuantity(item.quantity)

        const product = await prisma.product.findUnique({
            where: { id: item.productId }
        })

        if(!product){
            throw new Error('Product not found!')
        }

        return {
            product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity
        }
    }
}