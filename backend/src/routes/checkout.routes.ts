import { Router } from 'express'
import { CheckoutController } from '../controllers/checkout.controller'

/**
 * @swagger
 * /checkout:
 *   post:
 *     summary: Simulate order checkout
 *     tags: [Checkout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: number
 *                     quantity:
 *                       type: number
 *     responses:
 *       200:
 *         description: Checkout success
 */

const checkoutRoutes = Router()
checkoutRoutes.post('/', CheckoutController.process)

export default checkoutRoutes