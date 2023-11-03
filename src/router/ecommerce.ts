import { Router } from 'express';

// controlers
import { getProducts, getProductImage } from '../controllers/ecommerceController';

const EcommerceRouter = Router();

EcommerceRouter.get('/products', getProducts);
EcommerceRouter.get('/productImage/:image', getProductImage);

export default EcommerceRouter;
