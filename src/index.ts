import express, { Express } from 'express';
import router from './router/routes';

const app: Express = express();
const PORT: number = 8080;

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT);
});
