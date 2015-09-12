'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.changeColumn(
      'Admin',
      'name',
      Sequelize.STRING
    );
    queryInterface.changeColumn(
      'Account',
      'name',
      Sequelize.STRING
    );
    queryInterface.changeColumn(
      'AdminGroup',
      'permissions',
      Sequelize.STRING
    );

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.changeColumn(
      'Admin',
      'name',
      Sequelize.JSON
    );
    queryInterface.changeColumn(
      'Account',
      'name',
      Sequelize.JSON
    );
    queryInterface.changeColumn(
      'AdminGroup',
      'permissions',
      Sequelize.JSON
    );

  }
};
