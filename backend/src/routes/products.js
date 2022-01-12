const express = require('express');
const router = express.Router();

const ControllerAuth = require('../controllers/auth');
const ControllerProduct = require('../controllers/products');

//Lista de productos // List of products
router.get('/products', ControllerAuth.checkToken, ControllerAuth.isAdmin, ControllerProduct.list);

//Crear producto // Create product
router.post('/products', ControllerAuth.checkToken, ControllerAuth.isAdmin ,ControllerProduct.create);

//Actualizar producto // Update product 
router.put('/products/:idProduct', ControllerAuth.checkToken, ControllerAuth.isAdmin ,ControllerProduct.update);

//Borrar producto // Delete product
router.delete('/products/:idProduct', ControllerAuth.checkToken, ControllerAuth.isAdmin ,ControllerProduct.delete);

module.exports = router; 