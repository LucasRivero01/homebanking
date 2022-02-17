const { Router } = require('express');
const router = new Router();

const {getClients, createClient} = require('../user/userCase/clientController');
const {getAccounts, createAccount} = require('../account/accountCase/accountController');

router.get('/clients/:id', getClients.getClientById);
router.get('/clients', getClients.getClient);
router.post('/clients', createClient.createClient);


router.get('/accounts/:id', getAccounts.getAccountById);
router.get('/accounts', getAccounts.getAccount);
router.post('/accounts', createAccount.createAccount);


module.exports = router;