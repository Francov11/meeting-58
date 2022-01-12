const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class ordersModel extends Model {}

ordersModel.init({
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date
    },
    direccion: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'PEN',
    },
    total_amount: {
      type: DataTypes.DECIMAL(16,2),
      defaultValue: 0
    },
    null: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, { sequelize, modelName: 'orders', underscored: true }
);


module.exports = ordersModel;
