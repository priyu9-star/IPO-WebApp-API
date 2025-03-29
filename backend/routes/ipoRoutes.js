const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const IPO = sequelize.define("IPO", {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pricePerShare: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalShares: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  openDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  closeDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = IPO;
