// models/Group.js
const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      contribution: {
        type: Number,
        default: 0,
      },
    },
  ],
  transactions: [
    {
      title: {
        type: String,
      },
      amount: {
        type: Number,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      contributors: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          amount: {
            type: Number,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Group', GroupSchema);
