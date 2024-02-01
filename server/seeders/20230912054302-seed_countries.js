'use strict';

const { queryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      { name: 'Россия' },
      { name: 'Украина' },
      { name: 'Беларусь' },
      { name: 'Казахстан' },
      { name: 'Армения' },
      { name: 'Азербайджан' },
      { name: 'Грузия' },
      { name: 'Молдава' },
      { name: 'Таджикистан' },
      { name: 'Туркменистан' },
      { name: 'Узбекистан' },
      { name: 'Кыргызстан' },

    ], {});
    
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
