import { Router } from 'express'
import productsRoutes from './product.routes';

const routes = Router();

routes.get('/funciona', (_, res) => {
    res.json({ status: 'funciona' });
})

routes.use('/products', productsRoutes)

export default routes;