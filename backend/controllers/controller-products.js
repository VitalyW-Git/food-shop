import {selectAllProducts, insertProduct, removeProduct} from '../models/model-product.js';

/** CRUD = create read update delete */
export function getAllProducts(req, res, next) {
    selectAllProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}

export function createProduct(req, res, next) {
    const {title, price} = req.body
    insertProduct(title, price)
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}

export function deleteProduct(req, res, next) {
    const id = req.params.id
    removeProduct(id)
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}