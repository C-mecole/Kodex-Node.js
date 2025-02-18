const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.get("/", productController.getProducts);
router.post("/", productController.addProduct);
router.get("/name", productController.addProduct);
module.exports = router;
