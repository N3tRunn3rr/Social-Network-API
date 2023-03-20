//index.js for api folder routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// router.use('/', userRoutes, thoughtRoutes);


module.exports = router;