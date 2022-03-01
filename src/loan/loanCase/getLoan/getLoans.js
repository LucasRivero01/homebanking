const {response} = require('express');
const loan = require('../../../models/loan');

const loanRepository = require('../../../repositories/loanRepository');

// consulto todos los clientes que existen
const getLoan = async(req, res = response)=>{
   try{
      const loans = await loanRepository.getAll();
      const count = await loanRepository.count();
      if (!loans){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Loans',
         response: loans,
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

// consulto un cliente por id
const getLoanById = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const loan = await loanRepository.getOne(id);
      if (!loan){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Loan',
         data: loan,
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
   getLoan,
   getLoanById
}