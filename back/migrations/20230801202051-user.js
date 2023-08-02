/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: Sequelize.INTEGER,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      course: Sequelize.STRING,
      attendance: Sequelize.INTEGER,
      enrolled: Sequelize.BOOLEAN,
      isAdmin: Sequelize.BOOLEAN,
      isTeacher: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  },
};