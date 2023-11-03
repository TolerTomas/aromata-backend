import { Request, Response } from 'express'
import { join } from 'path'
import db from '../db'

export const getProducts = (_: Request, res: Response) => {
    // coneccioncon la base de datos
    res.json(db);
}

export const getProductImage = (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'images', req.params.image))
}
