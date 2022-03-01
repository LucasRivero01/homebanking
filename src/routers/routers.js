const { Router } = require('express');
const router = new Router();

const {getClients, createClient} = require('../user/userCase/clientController');
const {getAccounts, createAccount} = require('../account/accountCase/accountController');
const {getTransaction, createTransaction } = require('../transaction/transactionCase/transactionController');
const {getLoans, createLoan } = require('../loan/loanCase/loanController');
const {getClientLoans, createClientLoan} = require('../clientLoan/clientLoanCase/clientLoanController');
const {getCards, createCards} = require('../card/cardCase/cardController');
const {loginUser, createUser} = require('../user/userCase/userController');
const verifyToken = require('../routers/validate-token');

// rutas para clients
// consulta por id
router.get('/clients/:id', verifyToken, getClients.getClientById);
// consulta todos
router.get('/clients',  verifyToken, getClients.getClient);
// creacion de clients
router.post('/clients', verifyToken, createClient.createClient);

// rutas para accounts
// consulta por id
router.get('/accounts/:id', verifyToken, getAccounts.getAccountById);
// consulta todos
router.get('/accounts', verifyToken, getAccounts.getAccount);
// creacion de accounts
router.post('/accounts', verifyToken, createAccount.createAccount);

// rutas para transaction
// consulta por id
router.get('/transaction/:id', verifyToken, getTransaction.getTransactionById);
// consulta todos
router.get('/transaction', verifyToken, getTransaction.getTransaction);
// creacion de transaction
router.post('/transaction', verifyToken, createTransaction.createTransaction);

// rutas para loan
// consulta por id
router.get('/loan/:id', verifyToken, getLoans.getLoanById);
// consulta todos
router.get('/loan', verifyToken, getLoans.getLoan);
// creacion de prestamo
router.post('/loan', verifyToken, createLoan.createLoan);

// rutas para loan
// consulta por id
router.get('/clientLoans/:id', verifyToken, getClientLoans.getClientLoanById);
// consulta todos
router.get('/clientLoans', verifyToken, getClientLoans.getClientLoans);
// creacion de transaction
router.post('/clientLoans', verifyToken, createClientLoan.createClientLoan);

// rutas para cards
// consulta por id
router.get('/card/:id', verifyToken, getCards.getCardById);
// consulta todos
router.get('/card', verifyToken, getCards.getCard);
// creacion de transaction
router.post('/card', verifyToken, createCards.createCard);

//router.post('/signup', createLogins.createLogin);

router.post('/signup', verifyToken, createUser.createUser);
router.post('/login', loginUser.loginUser)

module.exports = router;