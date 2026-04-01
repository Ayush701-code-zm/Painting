const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
  if (err || info || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;

  if (requiredRights.length) {
    // Rights come from the x-access-list header (populated by upstream gateway or directly)
    const accessList = req.headers['x-access-list']
      ? req.headers['x-access-list'].split(',').map((r) => r.trim())
      : roleRights.get(user.role) || [];

    req.accessList = accessList;

    const hasRequiredRights = requiredRights.every((r) => accessList.includes(r));

    if (!hasRequiredRights && req.params.userId !== user.id) {
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }

  resolve();
};

/**
 * Auth middleware — wraps Passport JWT authentication.
 * Pass required rights as arguments: auth('read-employees', 'update-employees')
 */
const auth = (...requiredRights) =>
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(
        req,
        res,
        next
      );
    })
      .then(() => next())
      .catch((err) => next(err));
  };

module.exports = auth;
