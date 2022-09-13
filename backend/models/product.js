const  db = require('../config/db');

const Products ={
    fetchAllProducts: () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM products', (err, products, fields) => {
            if (err) reject(err);
            resolve(products);
        })
    })
}}

module.exports = Products ;



