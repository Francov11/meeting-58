const sequelize = require('../database/mysql');
const { DataTypes, Model } = require('sequelize');

class addressBookModel extends Model { }

addressBookModel.init(
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      streetNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      departament: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      floor: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    { sequelize, modelName: 'addresBook', underscored: true }
    );   

module.exports = addressBookModel;