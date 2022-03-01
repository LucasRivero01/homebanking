const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getAll = async ()     => await User.find();
const getOne = async (id)   => await User.findById(id);
const count  = async ()     => await User.count();
const login = async(email)  => await User.findOne({email: email}); 

// guardo el nuevo usuario
const save   = async (body) => {
   const {name, email, password} = body;
   const user = new User({
      name,
      email,
      password
   })
   //encripto la contraseña
   const salt = bcryptjs.genSaltSync();
   user.password = bcryptjs.hashSync(password, salt);
   await user.save();
   return user;
}

module.exports = {
   getAll,
   getOne,
   count,
   save,
   login
}