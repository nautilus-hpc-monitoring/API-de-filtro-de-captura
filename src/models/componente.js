var database = require('../database/config');

function listarComponentes() {
    var instrucaoSql = `
        SELECT id, nome, comando_paraemtro, unidade
        FROM componente
    `;

    return database.executar(listarComponentes());
}

module.exports = {
    listarComponentes
}