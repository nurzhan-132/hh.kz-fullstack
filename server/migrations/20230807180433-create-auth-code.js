'use strict';

const { queryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AuthCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      valid_till: {
        allowNull: false,
        type: Sequelize.DATE(6),
      }
    });
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthCodes');
  }
};
