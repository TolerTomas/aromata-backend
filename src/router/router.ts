import { Router } from "express";
import { addProduct, getProductImageByImgName, getProducts, getProductImageById, registerUser, authUser, getProductPriceByID, realizarCompra } from "../controllers/ecommerceController";

const ecommerceRouter = Router();

ecommerceRouter.get('/products', getProducts);
ecommerceRouter.get('/productImageByImgName/:image', getProductImageByImgName);
ecommerceRouter.get('/productImageById/:id', getProductImageById);
ecommerceRouter.get('/productPriceById/:id', getProductPriceByID)
ecommerceRouter.post('/signup', registerUser);
ecommerceRouter.post('/login', authUser);
ecommerceRouter.post('/addProduct', addProduct);
ecommerceRouter.post('/realizarCompra', realizarCompra);

export default ecommerceRouter;