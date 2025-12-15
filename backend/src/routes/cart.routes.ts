import { Router } from 'express'
import { CartController } from '../controllers/cart.controller'

/**
 * @swagger
 * /cart/items:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Item added to cart
 */

const cartRoutes = Router()
cartRoutes.post('/items', CartController.addItem)
cartRoutes.put('/items', CartController.updateItem)
cartRoutes.delete('/item/:productId', CartController.removeItem)

export default cartRoutes