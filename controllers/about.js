const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve the index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'aboutus.html'));
});

module.exports = router;
