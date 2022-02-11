const {response} = require('express');
const client = require('../../../models/client');

const clientRepository = require('../../../repositories/clientRepository');

const getClient = async(req, res = response)=>{
   try{
      const clients = await clientRepository.getAll();
      const count = await clientRepository.count();
      if (!client){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Clients',
         response: clients,
         total: count
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {
   getClient
}