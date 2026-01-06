const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("task_manager", "root", "TD78Z.u", {
  host: "localhost",
  dialect: "mariadb",
  port: 3306,

});

module.exports = sequelize;