const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');
// const OrderController = require('../controllers/orders');
// const {check, validationErrors} = require('express-validator');

router.get('/products', ProductController.getAllProducts);

module.exports = router;
