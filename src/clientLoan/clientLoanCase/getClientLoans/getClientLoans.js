const { response } = require('express');
const clientLoanRepository = require('../../../repositories/clientLoanRepository');

const getClientLoans = async(req, res = response) => {
    try {
       // busco todos los prestamos de ese cliente
        const clientLoans = await clientLoanRepository.getAll();
        const count = await clientLoanRepository.count();
        // si no tengo prestamos devuelvo status 404
        if (!clientLoans) {
            return res.status(404).json({
                message: 'Not Found'
            });
        }
        // si tengo prestamos devuelvo status 201
        res.json({
            message: 'ClientLoans',
            response: clientLoans,
            total: count
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

const getClientLoanById = async(req, res = response) => {
    const id = req.params.id;
    try {
        const clientLoan = await clientLoanRepository.getOne(id);
        if (!loan) {
            return res.status(404).json({
                message: 'Not Found'
            });
        }
        res.json({
            message: 'ClientLoan',
            response: clientLoan
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    getClientLoans,
    getClientLoanById
}