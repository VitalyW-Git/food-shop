import express from "express";
const productRouter = express.Router();
import {getAllProducts, createProduct} from '../controllers/controller-products.js';
// const OrderController = require('../controllers/orders');
// const {check, validationErrors} = require('express-validator');

productRouter.get('/products', getAllProducts);
productRouter.post('/products', createProduct);

export {productRouter};