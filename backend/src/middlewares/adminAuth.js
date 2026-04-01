const httpStatus = require('http-status');
const passport = require('passport');
const ApiError = require('../utils/ApiError');

/**
 * Admin-only auth middleware.
 * Authenticates via JWT then enforces that the user has role 'admin' or 'superadmin'.
 */
const adminAuth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err || info || !user) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
      }

      req.user = user;

      const adminRoles = ['admin', 'superadmin'];
      if (!adminRoles.includes(user.role)) {
        return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden: Admin access required'));
      }

      resolve();
    })(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = adminAuth;
