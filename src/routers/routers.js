const { Router } = require('express');
const router = new Router();

const {getClients, createClient} = require('../user/userCase/clientController');
const {getAccounts, createAccount} = require('../account/accountCase/accountController');

// rutas para clients
// consulta por id
router.get('/clients/:id', getClients.getClientById);
// consulta todos
router.get('/clients', getClients.getClient);
// creacion de clients
router.post('/clients', createClient.createClient);

// rutas para accounts
// consulta por id
router.get('/accounts/:id', getAccounts.getAccountById);
// consulta todos
router.get('/accounts', getAccounts.getAccount);
// creacion de accounts
router.post('/accounts', createAccount.createAccount);

module.exports = router;