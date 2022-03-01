const { response } = require('express');
const clientLoanRepository = require('../../../repositories/clientLoanRepository');

const createClientLoan = async(req, res = response) => {
    console.log(req.body);
    try {
        const clientLoan = await clientLoanRepository.save(req.body);
        res.status(201).json({
            message: 'Se genero un nuevo prestamo',
            response: clientLoan
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createClientLoan
}