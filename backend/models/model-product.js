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
        connectDb.query('INSERT INTO products (title, price) VALUES (?, ?)', [title, price], (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(54);
        })
    })
}