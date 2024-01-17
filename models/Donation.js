const mongoose = require('mongoose');

const donation = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  fundraiserId: {
    type: String,
    required: true,
    ref: 'Fundraiser',
  },
  userId: {
    type: String,
    required: true,
    ref: 'User',
  },
  comment: {
    type: String,
    default: '',
  },
  QnAObject: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

donation.virtual('id').get(function () {
  return this._id.toHexString();
});

donation.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Donation', donation);
