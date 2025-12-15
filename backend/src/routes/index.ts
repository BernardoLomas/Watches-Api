import { Router } from 'express'
import productsRoutes from './product.routes';
import cartRoutes from './cart.routes';
import checkoutRoutes from './checkout.routes';

const routes = Router();

routes.get('/funciona', (_, res) => {
    res.json({ status: 'funciona' });
})

routes.use('/products', productsRoutes)
routes.use('/cart', cartRoutes)
routes.use('/checkout', checkoutRoutes)

export default routes;