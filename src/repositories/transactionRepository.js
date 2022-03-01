const { ClientSession } = require('mongodb');
const Transaction = require('../models/transaction');
const Account = require('../models/account');
const transactionType = require('../models/transactionType');

const getAll = async ()     => await Transaction.find();
// consulto las transacciones y sus cuentas (.populate('accounts'))
const getOne = async (id)   => await Transaction.findById(id);
const count  = async ()     => await Transaction.count();

// guardo la nueva transaccion
const save   = async (body) => {
   // si se trata de un credito lo paso a negativo
   if(transactionType.CREDIT){
      body.amount = body.amount * -1
   }
   const transaction = new Transaction({
      type        : transactionType.DEBIT,
      amount      : body.amount,
      description : body.description,
      account     : body.account
   })

   const newtransaction = await transaction.save();
   
   const account = await Account.findById(newtransaction.account);
   // le agrego el id de la nueva cuenta
   account.transactions.push(newtransaction._id);
   
   // actualizo las cuentas que tiene el cliente
   await Account.updateOne({_id: account._id}, {transactions: account.transactions});

   return transaction;
}

module.exports = {
   getAll,
   getOne,
   count,
   save
}