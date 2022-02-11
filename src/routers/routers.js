const { Router } = require('express');
const router = new Router();

const {getClients} = require('../user/userCase/clientController');

router.get('/clients', getClients.getClient);
module.exports = router;