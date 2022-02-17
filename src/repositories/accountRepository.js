const Account = require('../models/account');

const getAll = async ()     => await Account.find();
const getOne = async (id)   => await Account.findById(id);
const count  = async ()     => await Account.count();

const save   = async (body) => {
   const account = new Account({
      number       : body.number,
      creationDate : body.creationDate,
      balance      : body.balance
   })
   await account.save();
   return account;
}



module.exports = {
   getAll,
   getOne,
   count,
   save
}