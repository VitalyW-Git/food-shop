import {selectAllProducts, insertProduct, removeProduct, updateProduct} from '../models/model-product.js';

/** CRUD = create read update delete */
export function getAllProducts(req, res, next) {
    selectAllProducts()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`Получить все записи ошибка на стороне сервера: ${err.message}!`)
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
            console.log(`При создании записи ошибка на стороне сервера: ${err.message}!`)
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
            console.log(`При удалении продукта ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}

export function putProduct(req, res, next) {
    const {id, title, price} = req.body
    updateProduct(id, title, price)
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(`При обновлении продукта ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}