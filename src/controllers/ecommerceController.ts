import { Request, Response } from "express";
import { join } from "path";
import { AppDataSource } from "../db";
import { Product } from "../models/Product";
import { User } from "../models/User";

export const getProducts = async (_: Request, res: Response) => {
    const products = await AppDataSource.manager.find(Product);
    return res.json(products);
}

export const getProductImageByImgName = (req: Request, res: Response) => {
    return res.sendFile(join(__dirname, '..', 'images', req.params.image));
}

export const addProduct = async (req: Request, res: Response) => {
    console.log(req.body);
    
    const { name, price, image } = req.body;
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.image = image;
    newProduct.price = price;

    await AppDataSource.manager.save(newProduct);

    return res.send('ProductAdded');
}

export const getProductImageById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await AppDataSource.manager.findOneBy(Product, {
        id: parseInt(id)
    });

    if (product)
        return res.sendFile(join(__dirname, '..', 'images', product?.image));
    

}

export const authUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = await AppDataSource.manager.findOne(User, {
        where: {
            username,
            password
        }
    })

    console.log(existingUser);
    

    if (existingUser) {
        return res.status(200).send('User authenticated')
    }
    return res.send('Username or Password Error')

}

export const registerUser = async (req: Request, res: Response) => {
    const { formData } = req.body

    const { username, email, password } = formData;

    const existingUser = await AppDataSource.manager.findOne(User, {
        where: {
            email
        }
    });

    if (existingUser) {
        return res.send('Email usado')
    }

    const newUser = new User();

    newUser.username = username;
    newUser.email = email;
    newUser.password = password;

    await AppDataSource.manager.save(newUser);

    return res.status(200).send('user registered')
}