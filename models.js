// get the seq package
const Sequelize = require('sequelize');

// model = outline of the data we'll store against an entity
const restaurantModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
  },
  imagelink: {
    type: Sequelize.STRING,
    isUrl: true,
    allowNull: false,
  },
};

const menuModel = {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const menuItemModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT, // may end up as "REAL" in sqlite
    isFloat: true, 
    allowNull: false,
  },
};

module.exports = { restaurantModel, menuModel, menuItemModel };