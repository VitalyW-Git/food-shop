import { NextFunction, Request, Response } from 'express';
import {connectDb, queryDb} from '../config/mysql';
import IProduct from "../interfaces";

const fetchAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    // return new Promise((resolve, reject) => {
    //     connectDb.query('SELECT * FROM products', (err, products, fields) => {
    //         if (err) {
    //             reject(err)
    //         }
    //         resolve(products);
    //     })
    // })

    let query = 'SELECT * FROM products';

    connectDb()
        .then(connection => {
            queryDb<IProduct[]>(connection, query)
                .then(products => {
                    return res.status(200).json({
                        products
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                // .finally(() => {
                //     connection.end();
                // });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
}

export { fetchAllProducts };