import { NextFunction, Request, Response } from 'express';
import {connectDb, queryDb} from '../config/mysql';
import IProduct from "../interfaces";
import mysql from 'mysql';

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    let query = 'SELECT * FROM products';

    connectDb()
        .then(connection => {
            // if (!(connection instanceof mysql.Connection)) {
            //
            // }
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

export { getAllProducts };