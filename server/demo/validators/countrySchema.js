const Joi = require("joi");

const countrySchema = Joi.object({
  code: Joi.string().length(2).uppercase().required(),
  name: Joi.string().min(3).max(100).required(),
  population: Joi.number().integer().min(1).required(),
});

module.exports = countrySchema;
