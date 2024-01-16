'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Socials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instagram: {
        type: Sequelize.STRING
      },
      tiktok: {
        type: Sequelize.STRING
      },
      thread: {
        type: Sequelize.STRING
      },
      snapchat: {
        type: Sequelize.STRING
      },
      x: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      talentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Talents',
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Socials');
  }
};
