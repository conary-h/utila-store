const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const brandRoutes = require('./brands');


router.use('/auth', authRoutes);
router.use('/brand', brandRoutes);

router.get('/test', (req, res) => {
    res.json({
        hello: 'world'
    });
});

module.exports = router;