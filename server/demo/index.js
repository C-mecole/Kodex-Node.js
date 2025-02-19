// const fs = require("fs");
// const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const port = process.env.PORT || 3000;

const productRoutes = require("./routes/productRoutes");
const countryRoutes = require("./routes/countryRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const server = express();
server.use(express.json());
server.use(cors());

// const logStream = fs.createWriteStream(
//   path.join("../../output", "access.txt"),
//   {
//     flags: "a"
//   }
// );
// server.use(morgan("dev", { stream: logStream }));

// server.use(logger);
server.use(morgan("dev"));

server.use("/api/products", productRoutes);
server.use("/api/countries", countryRoutes);

server.use(errorHandler);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
