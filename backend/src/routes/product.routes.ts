import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'

/**
 * @swagger
 * /products:
 *  get:
 *    summary: List all products
 *    tags: [Products]
 *    responses:
 *      200:
 *        description: List of products
 */

const productsRoutes = Router()
productsRoutes.get('/', ProductController.list)

export default productsRoutes