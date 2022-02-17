const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  number:       { type: String, required: true },
  creationDate: { type: Date  , required: true },
  balance:      { type: Number, required: true },
})

module.exports = mongoose.model('account', accountSchema);