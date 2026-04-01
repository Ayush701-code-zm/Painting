const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { User, Token } = require('../models');
const { tokenService, emailService } = require('../services');

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000; // 2 hours

const register = catchAsync(async (req, res) => {
  if (await User.isMobileTaken(req.body.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }

  const user = await User.create(req.body);
  const tokens = await tokenService.generateAuthTokens(user);

  res.status(httpStatus.CREATED).send({ user: user.transform(), tokens });
});

const login = catchAsync(async (req, res) => {
  const { mobile, password } = req.body;

  const user = await User.findOne({ mobile }).select('+password');
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  // Check account lock
  if (user.lockUntil && user.lockUntil > Date.now()) {
    const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000 / 60);
    throw new ApiError(
      httpStatus.FORBIDDEN,
      `Account locked. Try again in ${remainingTime} minutes`
    );
  }

  const isPasswordMatch = await user.isPasswordMatch(password);

  if (!isPasswordMatch) {
    if (user.loginAttempts < MAX_LOGIN_ATTEMPTS - 1) {
      await User.findByIdAndUpdate(user._id, { $inc: { loginAttempts: 1 } });
    } else {
      await User.findByIdAndUpdate(user._id, {
        loginAttempts: 0,
        lockUntil: Date.now() + LOCK_TIME,
      });
      throw new ApiError(
        httpStatus.FORBIDDEN,
        'Account locked due to too many failed attempts'
      );
    }
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  // Reset attempts on successful login
  if (user.loginAttempts > 0 || user.lockUntil) {
    await User.findByIdAndUpdate(user._id, { loginAttempts: 0, lockUntil: null });
  }

  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user: user.transform(), tokens });
});

const logout = catchAsync(async (req, res) => {
  const { refreshToken } = req.body;

  const tokenDoc = await Token.findOne({ token: refreshToken, type: 'refresh', blacklisted: false });
  if (!tokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }

  await Token.findByIdAndUpdate(tokenDoc._id, { blacklisted: true });
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const { refreshToken } = req.body;

  const tokenDoc = await Token.findOne({ token: refreshToken, type: 'refresh', blacklisted: false });
  if (!tokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }

  // Revoke old refresh token (rotation)
  await Token.findByIdAndUpdate(tokenDoc._id, { blacklisted: true });

  const user = await User.findById(tokenDoc.user);
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'User not found');
  }

  const tokens = await tokenService.generateAuthTokens(user);
  res.send(tokens);
});

const forgotPassword = catchAsync(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No user found with this email');
  }

  const token = await tokenService.generateResetPasswordToken(user.id);
  await emailService.sendResetPasswordEmail(user.email, token, req.headers.origin || '');
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  const payload = await tokenService.verifyToken(req.query.token, 'resetPassword');

  const user = await User.findById(payload.id).select('+password');
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  user.password = req.body.password;
  await user.save();

  // Revoke all reset tokens for this user
  await tokenService.revokeTokensByUser(user.id, 'resetPassword');

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
};
