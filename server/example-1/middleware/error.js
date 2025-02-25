function errorHandler(err, req, res, next) {
  res.status(404).json({
    statusCode: 404,
    error: { message: err.message },
  });
}

module.exports = errorHandler;
