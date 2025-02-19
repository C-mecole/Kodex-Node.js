function logger(req, res, next) {
  console.log("Logger middle ware started");
  next();
}

module.exports = logger;
