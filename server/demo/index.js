// const fs = require("fs");
// const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config/env");

const productRoutes = require("./routes/productRoutes");
const countryRoutes = require("./routes/countryRoutes");
const userRoutes = require("./routes/userRoutes");
const error = require("./middleware/error");
const errorHandler = require("./middleware/errorHandler");

const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/api/products", productRoutes);
server.use("/api/countries", countryRoutes);
server.use("/api/users", userRoutes);

server.all("*", error);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
