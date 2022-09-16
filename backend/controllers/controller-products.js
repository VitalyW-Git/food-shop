import {fetchAllProducts} from '../models/model-product.js';

export function getAllProducts(req, res, next) {
    fetchAllProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => res.send(err))
}

