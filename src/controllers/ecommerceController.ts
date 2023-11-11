import { Request, Response } from 'express'
import { join } from 'path'
import { AppDataSource } from '../db'
import { Product } from '../models/Product'

export const getProducts = async (_: Request, res: Response) => {
    // coneccioncon la base de datos
    const products = await AppDataSource.manager.find(Product);
    res.json(products);
}

export const getProductImage = (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'images', req.params.image))
}

export const addProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    
    const { name, price, image } = req.body;
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.image = image;
    newProduct.price = price;

    await AppDataSource.manager.save(newProduct);

    res.send('ProductAdded')
}