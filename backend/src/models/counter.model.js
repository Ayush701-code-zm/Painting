const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
  sequenceName: {
    type: String,
    required: true,
    unique: true,
  },
  sequenceValue: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
