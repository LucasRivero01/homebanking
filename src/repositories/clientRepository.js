const Client = require('../models/client');

const getAll = async ()     => await Client.find();
// consulto los clientes y sus cuentas (.populate('accounts'))
const getOne = async (id)   => await Client.findById(id);
const count  = async ()     => await Client.count();

// guardo el nuevo cliente
const save   = async (body) => {
   const client = new Client({
      firstName: body.firstName,
      lastName : body.lastName,
      email    : body.email
   })
   await client.save();
   return client;
}

module.exports = {
   getAll,
   getOne,
   count,
   save
}