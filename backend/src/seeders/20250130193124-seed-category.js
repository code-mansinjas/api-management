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
   return queryInterface.bulkInsert('category',[
    {"category_name": "Smartphone", "category_description": "A top-tier option for enthusiasts.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Fitness Tracker", "category_description": "Tailored to meet your unique needs.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Online Course", "category_description": "A high-quality product for everyday use.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Travel Backpack", "category_description": "A high-quality product for everyday use.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Gourmet Chocolate", "category_description": "Tailored to meet your unique needs.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Streaming Subscription", "category_description": "Tailored to meet your unique needs.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Football", "category_description": "Combines functionality with aesthetics.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Budgeting App", "category_description": "Perfect for enhancing your lifestyle.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Reusable Water Bottle", "category_description": "Tailored to meet your unique needs.", "createdAt": new Date(), "updatedAt": new Date()},
    {"category_name": "Oil Painting Kit", "category_description": "A high-quality product for everyday use.", "createdAt": new Date(), "updatedAt": new Date()}
]
)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('category', {}, {});
  }
};
