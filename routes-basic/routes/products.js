const express = require('express');
const router = express.Router();

// ----- Products Routes -----

// Get all products
router.get('/', (req, res) => {
    res.send('List of all products');
});

// Get product by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Product ID requested: ${id}`);
});

// Post a new product
router.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`Product ${name} created`);
});


module.exports = router