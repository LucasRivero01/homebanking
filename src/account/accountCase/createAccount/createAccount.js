const { response } = require('express');

const accountRepository = require ('../../../repositories/accountRepository');

const createAccount = async (req, res = response) => {
   try{
      await accountRepository.save(req.body);
      return res.status(201).json({
         message: 'La cuenta se creo correctamente',
      })
   }catch (error){
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createAccount};