const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

router.get("/", countryController.getAllCountries);
router.get("/:code", countryController.getCountryByCode);
router.post("/", countryController.addCountry);
router.put("/:code", countryController.updateCountry);
router.delete("/:code", countryController.deleteCountry);

module.exports = router;
