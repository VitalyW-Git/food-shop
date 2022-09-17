import {fetchAllProducts} from '../models/model-product.js';

export function getAllProducts(req, res, next) {
    fetchAllProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}

