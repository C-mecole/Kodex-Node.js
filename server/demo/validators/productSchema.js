const Joi = require("joi");

const productSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
});

module.exports = productSchema;
