const httpStatus = require('http-status');
const { pick } = require('lodash');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { getQueryOptions } = require('../utils/query.utils');
const { generateEmployeeId, generatedPassword } = require('../helpers/user.helper');
const { User } = require('../models');
const { emailService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  if (await User.isPrivateEmailTaken(req.body.private_email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Private email already taken');
  }
  if (await User.isMobileTaken(req.body.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }

  const employeeId = await generateEmployeeId();
  const password = generatedPassword();

  const user = await User.create({
    ...req.body,
    employeeId,
    password,
    createdBy: req.user._id,
  });

  // Send credentials to new employee
  await emailService.sendApprovalEmail(user.email || user.private_email, user.email, user.name, password);

  res.status(httpStatus.CREATED).send(user.transform());
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role', 'mobile', 'active']);
  const options = getQueryOptions(req.query);

  const [users, total] = await Promise.all([
    User.find(filter, null, options).populate('createdBy', 'name email mobile'),
    User.countDocuments(filter),
  ]);

  const data = users.map((user) => user.transform());

  res.send({
    data,
    pagination: {
      total,
      page: options.skip / options.limit + 1,
      totalPages: Math.ceil(total / options.limit),
    },
  });
});

const getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user.transform());
});

const getUsersByIds = catchAsync(async (req, res) => {
  const ids = req.query.ids.split(',').map((id) => id.trim());
  const users = await User.find({ _id: { $in: ids } });
  res.send({ data: users.map((u) => u.transform()) });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const allowedUpdates = pick(req.body, ['name', 'email', 'mobile', 'role', 'active']);

  if (allowedUpdates.mobile && (await User.isMobileTaken(allowedUpdates.mobile, user._id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }

  Object.assign(user, allowedUpdates);
  await user.save();

  res.send(user.transform());
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await User.findByIdAndDelete(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUsersByIds,
  updateUser,
  deleteUser,
};
