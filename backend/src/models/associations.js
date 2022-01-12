const sequelize = require('../database/mysql');

const usersModel = require('./users')
const addressBookModel = require('./addressBook');
const ordersModel = require('./orders')
const ordersProductModel = require('./ordersProduct');
const payMethsModel = require('./payMethods');
const productsModel = require('./products')

DireccionesModel.belongsTo(UsuariosModel);
UsuariosModel.hasOne(DireccionesModel);

PedidosModel.belongsTo(DireccionesModel);

DireccionesModel.hasMany(PedidosModel);

ordersModel.belongsTo(usersModel);
usersModel.hasMany(ordersModel);

ordersModel.belongsTo(payMethsModel);
payMethsModel.hasMany(ordersModel);

ordersProductModel.belongsTo(productsModel);
productsModel.hasMany(ordersProductModel);

ordersProductModel.belongsTo(ordersModel);
ordersModel.hasMany(ordersProductModel);



