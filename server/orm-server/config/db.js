const { Sequelize } = require("sequelize");
const env = require("./env");

const sequelize = new Sequelize(env.database, env.user, env.password, {
  ssl: env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  logging: env.NODE_ENV === "production" ? false : console.log,
  host: env.host,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
