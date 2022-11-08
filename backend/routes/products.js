import express from "express";
import auth from "../auth/index.js";
const productRouter = express.Router();
import {
    getAllProducts,
    createProduct,
    deleteProduct,
    putProduct
} from '../controllers/product.js';


// const OrderController = require('../controllers/orders');
// const {check, validationErrors} = require('express-validator');

productRouter.get('/products', getAllProducts);
productRouter.post('/products', auth, createProduct);
productRouter.delete('/products/:id', auth, deleteProduct);
productRouter.put('/products', auth, putProduct);

export {productRouter};