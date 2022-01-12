const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');
const httpDenied = require('../helpers/httpDenied');

require('dotenv').config();

const usersModel = require('../models/users')

exports.list = async function (req, res, next) {
    try{
        const users = await usersModel.findAll();
        res.json(users);
    }
    catch (err) {
        httpError(req,res,err);
    }
}

exports.update = async function (req, res, next) {
    try {
        const chain = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin,
            suspended: req.body.suspended
            }
        const result = await usersModel.update( chain, { where: { id: req.params.id } });
        res.send({status: 'User updated'});  
    }
    catch (err) {
        httpError(req, res, err);
    }
}

exports.delete = async function (req, res, next) {
    try {
        const result = await usersModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: "User deleted"});
    }
    catch (err) {
        httpError(req, res, err);
    }
}
