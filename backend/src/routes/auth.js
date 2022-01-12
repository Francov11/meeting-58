require('dotenv').config();
const express = require('express');
const router = express.Router();

const ControllerAuth = require('../controllers/auth');
const ControllerUser = require('../controllers/users');

//Registro de usuarios // User register 
router.post('/register', ControllerAuth.register)

//Login de usuario // User Login
router.post('/login',ControllerAuth.isSuspended ,ControllerAuth.login);

module.exports = router;