import { Router } from 'express';

// controlers
import { getProducts, getProductImage, addProduct } from '../controllers/ecommerceController';

const EcommerceRouter = Router();

EcommerceRouter.get('/products', getProducts);
EcommerceRouter.get('/productImage/:image', getProductImage);
EcommerceRouter.post('/addProduct', addProduct);

export default EcommerceRouter;
