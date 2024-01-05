'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Talents', null, {});
    await queryInterface.bulkInsert(
      'Talents',
      [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@ex.com',
          userName: 'johndoe',
          description: 'I am a software engineer',
          picture: 'https://res.cloudinary.com/dwl5s1v4k/image/upload/v1689777629/la-personne_oclpty.png',
          phone: '555-555-5555',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'janedoe@ex.com',
          userName: 'janedoe',
          description: 'I am a software engineer',
          picture: 'https://res.cloudinary.com/dwl5s1v4k/image/upload/v1689777629/la-personne_oclpty.png',
          phone: '555-555-5555',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('talent', null, {});
     */
    await queryInterface.bulkDelete('Talents', null, {});
  }
};
