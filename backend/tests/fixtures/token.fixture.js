const moment = require('moment');
const { tokenService } = require('../../src/services');

const userOneAccessToken = (userOne) =>
  tokenService.generateToken(userOne, moment().add(15, 'minutes'));

const adminAccessToken = (admin) =>
  tokenService.generateToken(admin, moment().add(15, 'minutes'));

module.exports = {
  userOneAccessToken,
  adminAccessToken,
};
