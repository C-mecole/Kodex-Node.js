const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const server = express();
dotenv.config();

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 3000;

server.get("/", (_req, res) => {
  res.json({ message: "Server is online" });
});

server.post("/name", (req, res) => {
  const data = req.body;
  console.log("Received data: ", data);
  res.json({ message: "POST request received", data });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
