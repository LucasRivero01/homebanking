const {response} = require('express');
const account = require('../../../models/account');

const accountRepository = require('../../../repositories/accountRepository');

// consulto todas las cuentas existentes
const getAccount = async(req, res = response)=>{
   try{
      const accounts = await accountRepository.getAll();
      const count = await accountRepository.count();
      if (!accounts){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Accounts',
         response: accounts,
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

// consulto las cuentas de un cliente usando su id
const getAccountById = async(req, res = response)=>{
   // obtengo el parametro que se recibio
   const id = req.params.id;
   try{
      const account = await accountRepository.getOne(id);
      // si no tengo cuentas envio un mensaje
      if (!account){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      // si tiene cuentas ese clientes envío los datos
      res.status(200).json({
         message: 'Account',
         data: account,
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
   getAccount,
   getAccountById
}