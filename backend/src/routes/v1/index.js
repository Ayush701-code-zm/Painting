const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const healthRoute = require('./health.route');

const router = express.Router();

// Health checks (no auth)
router.use('/', healthRoute);

// Domain routes
router.use('/auth', authRoute);
router.use('/users', userRoute);

module.exports = router;
