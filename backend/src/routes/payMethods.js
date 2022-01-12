const express = require('express');
const router = express.Router();

const ControllerPayMeth = require('../controllers/payMethods');
const ControllerAuth = require('../controllers/auth');
const ContrillerUsers = require('../controllers/users');

//Lista de metodos de pagos // List of paymethod
router.get('/paymethod', ControllerAuth.checkToken, ControllerAuth.isAdmin, ControllerPayMeth.list);

//Crear metodo de pago // Create payMeth
router.post('/paymethod', ControllerAuth.checkToken, ControllerAuth.isAdmin, ControllerPayMeth.create);

//Actualizar metodo de pago // Update payMeth
router.put('/paymethod/:idPaymethod', ControllerAuth.checkToken, ControllerAuth.isAdmin, ControllerPayMeth.update);

//Borrar metodo de pago // Delete paymethod
router.delete('/paymethod/:idPaymethod', ControllerAuth.checkToken, ControllerAuth.isAdmin, ControllerPayMeth.delete);

module.exports = router;