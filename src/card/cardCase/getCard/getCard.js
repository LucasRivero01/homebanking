const {response} = require('express');
const card = require('../../../models/card');

const cardRepository = require('../../../repositories/cardRepository');

// consulto todas las cuentas existentes
const getCard = async(req, res = response)=>{
   try{
      const cards = await cardRepository.getAll();
      const count = await cardRepository.count();
      if (!cards){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'Cards',
         response: cards,
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
const getCardById = async(req, res = response)=>{
   // obtengo el parametro que se recibio
   const id = req.params.id;
   try{
      const card = await cardRepository.getOne(id);
      // si no tengo cuentas envio un mensaje
      if (!card){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      // si tiene cuentas ese clientes envío los datos
      res.status(200).json({
         message: 'Card',
         data: card,
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
   getCard,
   getCardById
}