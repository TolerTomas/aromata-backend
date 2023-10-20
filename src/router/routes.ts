import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    res.send('Aromata Almacen Natural API');
});

export default router;