import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db';
import ecommerceRouter from './router/router';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/', ecommerceRouter);

// docker run -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=AromataDB -p 3306:3306 mysql
AppDataSource
    .initialize()
    .then(() => {
        console.log('DB connected');
        app.listen(PORT, () => {
            console.log('Server on port: ' + PORT);
        });
    })
    .catch(err => {
        throw new Error(err);
    });