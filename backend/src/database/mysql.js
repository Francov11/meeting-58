require('dotenv').config();
const express = require('express');
const {Sequelize} = require('sequelize');

const app = express();
app.use(express.json());

const sequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    //logging: true,
    //logging: console.log,
    //logging: (...msg) => console.log(msg)

});

async function authenticate_mysql() {
    try {
        await sequelize.authenticate()
        console.log('Conected to MYSQL');
        await sequelize.sync({ force: false});
        console.log('Synchronized to MYSQL')
    } catch (error) {
        console.error(error.message);
    }
};

authenticate_mysql();


module.exports = sequelize