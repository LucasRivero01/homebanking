const {response} = require('express');
const transaction = require('../../../models/transaction');

const transactionRepository = require('../../../repositories/transactionRepository');

// consulto todas las transacciones existentes
const getTransaction = async(req, res = response)=>{
   try{
      const transaction = await transactionRepository.getAll();
      const count = await transactionRepository.count();
      if (!transaction){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Transactions',
         response: transaction,
         total: count
      })
   }catch(error){
      console.log(error);
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

// consulto las transacciones de un cliente usando su id
const getTransactionById = async(req, res = response)=>{
   // obtengo el parametro que se recibio
   const id = req.params.id;
   try{
      const transaction = await transactionRepository.getOne(id);
      // si no tengo transacciones envio un mensaje
      if (!transaction){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      // si tiene cuentas ese clientes envío los datos
      res.status(200).json({
         message: 'Transaction',
         data: transaction,
      })
   }catch(error){
      console.log(error);
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {
   getTransaction,
   getTransactionById
}