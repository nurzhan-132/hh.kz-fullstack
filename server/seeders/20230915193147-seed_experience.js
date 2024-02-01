'use strict';

const { queryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Experiences', [
      { duration: 'Нет опыта' },
      { duration: 'От 1 года до 3 лет' },
      { duration: 'От 3 до 6 лет' },
      { duration: 'Более 6 лет' },
    ], {});    
  }, 
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Experiences', null, {});
  }
};
