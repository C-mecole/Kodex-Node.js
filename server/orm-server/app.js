const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const sequelize = require("./config/db");
const error = require("./middleware/error");
const errorHandler = require("./middleware/errorHandler");
const { User } = require("./models");
const bcrypt = require("bcrypt");
const { message } = require("./schema/product.schema");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synced!");
  } catch (error) {
    console.error("Database sync error:", error);
  }
})();

app.post("/user/register", async (req, res) => {
  const { name, password, email } = req.body;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user == null) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      password: hashedPassword,
      email,
    });
    if (newUser) {
      res.status(201).json({
        message: "User was created successfully",
      });
    }
  } else {
    res.status(400).json({
      error: {
        message: "User already exist",
      },
    });
  }
});

app.post("/user/login", async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user == null) {
    res.status(403).json({
      error: {
        message: "Email is invalid",
      },
    });
  } else {
    const { password: hashedPassword } = user.dataValues;

    const isValid = await bcrypt.compare(password, hashedPassword);

    if (isValid) {
      res.status(200).json({
        message: "Successful login",
      });
    } else {
      res.status(401).json({
        error: {
          message: "Invalid credentials",
        },
      });
    }
  }
});

app.all("*", error);
app.use(errorHandler);
module.exports = app;
