require('dotenv').config();
const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');

const ordersModel = require('../models/orders')
const ordersProductModel = require('../models/ordersProduct')

exports.allOrders = async function (req, res, next) {
    try{
        const orders = await ordersModel.findAll();
        res.send({orders});
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.myHistory = async function (req, res, next){
    try {

    }
    catch (err) {
        httpError(req, res, err);
    }
};

exports.create = async function (req, res, next){
    try {
        const addres =  req.body.addresMo         
    }
    catch (err) {
        httpError(req, res, err);
    }
};

exports.post = async (req, res, next) => {
  try {
    const direccion = req.body.direccion;
    const codeFormaDePago = req.body.formaDePago;

    const dataFormaDePago = await formaDePago.findOne({ where: { codigo: codeFormaDePago}});
    console.log(dataFormaDePago);

    const cant = await pedidos.count();
    const numeroPedido = cant + 1;


    const dataPedido = await pedidos.create({ numero: numeroPedido, usuarioId: req.authData.usernameID, direccion, 
      formasDePagoId:dataFormaDePago.id });
    console.log(dataPedido);

    res.json({ status: dataPedido });

  } catch (error) {
    httpMessage.Error(req, res, error);
  }
};

exports.update = async function (req, res, next) {
    try {

        const chain = {
            name: req.body.name,
            price: req.body.price
            }
        const result = await productsModel.update( chain, { where: { id: req.params.id } });
        res.send({status: 'Product updated'});
        redisClient.del('products');    
    }
    catch (err) {
        httpError(req, res, err);
    }
}
