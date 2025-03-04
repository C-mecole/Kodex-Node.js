const Joi = require("joi");

const countrySchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().min(11).max(100).required(),
});

module.exports = countrySchema;
