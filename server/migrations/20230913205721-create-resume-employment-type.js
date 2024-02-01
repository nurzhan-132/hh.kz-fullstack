'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResumeEmploymentTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }, 
      resumeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Resumes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      employmentTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'EmploymentTypes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });  
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the junction table
    await queryInterface.dropTable('ResumeEmploymentTypes');
  },
};
