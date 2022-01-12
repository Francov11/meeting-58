const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class payMethsModel extends Model { }
payMethsModel.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'payMethods', underscored: true }
);

module.exports = payMethsModel;