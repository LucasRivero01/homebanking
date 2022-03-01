const mongoose = require('mongoose');
const types = require('../models/transactionType')
const cardSchema = new mongoose.Schema({
  cardholder: { type: String, required: true },
  type:       { type: String },
  color:      { type: String, required: true },
  number:     { type: Number, required: true},
  cvv:        { type: Number, required: true},
  thruDate:   { type: Date, required: true},
  fromDate:   { type: Date, required: true},
  client:     { type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate:true},
  })

cardSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('card', cardSchema);