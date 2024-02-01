const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Country = require('./Country');

const City = sequelize.define('City', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: false
});

City.belongsTo(Country, { foreignKey: 'countryId' });

module.exports = City;