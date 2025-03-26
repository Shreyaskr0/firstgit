const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "hello1", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;
