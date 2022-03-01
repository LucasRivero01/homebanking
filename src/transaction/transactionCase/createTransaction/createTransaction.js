const { response } = require('express');

const transactionRepository = require ('../../../repositories/transactionRepository');

const createTransaction = async (req, res = response) => {
   try{
      await transactionRepository.save(req.body);
      return res.status(201).json({
         message: 'La transaccion se creó correctamente',
      })
   }catch (error){
      console.log(error)
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createTransaction};