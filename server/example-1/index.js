const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 4000;

server.get("/", (_req, res) => {
  res.json({ message: "Server is online" });
});

server.get("/name", (_req, res) => {
  const names = ["Stellar", "Chidinma", "Covenant"];
  res.json({ result: names });
});

server.post("/name", (req, res) => {
  const data = req.body;
  //   console.log("Received data: ", data);
  res
    .status(200)
    .json({ message: "Name received successfully", statusCode: 200});
});

server.listen(PORT, () => {
  console.log("Server is active now");
});
