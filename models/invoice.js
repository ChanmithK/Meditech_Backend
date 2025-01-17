'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Invoice.init({
    orderId: DataTypes.INTEGER,
    invoiceID: DataTypes.INTEGER,
    date: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    pharmacistName: DataTypes.STRING,
    nic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};