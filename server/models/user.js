const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  collegeData: [
    {
      college: {
        type: String,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      rank: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
