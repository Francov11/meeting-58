require('dotenv').config();

const helmet = require('helmet')
const express = require('express')

const app = express();
app.use(helmet());

const sequelize = require('./database/mysql');
const redis = require('./redis/redis');

const usersModel = require('./models/users');
const productsModels = require('./models/products');
const payMethsModel = require('./models/payMethods');
const addressBookModel = require('./models/addressBook');
const orderModel = require('./models/orders');
const ordersProductModel = require('./models/ordersProduct');

//Configuracion // Config 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Acamica API',
        version: '1.0.0'
      }
    },
    apis: ['./swagger/swagger.js'],
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth = require('./routes/auth');
app.use('/', auth);

const users = require('./routes/users');
app.use('/', users);

const products = require('./routes/products');
app.use('/', products);

//const orders = require('./routes/payMethods');
//app.use('/', paymethods);

const paymethods = require('./routes/payMethods');
app.use('/', paymethods);

app.use('/Sprint-Project-1', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Escuchando puerto ${process.env.EXPRESS_PORT}`)
});