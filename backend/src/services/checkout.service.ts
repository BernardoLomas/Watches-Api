import { prisma } from '../lib/prisma'
import { CheckoutDTO } from '../dtos/checkout.dto'

export class CheckoutService {
    static validateQuantity(quantity: number) {
        if(quantity < 1 || quantity > 10) {
            throw new Error('Quantity must be between 1 and 10!')
        }
    }

    static async process(checkout: CheckoutDTO) {
        if (!checkout.items || checkout.items.length === 0) {
            throw new Error('The cart is empty!')
        }

        let total = 0

        for (const item of checkout.items) {
            this.validateQuantity(item.quantity)

            const product = await prisma.product.findUnique({
                where: { id: item.productId}
            })

            if(!product) {
                throw new Error(`Product ${item.productId} not found!`)
            }

            total += product.price * item.quantity
        }

        return {
            status: 'Success!',
            message: 'Ordem succesfully placed!',
            total
        }
    }
}