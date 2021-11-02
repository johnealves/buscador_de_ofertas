const express = require("express");
const router = express.Router();

const productsController = require("../Controllers/productsController");

router.get("/products", productsController.getProductsController)

module.exports = router;