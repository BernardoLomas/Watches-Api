import express from 'express'
import cors from 'cors'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from './docs/swagger'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api', routes);

export default app;

