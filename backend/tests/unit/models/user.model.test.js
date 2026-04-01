const mongoose = require('mongoose');
const { User } = require('../../../src/models');
const setupTestDB = require('../../utils/setupTestDB');

setupTestDB();

describe('User model', () => {
  describe('User.isPasswordMatch', () => {
    test('should return true when passwords match', async () => {
      const user = await User.create({
        name: 'Test',
        mobile: '9000000001',
        password: 'password1',
        role: 'employee',
        employeeId: 'EMP-10001',
      });

      const dbUser = await User.findById(user._id).select('+password');
      const isMatch = await dbUser.isPasswordMatch('password1');
      expect(isMatch).toBe(true);
    });

    test('should return false when passwords do not match', async () => {
      const user = await User.create({
        name: 'Test',
        mobile: '9000000002',
        password: 'password1',
        role: 'employee',
        employeeId: 'EMP-10002',
      });

      const dbUser = await User.findById(user._id).select('+password');
      const isMatch = await dbUser.isPasswordMatch('wrongpassword');
      expect(isMatch).toBe(false);
    });
  });

  describe('User.transform', () => {
    test('should not include password in transform output', async () => {
      const user = await User.create({
        name: 'Test',
        mobile: '9000000003',
        password: 'password1',
        role: 'employee',
        employeeId: 'EMP-10003',
      });

      const transformed = user.transform();
      expect(transformed).not.toHaveProperty('password');
    });
  });
});
