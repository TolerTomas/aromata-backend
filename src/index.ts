import express from 'express';
import EcommerceRouter from './router/ecommerce'
import cors from 'cors'

import { AppDataSource } from './db';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/ecommerce', EcommerceRouter);

// docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=AromataDB -p 3306:3306 mysql
AppDataSource.initialize()
    .then(() => {
        console.log('DB connected');
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {throw err});
