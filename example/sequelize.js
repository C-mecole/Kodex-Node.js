const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:1111@localhost:5432/postgres",
  {
    logging: console.log,
  }
);

(async function main() {
  const Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
    },
  });

  //   const Student = sequelize.define("Student", {
  //     name: {
  //       type: DataTypes.STRING,
  //     },
  //     age: {
  //       type: DataTypes.INTEGER,
  //       defaultValue: 4,
  //     },
  //   });

  try {
    await sequelize.sync();
    console.log("Database synced!");
  } catch (error) {
    console.error("Database sync error:", error);
  }

  //   await Customer.create({
  //     name: "Noah",
  //     age: 30,
  //   });

  //   await Customer.create({
  //     name: "Stella",
  //     age: 60,
  //   });

  const result = await Customer.findOne({
    where: {
      age: 60,
    },
  });

  const result1 = await Customer.destroy({
    where: {
      age: 60,
    },
  });

  console.log(result.dataValues);
})();
