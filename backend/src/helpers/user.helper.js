const { Counter } = require('../models');

/**
 * Atomically increment and return the next value for a named counter sequence.
 */
async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Counter.findOneAndUpdate(
    { sequenceName },
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true }
  );
  return sequenceDocument.sequenceValue;
}

/**
 * Generate a unique employee ID in the format EMP-XXXXX.
 */
async function generateEmployeeId() {
  const nextCounter = await getNextSequenceValue('employeeId');
  const employeeId = `EMP-${nextCounter + 10000}`;
  return employeeId;
}

/**
 * Generate a random initial password (7 alpha + 3 numeric characters).
 * Intended for system-generated passwords sent to new employees via email.
 */
function generatedPassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';

  const randomChars = Array(7)
    .fill(null)
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');

  const randomNums = Array(3)
    .fill(null)
    .map(() => nums[Math.floor(Math.random() * nums.length)])
    .join('');

  return randomChars + randomNums;
}

module.exports = { getNextSequenceValue, generateEmployeeId, generatedPassword };
