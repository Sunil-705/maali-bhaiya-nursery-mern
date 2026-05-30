const express = require("express");

const {
  getProducts,
  getSingleProduct,
  getRelatedProducts,
} = require("../controllers/productController");

const router = express.Router();

// Get All Products
router.get("/", getProducts);

// Get Related Products
router.get("/related/:category", getRelatedProducts);

// Get Single Product
router.get("/:id", getSingleProduct);

module.exports = router;