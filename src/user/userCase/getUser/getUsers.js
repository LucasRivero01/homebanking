const {response} = require('express');
const user = require('../../../models/user');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const userRepository = require('../../../repositories/userRepository');

// consulto todos los clientes que existen
const loginUser = async(req, res = response)=>{
   try{
      const {name, email, password} = req.body;
      const user = await userRepository.login(email);
      if (!user){
         return res.status(404).json({
            message: 'No existe usuario',
         })
      }
      const validPassword = await bcryptjs.compare(password, user.password);
      if (!validPassword){
         return res.status(404).json({
            message: 'Contraseña incorrecta',
         })
      }
      // se crea el token, se pasa el payload
      const token = jwt.sign({
         name: user.name,
         id: user._id,
      }, process.env.SECRET_KEY, {
         expiresIn: 4000
      })
      res.status(200).json({
         message: `Bienvenido, ${user.name}`,
         token
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
   loginUser,
}