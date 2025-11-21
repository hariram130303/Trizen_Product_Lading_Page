const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products - return all products (or a limited set)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().limit(50);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /search?q=term - case-insensitive partial match on name, limit 5
router.get('/search', async (req, res) => {
  const q = req.query.q || '';
  try {
    if (!q) return res.json([]);
    // use regex for case-insensitive partial match
    const regex = new RegExp(q, 'i');
    const results = await Product.find({ name: regex }).limit(5);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
