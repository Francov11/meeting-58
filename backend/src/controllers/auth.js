const jwt = require('jsonwebtoken');
const sequelize = require('../database/mysql');
const httpError = require('../helpers/httpError');
const httpDenied = require('../helpers/httpDenied');

require('dotenv').config();

const usersModel = require('../models/users')

exports.register = async function (req, res, next) {
    try {
        const duplicate = await usersModel.findOne({
            where: {
                email: req.body.email
            }
        });
        console.log(duplicate);
        if(!duplicate) {
                const result = await usersModel.create(
                {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password
                }
            );
            const {email, password} = req.body
            console.log('signin',password, email);
    
            jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                if(err) {
                    httpError(req,res,err);
                } else {
                    req.token = token;
                    res.status(200).json({ msj: 'Register successfully.' });
                    res.status(200).json({ status: 'sigIn', token});
                }
            });
        } else {
            return res.status(400).json({msj: 'The email you entered already exists.'});
        }            

    }
    catch (err) {
        httpError(req,res,err);
    }
};


exports.login = async function (req, res, next) {
    try {
        const result = await usersModel.findOne({
                where: {
                email: req.body.email,
                password: req.body.password
                }
            });
        /*//res.json(result);
        if(result){
            const { email, password } = req.body;
            console.log("signin", email, password);
            const token = await jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
            res.json({ msj: 'Successfully login, TOKEN: ' + token});
        } else {
            res.status(400).json({ msj: 'Email or password incorrect.'})
        }
        */ 
       console.log(result);
        if(result) {
            const { password, email } = req.body;
            console.log("signup", password, email);

            jwt.sign(
                {email},
                process.env.SECRET_KEY,
                { expiresIn: process.env.JWT_EXPIRES_IN },
                (err, token) => {
                    if (err) {
                    httpError(req, res, err);
                    } else {
                    req.token = token;
                    res.json({ status: "signup", token });
                    }
                }
                );
        } else {
            res.status(400).json({ msj: 'Email or password incorrect.'})
        }


        }
    catch (err) {
        httpError(req,res,err);
    }
};

exports.checkToken = async function (req, res, next){
    try {
        const bearerHeader = req.headers.authorization;//["Authorization"]
        console.log(bearerHeader);
        if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken
                jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
                    if(err){
                        console.log(err);
                        res.sendStatus(403)
                    } else {
                        console.log(data);
                        req.data = data
                        next();
                    }
                });
            }
    }
    catch (err) {
        httpError(req, res, err)
    }   
};

exports.isAdmin = async function (req, res, next) {
    try {
        const params = {
            where: {
            email: req.data.email,
            admin: true
            }
        }
        const result = await usersModel.findOne(params);
        console.log(result)
        if(result) {
            next();
        } else {
            httpDenied(req, res);
        };
    }
    catch (err) {
        httpError(req, res, err);
    }
}

exports.isSuspended = async function (req, res, next) {
    try {
        const params = {
            where: {
            email: req.body.email,
            suspended: true
            }
        }
        const result = await usersModel.findOne(params);
        if(result) {
            res.status(400).json({ msj: 'User suspended.'})
        } else {
            next();
        };
    }
    catch (err) {
        httpError(req, res, err);
    }
}
