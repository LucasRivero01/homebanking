const { response } = require('express');
const accountRepository = require ('../../../repositories/accountRepository');
const clientRepository = require ('../../../repositories/clientRepository');

const createAccount = async (req, res = response) => {
   try{
      console.log(req.body.client);
      const account = await accountRepository.save(req.body);
      return res.status(201).json({
         message: 'La cuenta se creo correctamente',
         response: account
      })
   }catch (error){
      console.log(error);
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {
   createAccount
};