const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const countryRoutes = require("./routes/countryRoutes");
const port = process.env.PORT || 3000;

const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());

server.use("/api/products", productRoutes);
server.use("/api/countries", countryRoutes);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
