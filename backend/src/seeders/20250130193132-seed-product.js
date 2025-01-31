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
   return queryInterface.bulkInsert('product',[
    {"product_name": "Smartphone", "product_description": "A top-tier option for enthusiasts.", "category_id": 1, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Fitness Tracker", "product_description": "Tailored to meet your unique needs.", "category_id": 2, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Online Course", "product_description": "A high-quality product for everyday use.", "category_id": 3, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Travel Backpack", "product_description": "A high-quality product for everyday use.", "category_id": 4, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Gourmet Chocolate", "product_description": "Tailored to meet your unique needs.", "category_id": 5, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Streaming Subscription", "product_description": "Tailored to meet your unique needs.", "category_id": 6, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Football", "product_description": "Combines functionality with aesthetics.", "category_id": 7, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Budgeting App", "product_description": "Perfect for enhancing your lifestyle.", "category_id": 8, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Reusable Water Bottle", "product_description": "Tailored to meet your unique needs.", "category_id": 9, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Oil Painting Kit", "product_description": "A high-quality product for everyday use.", "category_id": 10, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Laptop", "product_description": "Compact, durable, and reliable.", "category_id": 1, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Yoga Mat", "product_description": "Compact, durable, and reliable.", "category_id": 2, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "E-Learning Subscription", "product_description": "Perfect for enhancing your lifestyle.", "category_id": 3, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Luggage Set", "product_description": "Designed for maximum performance and comfort.", "category_id": 4, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Organic Coffee", "product_description": "An excellent choice for hobbyists and professionals.", "category_id": 5, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Movie Ticket", "product_description": "Designed for maximum performance and comfort.", "category_id": 6, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Basketball", "product_description": "Tailored to meet your unique needs.", "category_id": 7, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Stock Analysis Software", "product_description": "Compact, durable, and reliable.", "category_id": 8, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Solar Charger", "product_description": "Offers great value for its price.", "category_id": 9, "createdAt": new Date(), "updatedAt": new Date()},
    {"product_name": "Sketchbook", "product_description": "Tailored to meet your unique needs.", "category_id": 10, "createdAt": new Date(), "updatedAt": new Date()}
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

    return queryInterface.bulkDelete('product', {}, {});
  }
};
