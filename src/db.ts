import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { Product } from './models/Product';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '1234',
    database: 'AromataDB',
    synchronize: true,
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: []
});

type Producto = {
    id: number
    name: string
    price: number
    image: string
}

export const db: Array<Producto> = [
    {
        id: 1,
        name: 'crowie frutilla',
        price: 1500,
        image: 'crowie-1.jpeg'
    },
    {
        id: 2,
        name: 'crowie chocolate B.',
        price: 1200,
        image: 'crowie-2.jpeg'
    },
    {
        id: 3,
        name: 'crowie limon',
        price: 1400,
        image: 'crowie-3.jpeg'
    },
    {
        id: 4,
        name: 'crowie chocolate N.',
        price: 1500,
        image: 'crowie-4.jpeg'
    },
    {
        id: 5,
        name: 'Pan integral',
        price: 4000,
        image: 'pan.jpg'
    }
]