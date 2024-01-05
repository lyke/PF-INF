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
    await queryInterface.bulkDelete('Posts', null, {});
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          id: 1,
          title: 'First Post',
          description: 'This is the first post',
          image: 'https://res.cloudinary.com/dwl5s1v4k/image/upload/v1689777629/la-personne_oclpty.png',
          talentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Second Post',
          description: 'This is the second post',
          image: 'https://res.cloudinary.com/dwl5s1v4k/image/upload/v1689777629/la-personne_oclpty.png',
          talentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Third Post',
          description: 'This is the third post',
          image: 'https://res.cloudinary.com/dwl5s1v4k/image/upload/v1689777629/la-personne_oclpty.png',
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
