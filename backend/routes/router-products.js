import {Router} from "express";
const productRouter = Router();
import {getAllProducts} from '../controllers/controller-products.js';
// const OrderController = require('../controllers/orders');
// const {check, validationErrors} = require('express-validator');

productRouter.get('/products', getAllProducts);

export {productRouter};