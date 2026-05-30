const express = require('express');
const router = express.Router();

// ----- Users Routes -----
router.get('/', (req, res) => {
    res.json({ name: 'Kyle', message: 'Hello' });
});

module.exports = router