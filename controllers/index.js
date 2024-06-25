const router = require('express').Router();
const homeRoutes = require('./home')
const shopRoutes = require('./shop')
const aboutRoutes = require('./about')
const contactRoutes = require('./contact')
const checkoutRoutes = require('./checkout')




router.use('/', homeRoutes);
router.use('/shop', shopRoutes);
router.use('/about', aboutRoutes);
router.use('/contact', contactRoutes);
router.use('/checkout', checkoutRoutes);


module.exports = router;
