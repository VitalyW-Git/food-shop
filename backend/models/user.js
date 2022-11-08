import {connectDb} from '../config/db.js';

export function insertUser(name, email, password) {
    return new Promise((resolve, reject) => {
        connectDb.query('INSERT INTO users (name, email, password, refresh_token, created_at, updated_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)', [name, email, password], (err, products, fields) => {
            if (err) {
                reject(err)
            }
            resolve(products.insertId);
        })
    })
}