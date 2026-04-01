const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User } = require('../../src/models');

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const userOne = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Test User',
  mobile: '9876543210',
  password,
  role: 'employee',
  employeeId: 'EMP-10001',
};

const admin = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Admin User',
  mobile: '9876543211',
  password,
  role: 'admin',
  employeeId: 'EMP-10002',
};

const insertUsers = async (users) => {
  await User.insertMany(
    users.map((u) => ({ ...u, password: hashedPassword }))
  );
};

module.exports = {
  userOne,
  admin,
  password,
  insertUsers,
};
