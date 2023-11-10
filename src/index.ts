import express from 'express';
import router from './router/routes';
import EcommerceRouter from './router/ecommerce'
import cors from 'cors'

import { AppDataSource } from './db';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({origin: '*'}))

app.use('/api', router);
app.use('/ecommerce', EcommerceRouter);

AppDataSource.initialize()
    .then(() => {
        console.log('DB connected');
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    });