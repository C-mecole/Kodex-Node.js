const express = require("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
dotenv.config();

const server = express();
server.use(cors())
const PORT = process.env.PORT || 3000;

server.get("/", (_req, res) =>{
  res.json({message: "Server is online"})
})

server.listen(PORT, () => {
  console.log(PORT, 'server is active now')
});