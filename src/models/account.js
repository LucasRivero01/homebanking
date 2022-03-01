const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
  // numero de cuenta
  number:       { type: String, required: true },
  // fecha de creacion
  creationDate: { type: Date  , required: true },
  // saldo de la cuenta
  balance:      { type: Number, default: 0 },
  
  transactions: [{type: mongoose.Schema.Types.ObjectId, ref: 'transaction', autopopulate:true}],
  // id del cliente para relacionar las colecciones
  //client: {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: true},
});
accountSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('account', accountSchema);