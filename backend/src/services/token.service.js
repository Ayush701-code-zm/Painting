const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const config = require('../config/config');
const { Token } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Generate a signed JWT for a user.
 */
const generateToken = (user, expires, secret = config.jwt.secret) => {
  const payload = {
    id: user.id,
    roleId: user.role_id,
    storeId: user.store_id,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret, { algorithm: 'HS256' });
};

/**
 * Generate a refresh JWT (uses separate secret if configured).
 */
const generateRefreshToken = (user, expires) => {
  return generateToken(user, expires, config.jwt.secret);
};

/**
 * Persist a token document to the database.
 */
const saveToken = async (token, userId, expires, type, blacklisted = false) => {
  const tokenDoc = await Token.create({
    token,
    user: userId,
    expires: expires.toDate(),
    type,
    blacklisted,
  });
  return tokenDoc;
};

/**
 * Verify a JWT and return its payload.
 * Throws ApiError for invalid / expired tokens.
 */
const verifyToken = async (token, type) => {
  let payload;
  try {
    payload = jwt.verify(token, config.jwt.secret);
  } catch {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token');
  }

  if (type) {
    const tokenDoc = await Token.findOne({
      token,
      type,
      user: payload.id,
      blacklisted: false,
    });
    if (!tokenDoc) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Token not found or revoked');
    }
  }

  return payload;
};

/**
 * Generate access + refresh tokens for a user and persist the refresh token.
 */
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(user, accessTokenExpires);

  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateRefreshToken(user, refreshTokenExpires);
  await saveToken(refreshToken, user.id, refreshTokenExpires, 'refresh');

  return {
    access: { token: accessToken, expires: accessTokenExpires.toDate() },
    refresh: { token: refreshToken, expires: refreshTokenExpires.toDate() },
  };
};

/**
 * Generate a short-lived reset-password token and persist it.
 */
const generateResetPasswordToken = async (userId) => {
  const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
  const token = generateToken({ id: userId }, expires);
  await saveToken(token, userId, expires, 'resetPassword');
  return token;
};

/**
 * Blacklist all tokens of a given type for a user (used on logout / password change).
 */
const revokeTokensByUser = async (userId, type = 'refresh') => {
  await Token.updateMany({ user: userId, type, blacklisted: false }, { blacklisted: true });
};

module.exports = {
  generateToken,
  generateRefreshToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  revokeTokensByUser,
};
