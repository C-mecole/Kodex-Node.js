const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const logger = require("./middleware/logger");
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

// server.use(logger);
server.use("/product", productRoute);

server.post("/submit", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", data: req.body });
});

server.get("/data", (req, res) => {
  console.log("Got id", req.query.id);
  console.log("Got name", req.query.name);
  res.json();
});

server.get("/", (_req, res) => {
  res.redirect("/home");
});

server.get("/home", (_req, res) => {
  res.status(301).json({ message: "Redirect to /home successfully" });
});

server.listen(PORT, () => {
  console.log("Server is active now");
});
