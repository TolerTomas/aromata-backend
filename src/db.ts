import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './models/Product';
import { User } from './models/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'password',
    database: 'AromataDB',
    synchronize: true,
    logging: true,
    entities: [Product, User],
    subscribers: [],
    migrations: []
});