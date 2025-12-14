import { Router } from 'express'
const routes = Router();

routes.get('/funciona', (_, res) => {
    res.json({ status: 'funciona' });
})

export default routes;