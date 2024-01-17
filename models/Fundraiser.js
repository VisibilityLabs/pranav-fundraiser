const mongoose = require('mongoose');

const fundraiserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priceTarget: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    ref: 'User',
  },
  donationProgress: {
    type: Number,
    default: 0,
  },
  QnAObject: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

fundraiserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

fundraiserSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Fundraiser', fundraiserSchema);
