const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const newPostRoutes = require('./newPostRoutes');
const updatePostRoutes = require('./updatePostRoutes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/newpost', newPostRoutes);
router.use('/updatepost', updatePostRoutes);

module.exports = router;
