const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
// const logger = require("./middleware/logger");
const countMiddleWare = require("./middleware/count");
const Joi = require("joi");
const path = require("path");
const errorHandler = require("./middleware/error");
// const helmet = require("helmet");

dotenv.config();

const server = express();
let count = 0;
// server.use(countMiddleWare(count));
server.use(cors());
// server.use(helmet())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

// server.use(logger);
const public = path.join(__dirname, "/public");
server.use(express.static(public));
server.use("/product", productRoute);

// server.get("/static-file", (_req, res) => {
//   const file = "public/pages/failed.html";
//   res.sendFile(file);
// });

// server.post("/submit", (req, res) => {
//   const nameSchema = Joi.object({
//     name: Joi.string().min(6).max(10).required(),
//     password: Joi.string()
//       .pattern(
//         new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[W_]).{8,}$"),
//         "strong password"
//       )
//       .required(),
//   });

//   const { error } = nameSchema.validate(req.body);
//   if (error) {
//     res.status(400).json({ error: error.details[0].message });
//   }

  // res.json({ message: "Validation success" });

  // const { name } = req.body;

  // if (!name) {
  //   res.status(400).json({ error: "Name is required" });
  //   return;
  // }

  // res.json({ message: "Data received", data: name });
// });

// server.get("/data", (req, res) => {
//   console.log("Got id", req.query.id);
//   console.log("Got name", req.query.name);
//   res.json();
// });

// server.get("/", (_req, res) => {
//   res.redirect("/home");
//   // res.json();
// });

// server.get("/home", (_req, res) => {
//   res.status(301).json({ message: "Redirect to /home successfully" });
// });

// server.get("/stat", (_req, res) => {
//   res.json({ count: count });
// });

// server.all("*", (req, res) => {
//   res.status(404).json({
//     statusCode: 404,
//     error: { message: `${req.originalUrl} is invalid` },
//   });
// });

// server.use((req, res, next) => {
//   if (!req.route) {
//     next(new Error("Server don blow"));
//   }
// });

// server.use(errorHandler);

server.all("/error", (req, res, next) => {
  next(new Error("message"));
});

server.use((error, request, response, next) => {
  response.status(404).json({
    statusCode: 404,
    error: { message: error.message },
  });
});

server.listen(PORT, () => {
  console.log("Server is active now");
});
