const express = require('express');
const { addToFavorites, getFavorites } = require('../Controllers/favoriteController');
const router = express.Router();

router.post('/', addToFavorites);
router.get('/', getFavorites);

module.exports = router;
