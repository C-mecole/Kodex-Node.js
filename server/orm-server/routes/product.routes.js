const express = require("express");
const productController = require("../controllers/products.controller");
const productSchema = require("../schema/product.schema");

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", validator(productSchema), productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
