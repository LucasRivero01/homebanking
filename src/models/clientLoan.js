const mongoose = require('mongoose');

const loanClientSchema = new mongoose.Schema({
   client:   {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: true},
   loan:     {type: mongoose.Schema.Types.ObjectId, ref: 'loan', autopopulate: true},
   amount:   {type: Number, required: true},
   payments: {type: Number, required: true},
});

loanClientSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('loanClient', loanClientSchema);