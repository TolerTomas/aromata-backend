import express from 'express';
import router from './router/routes';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT);
});