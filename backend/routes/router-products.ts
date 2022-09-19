import express from "express";
const productRouter = express.Router();
import {getAllProducts} from '../controllers/controller-products.js';
// const OrderController = require('../controllers/orders');
// const {check, validationErrors} = require('express-validator');

productRouter.get('/products', getAllProducts);

export {productRouter};