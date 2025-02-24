module.exports = (count) =>
  function (req, res, next) {
    count++;
    console.log(count);
    next();
  };
