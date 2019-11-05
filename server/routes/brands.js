const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

router.get('/read-brands/', brandController.getBrands);

module.exports = router;
