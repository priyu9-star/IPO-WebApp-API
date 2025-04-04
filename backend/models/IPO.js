const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

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

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Broker = sequelize.define("Broker", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licenseNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    allowNull: false,
    defaultValue: "active",
  }
});

module.exports = Broker;
