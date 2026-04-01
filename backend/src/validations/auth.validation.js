const Joi = require('@hapi/joi');
const { mobile, password, objectId } = require('./custom.validation');

const register = {
  body: Joi.object().keys({
    mobile: Joi.string().length(10).pattern(/^\d{10}$/).required(),
    password: Joi.string().custom(password).required(),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    mobile: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().custom(password).required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
};
