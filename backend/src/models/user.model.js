const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { roles } = require('../config/roles');

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000; // 2 hours

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
      validate(value) {
        if (value && !validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    private_email: {
      type: String,
      trim: true,
      lowercase: true,
      validate(value) {
        if (value && !validator.isEmail(value)) {
          throw new Error('Invalid private email');
        }
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      minlength: 10,
      validate(value) {
        if (!validator.isNumeric(value)) {
          throw new Error('Invalid number');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      select: false,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
    },
    passwordHistory: [{ type: String, select: false }],
    role: {
      type: String,
      enum: roles,
      default: 'employee',
      index: true,
    },
    employeeId: {
      type: String,
      unique: true,
      index: true,
    },
    store_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Store',
    },
    role_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Role',
    },
    active: {
      type: Boolean,
      default: true,
      index: true,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      index: true,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

// Compound indexes for common query patterns
userSchema.index({ role: 1, active: 1 });
userSchema.index({ createdAt: -1 });

/**
 * Hash password before save; maintain password history.
 */
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
    if (user.passwordHistory) {
      user.passwordHistory.push(user.password);
      if (user.passwordHistory.length > 5) {
        user.passwordHistory.shift();
      }
    }
  }
  next();
});

/**
 * Check if mobile is already taken (excluding a given id).
 */
userSchema.statics.isMobileTaken = async function (mobile, excludeUserId) {
  const user = await this.findOne({ mobile, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if private email is already taken.
 */
userSchema.statics.isPrivateEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ private_email: email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if provided plain-text password matches stored hash.
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

/**
 * Returns public-safe representation of the user document.
 */
userSchema.methods.transform = function () {
  const user = this.toObject({ getters: true });
  delete user.password;
  delete user.passwordHistory;
  delete user.loginAttempts;
  delete user.lockUntil;
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
