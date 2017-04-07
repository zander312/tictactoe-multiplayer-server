var Sequelize = require('sequelize');

var db = new Sequelize(
  "arcturus",
  "root",
  "Fearless1", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 100,
      min: 0,
      idle: 1000
    }
  }
);

module.exports = db;