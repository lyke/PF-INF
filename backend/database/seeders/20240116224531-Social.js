'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Socials', null, {});
    await queryInterface.bulkInsert(
      'Socials',
      [
        {
          id: 1,
          instagram: '@instagram',
          tiktok: '@tiktok',
          thread: '@thread',
          snapchat: '@snapchat',
          x: "@x",
          linkedin: "@linkedin",
          talentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          instagram: '@instagram2',
          tiktok: '@tiktok2',
          thread: '@thread2',
          snapchat: '@snapchat2',
          x: "@x2",
          linkedin: "@linkedin2",
          talentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
