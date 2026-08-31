var database = require('../database/config');

function listarComponentesNode() {
    var instrucaoSql = `
        SELECT * FROM componente_node;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listarComponentesNode
}