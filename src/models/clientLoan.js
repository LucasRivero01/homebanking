const mongoose = require('mongoose');

const loanClientSchema = new mongoose.Schema({
   amount:   {type: Number, required: true},
   payments: {type: Number, required: true},
   client:   {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: false},
   loan:     {type: mongoose.Schema.Types.ObjectId, ref: 'loan', autopopulate: true},
});

loanClientSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('loanClient', loanClientSchema);