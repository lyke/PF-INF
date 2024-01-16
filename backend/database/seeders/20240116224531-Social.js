'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};



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
        {
          id: 3,
          instagram: '@instagram3',
          tiktok: '@tiktok3',
          thread: '@thread3',
          snapchat: '@snapchat3',
          x: "@x3",
          linkedin: "@linkedin3",
          talentId: 3,
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
