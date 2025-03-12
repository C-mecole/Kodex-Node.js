const userService = require("../services/user.services.js");

// exports.getProducts = async (_req, res) => {
//   try {
//     const products = await productService.getAllProducts();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user", error });
//   }
// };

// exports.getProductById = async (req, res) => {
//   try {
//     const product = await productService.getProductById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching product", error });
//   }
// };

// exports.createProduct = async (req, res) => {
//   try {
//     const { name, price } = req.body;
//     const product = await productService.createProduct({ name, price });
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: "Error creating product", error });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await productService.updateProduct(req.params.id, req.body);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: "Error updating product", error });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     const success = await productService.deleteProduct(req.params.id);
//     if (!success) return res.status(404).json({ message: "Product not found" });
//     res.json({ message: "Product deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product", error });
//   }
// };
