var componenteNodeModel = require("../models/componenteNodeModel");

async function listarComponentesNode(_req, res) {
    try {
        const response = await componenteNodeModel.listarComponentesNode();
    
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Ocorreu um erro interno'
        })
    }
}

module.exports = {
    listarComponentesNode
}