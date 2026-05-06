const express = require('express');
const { addToCart, getCart } = require('../Controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.get('/', getCart);

module.exports = router;
