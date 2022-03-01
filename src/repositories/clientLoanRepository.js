const Client = require('../models/client');
const ClientLoan = require('../models/clientLoan');
const Loan = require('../models/loan');
const getAll = async ()     => await ClientLoan.find();
// consulto las transacciones y sus cuentas (.populate('accounts'))
const getOne = async (id)   => await ClientLoan.findById(id);
const count  = async ()     => await ClientLoan.count();

const save = async(body) => {
   const clientLoan = new ClientLoan({
      client: body.client,
      loan: body.loan,
      amount: body.amount,
      payments: body.payments
   });

   const newClientLoanSaved = await clientLoan.save();

   const client = await Client.findById(newClientLoanSaved.client);
   client.loanClients.push(newClientLoanSaved._id);
   await Client.updateOne({ _id: client._id}, {loanClients: client.loanClients});

   const loan = await Loan.findById(newClientLoanSaved.loan);
   // le paso el id del clientLoans que guarde
   loan.loanClients.push(newClientLoanSaved._id);
   await Loan.updateOne({ _id: loan._id}, { loanClients: loan.loanClients});
   
   return clientLoan;
}


module.exports = {
   getAll,
   getOne,
   count,
   save
}