const { response } = require('express');
const userRepository = require ('../../../repositories/userRepository');

const createUser = async (req, res = response) => {
   try{
      const email = req.body.email;
      const existeMail = await userRepository.login(email);
      if (existeMail){
         return res.status(404).json({
            message: `el correo ${email} ya esta registrado`,
         })
      }
      const user = await userRepository.save(req.body);
      return res.status(201).json({
         message: 'El Usuario se creo correctamente',
         response: user
      })
   }catch (error){
      console.log(error);
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createUser};