const rateLimit = require('express-rate-limit');

/**
 * Rate limiter for authentication endpoints.
 * Applied only in production (see app.js).
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    code: 429,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

/**
 * General API rate limiter — per IP.
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    code: 429,
    message: 'Too many requests, please slow down',
  },
});

module.exports = {
  authLimiter,
  generalLimiter,
};
