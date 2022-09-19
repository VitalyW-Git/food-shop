import {Request, Response, NextFunction} from "express";
import {fetchAllProducts} from '../models/model-product.js';

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    fetchAllProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}

export { getAllProducts };