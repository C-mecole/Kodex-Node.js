const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const sequelize = require("./config/db");
const error = require("./middleware/error");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

app.all("*", error);
app.use(errorHandler);

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synced!");
  } catch (error) {
    console.error("Database sync error:", error);
  }
})();

module.exports = app;
