var empresaModel = require("../models/empresaModel");

async function listarParametro(req, res) {
    try {
        const idEmpresa = req.params.idEmpresa;
        const response = await empresaModel.listarParametro(idEmpresa);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)

        res.status(500).json({
            status: 'error',
            message: 'Ocorreu um erro interno'
        })
    }
}

module.exports = {
    listarParametro
}