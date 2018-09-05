const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/');

module.exports = router;
