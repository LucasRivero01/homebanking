const { response } = require('express');

const loanRepository = require ('../../../repositories/loanRepository');

const createLoan = async (req, res = response) => {
   try{
      const loan = await loanRepository.save(req.body);
      return res.status(201).json({
         message: 'El Producto se creo correctamente',
         response: loan
      })
   }catch (error){
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createLoan};