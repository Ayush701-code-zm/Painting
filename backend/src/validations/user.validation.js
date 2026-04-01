const Joi = require('@hapi/joi');
const { objectId, mobile, password } = require('./custom.validation');
const { roles } = require('../config/roles');

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    mobile: Joi.string().custom(mobile).required(),
    email: Joi.string().email(),
    private_email: Joi.string().email(),
    role: Joi.string().valid(...roles),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    mobile: Joi.string(),
    active: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer().min(1).max(100),
    page: Joi.number().integer().min(1),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getUsersByIds = {
  query: Joi.object().keys({
    ids: Joi.string().required(), // Comma-separated ObjectIds
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      email: Joi.string().email(),
      mobile: Joi.string().custom(mobile),
      role: Joi.string().valid(...roles),
      active: Joi.boolean(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUsersByIds,
  updateUser,
  deleteUser,
};
