'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Messages', null, {});
    await queryInterface.bulkInsert(
      'Messages',
      [
        {
          id: 1,
          description: 'This is the first message',
          mail: 'message1@example.com',
          talentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          description: 'This is the second message',
          image: 'message2@example.com',
          talentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          description: 'This is the third message',
          image: 'message3@example.com',
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
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
