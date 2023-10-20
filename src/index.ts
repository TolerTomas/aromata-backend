import express from 'express';
import router from './router/routes';

const app = express();
const PORT = 3000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT);
});