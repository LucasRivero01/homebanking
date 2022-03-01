const Account = require('../models/account');
const Client = require('../models/client');

const getAll = async ()     => await Account.find();
// consulto las cuentas del cliente
const getOne = async (id)   => await Account.findById(id);
const count  = async ()     => await Account.count();

// guardo la nueva cuenta con el id del cliente
const save   = async (body) => {
   const account = new Account({
      number       : body.number,
      creationDate : body.creationDate,
      balance      : body.balance,
      client       : body.client
   })

   const newaccount = await account.save();
   const client = await Client.findById(newaccount.client);
   // le agrego el id de la nueva
   client.accounts.push(newaccount._id);
   // actualizo las cuentas que tiene el cliente
   await Client.updateOne({_id: client._id}, {accounts: client.accounts});
   return account;
}



module.exports = {
   getAll,
   getOne,
   count,
   save
}