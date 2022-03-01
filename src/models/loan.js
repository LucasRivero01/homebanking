const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  name:       { type: String, unique: true, required: true },
  maxAmount:  { type: Number, required: true },
  payments:   [{ type: Number, required: true }],
  loanClients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'loanClient', autopopulate: true }]
})

loanSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('loan', loanSchema);