const {response} = require('express');
const account = require('../../../models/account');

const accountRepository = require('../../../repositories/accountRepository');

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

const getAccountById = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const account = await accountRepository.getOne(id);
      if (!account){
         return res.status(404).json({
            message: 'Not found',
         })
      }
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