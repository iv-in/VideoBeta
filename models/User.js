const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ['GUEST', 'ADMIN'],
    default: 'GUEST'
  },
  favourites: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
}, {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
