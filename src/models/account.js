const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  // numero de cuenta
  number:       { type: String, required: true },
  // fecha de creacion
  creationDate: { type: Date  , required: true },
  // saldo de la cuenta
  balance:      { type: Number, default: 0 },
  // id del cliente para relacionar las colecciones
  client:       {type: mongoose.Schema.Types.ObjectId, ref: 'client'}
})

module.exports = mongoose.model('account', accountSchema);