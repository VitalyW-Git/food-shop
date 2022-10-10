import {connectDb} from '../config/db.js';

export function selectAllProducts() {
    return new Promise((resolve, reject) => {
        connectDb.query('SELECT * FROM products', (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(products);
        })
    })
}

export function insertProduct(title, price) {
    return new Promise((resolve, reject) => {
        connectDb.query('INSERT INTO products (title, price, date_time) VALUES (?, ?, CURRENT_TIMESTAMP)', [title, price], (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(products.insertId);
        })
    })
}

export function removeProduct(id) {
    return new Promise((resolve, reject) => {
        connectDb.query('DELETE FROM products WHERE id = ?', [id], (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(true);
        })
    })
}

export function updateProduct(id, title, price) {
    let setTitle = title
    let setPrice = price
    return new Promise((resolve, reject) => {
        connectDb.query('UPDATE products SET title = ?, price = ? WHERE id = ?', [setTitle, setPrice, id], (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(true);
        })
    })
}