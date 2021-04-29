const router = require('express').Router();
const path = require('path');
const DATA = require('../controller/dataController.js');

// User Routes
router.use('/contact', DATA.createContact);

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



module.exports = router;
