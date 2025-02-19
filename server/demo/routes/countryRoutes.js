const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");
const validate = require("../middleware/validator");
const countrySchema = require("../validators/countrySchema");

router.get("/", countryController.getAllCountries);
router.get("/:code", countryController.getCountryByCode);
router.post("/", validate(countrySchema), countryController.addCountry);
router.put("/:code", countryController.updateCountry);
router.delete("/:code", countryController.deleteCountry);

module.exports = router;
