const mongoose = require('mongoose');
const types = require('../models/transactionType')
const transactionSchema = new mongoose.Schema({
  type:        { type: String, required: true },
  amount:      { type: Number, default: 0 },
  description: { type: String, required: true },
  date:        { type: Date, default: Date.now},
  account:     {type: mongoose.Schema.Types.ObjectId, ref: 'account', autopopulate:false}
})

module.exports = mongoose.model('transaction', transactionSchema);