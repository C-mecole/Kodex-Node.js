const express = require("express");
const cors = require("cors");
const server = express();

const { Client } = require("pg");
const { PORT } = require("./config/env");

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const client = new Client({});
client.connect();

async function query() {
  const result = await client.query("SELECT * FROM USERS");
  const res = result.rows;
  console.log(res);
}

query();

server.listen(PORT, () => {
  console.log("Server is active now");
});
