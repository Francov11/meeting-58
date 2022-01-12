const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class productsModel extends Model { }
productsModel.init({
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    }
    
}, { sequelize, modelName: 'products', underscored: true }
);

module.exports = productsModel;