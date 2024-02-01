'use strict';
const { queryInterface, Sequelize } = require("sequelize");
const Country = require('../app/region/Country');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Find all countries using Sequelize
    const countries = await Country.findAll();

    // Создайте список городов для каждой страны СНГ
    const citiesData = {
      1: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Челябинск'],
      2: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Львов', 'Запорожье'],
      3: ['Минск', 'Гомель', 'Могилев', 'Витебск', 'Брест', 'Гродно'],
      4: ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Тараз'],
      5: ['Ереван', 'Гюмри', 'Ванадзор', 'Капан', 'Армавир', 'Гавар'],
      6: ['Баку', 'Гянджа', 'Сумгаит', 'Ленкорань', 'Нахичевань', 'Мингечаур'],
      7: ['Тбилиси', 'Кутаиси', 'Рустави', 'Батуми', 'Гори', 'Зугдиди'],
      8: ['Кишинев', 'Бельцы', 'Тирасполь', 'Бендеры', 'Кагул', 'Рыбница'],
      9: ['Душанбе', 'Худжанд', 'Куляб', 'Курган-Тюбе', 'Истаравшан', 'Пенджикент'],
      10: ['Ашхабад', 'Туркменабад', 'Дашогуз', 'Мары', 'Балканабат', 'Туркменбаши'],
      11: ['Ташкент', 'Наманган', 'Андижан', 'Самарканд', 'Фергана', 'Карши'],
      12: ['Бишкек', 'Ош', 'Джалал-Абад', 'Каракол', 'Токмок', 'Талас'],
    };

    const cities = [];
    for(let i = 1; i <= countries.length; i++) {
      citiesData[i].forEach((cityName) => {
        cities.push({ name: cityName, countryId: i })
      })
    }

    // Вставьте города в базу данных
    await queryInterface.bulkInsert('Cities', cities, {});
 },

  down: async (queryInterface, Sequelize) => {
    // Удалите все записи городов
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
