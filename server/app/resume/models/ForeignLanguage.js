const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume');

const ForeignLanguage = sequelize.define('ForeignLanguage', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    timestamps: false,
});

ForeignLanguage.belongsTo(Resume, { foreignKey: 'resumeId' });
Resume.hasMany(ForeignLanguage, {foreignKey: 'resumeId', as: 'foreignLanguages'});

module.exports = ForeignLanguage;