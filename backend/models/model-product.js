import {connectDb} from '../config/db.js';

export function fetchAllProducts() {
    return new Promise((resolve, reject) => {
        connectDb.query('SELECT * FROM products', (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(products);
        })
    })
}