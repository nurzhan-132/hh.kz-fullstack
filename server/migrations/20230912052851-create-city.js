'use strict';

const { queryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Countries',
          key: 'id'
        }
      }
    });
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cities');
  }
};
