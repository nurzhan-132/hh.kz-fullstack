const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Resume = require('./Resume');

const Education = sequelize.define('Education', {
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    university_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    faculty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, 
{
    timestamps: false,
});

Education.belongsTo(Resume, { foreignKey: 'resumeId' });
Resume.hasMany(Education, {foreignKey: 'resumeId', as: 'education'});

module.exports = Education;