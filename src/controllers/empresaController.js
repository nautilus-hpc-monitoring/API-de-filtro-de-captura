var empresaModel = require("../models/empresaModel");

async function listarEmpresa(req, res) {
    try {
        const idEmpresa = req.params.idEmpresa;
        const response = await empresaModel.listarEmpresa(idEmpresa);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)

        res.status(500).json({
            status: 'error',
            message: 'Ocorreu um erro interno'
        })
    }
}

async function listarLimites(req, res) {
    try {
        const idEmpresa = req.params.idEmpresa;
        const response = await empresaModel.listarLimites(idEmpresa);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            status: 'error',
            message: 'Ocorreu um erro interno'
        })
    }
}

module.exports = {
    listarEmpresa,
    listarLimites
}