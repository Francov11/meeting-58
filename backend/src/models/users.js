const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class usersModel extends Model { }
usersModel.init({
    name:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber:  {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    suspended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    
}, { sequelize, modelName: 'users', underscored: true }
);

module.exports = usersModel;
