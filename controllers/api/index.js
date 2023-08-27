const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const newpostRoutes = require('./newpostRoutes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/newpost', newpostRoutes);

module.exports = router;
