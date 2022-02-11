const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firt_name: { type: String, required: true },
  last_name: { type: String, required: true },
})

module.exports = mongoose.model('clients', clientSchema);