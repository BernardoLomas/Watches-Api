import { prisma } from '../lib/prisma'

export class ProductService {
    static async list() {
        return prisma.product.findMany()
    }
}

