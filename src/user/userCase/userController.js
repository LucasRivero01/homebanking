//const getUsers = require('../userCase/getUser/getUsers');
const createUser = require('../userCase/createUser/createUser')
const loginUser  = require('../userCase/getUser/getUsers');
const logoutUser = require('../userCase/getUser/getUsers');


module.exports = {
   createUser,
   loginUser,
   logoutUser
}