const { response } = require('express');

const clientRepository = require ('../../../repositories/clientRepository');

const createClient = async (req, res = response) => {
   try{
      await clientRepository.save(req.body);
      return res.status(201).json({
         message: 'El Cliente se creo correctamente',
      })
   }catch (error){
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createClient};