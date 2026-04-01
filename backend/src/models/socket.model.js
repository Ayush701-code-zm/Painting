const mongoose = require('mongoose');

const socketSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    storeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Store',
    },
    socketId: {
      type: String,
      required: true,
    },
    connected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

socketSchema.index({ userId: 1, storeId: 1 }, { unique: true });

const Socket = mongoose.model('Socket', socketSchema);

module.exports = Socket;
