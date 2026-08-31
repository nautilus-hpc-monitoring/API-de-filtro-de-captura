var database = require('../database/config');

function listarEmpresa(idEmpresa) {
    var instrucaoSql = `
        SELECT DISTINCT c.nome AS componente, c.comando_parametro, c.unidade FROM empresa e JOIN ambiente_hpc a ON a.fk_empresa = e.id
    JOIN cluster cl ON cl.fk_ambiente_hpc = a.id JOIN node n ON n.fk_cluster = cl.id
    JOIN componente_node cn ON cn.fk_node = n.id
    JOIN componente c ON c.id = cn.fk_componente WHERE e.id = ${idEmpresa};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listarEmpresa
}