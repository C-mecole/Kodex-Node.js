module.exports.reverse = function (text = "") {
  let result = "";
  for (let i = text.length; i >= 0; i--) {
    result = result + text.charAt(i);
  }

  return result;
};
