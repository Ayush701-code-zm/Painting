const express = require('express');
const httpStatus = require('http-status');
const mongoose = require('mongoose');

const router = express.Router();

// Liveness — is the process alive?
router.get('/health', (req, res) => {
  res.status(httpStatus.OK).send({
    status: 'ok',
    version: process.env.npm_package_version,
    timestamp: new Date().toISOString(),
  });
});

// Readiness — are all dependencies up?
router.get('/ready', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();

    res.status(httpStatus.OK).send({ status: 'ready' });
  } catch (error) {
    res.status(httpStatus.SERVICE_UNAVAILABLE).send({
      status: 'not ready',
      error: error.message,
    });
  }
});

module.exports = router;
