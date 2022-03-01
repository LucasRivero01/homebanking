const { response } = require('express');
const cardRepository = require ('../../../repositories/cardRepository');

const createCard = async (req, res = response) => {
   try{
      const card = await cardRepository.save(req.body);
      return res.status(201).json({
         message: 'La tarjeta se agrego correctamente',
         response: card
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
   createCard
};