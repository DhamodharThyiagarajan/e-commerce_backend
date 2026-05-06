const express = require('express');
const { getAllProducts, getProductsByCategory, addProduct } = require('../Controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.get('/:category', getProductsByCategory);

module.exports = router;
