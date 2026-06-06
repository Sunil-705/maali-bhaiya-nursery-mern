const express = require("express");

const {
  getProducts,
  getSingleProduct,
  getRelatedProducts,
  searchProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get All Products
router.get("/", getProducts);

// Create Product
router.post("/", createProduct);

// Search Products
router.get("/search", searchProducts);

// Get Related Products
router.get("/related/:category", getRelatedProducts);

// Delete Product
router.delete("/:id", deleteProduct);

// Update Product
router.put("/:id", updateProduct);

// Get Single Product
router.get("/:id", getSingleProduct);

module.exports = router;