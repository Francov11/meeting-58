const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
require('dotenv').config();

const ControllerAuth = require('../controllers/auth');
const ControllerUser = require('../controllers/users');

//Lista de usuarios // List of users
router.get('/list', ControllerAuth.checkToken ,ControllerAuth.isAdmin ,ControllerUser.list );

router.put('/update/:idUser',ControllerAuth.checkToken ,ControllerAuth.isAdmin ,ControllerUser.update)

router.delete('/delete/:idUser',ControllerAuth.checkToken ,ControllerAuth.isAdmin ,ControllerUser.delete)

module.exports = router;