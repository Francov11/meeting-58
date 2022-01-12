require('dotenv').config();
const redisClient = require('../redis/redis');
const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');


const productsModel = require('../models/products')

exports.list = async function (req, res, next) {
    try{
        const products = await productsModel.findAll();
        res.send({products});
        redisClient.set('products', JSON.stringify(products), 'EX', '60');
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.create = async function (req, res, next){
    try {
        const create = await productsModel.findOne({
            where: {
                name: req.body.name
            }
        });
        console.log(create);
        if(!create) {
                const result = await productsModel.create(
                {
                name: req.body.name,
                price: req.body.price
                }
            );
            await result.save();
            res.send({msj: "Product created"});
        } else {
            return res.status(400).json({msj: 'The product that you entered already exists.'});
        }            
    }
    catch (err) {
        httpError(req, res, err);
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

exports.delete = async function (req, res, next) {
    try {
        const result = await productsModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: "Product deleted"});
    }
    catch (err) {
        httpError(req, res, err);
    }
}