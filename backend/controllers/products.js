const  Product = require('../models/product');
exports.getAllProducts = (req, res) => {
    Product.fetchAllProducts()
        .then(products => res.json(products))
        .catch(err => res.send(err))
}

