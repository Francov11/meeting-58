const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class ordersProductModel extends Model { }
ordersProductModel.init({
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      amount: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      }
}, { sequelize, modelName: 'orders product', underscored: true }
);

module.exports = ordersProductModel;
