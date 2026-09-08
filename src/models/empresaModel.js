var database = require('../database/config');

function buscarMetricasPorToken(tokenNode) {
    var instrucaoSql = `
        SELECT DISTINCT
            comp.nome,
            comp.nome_coluna,
            comp.funcao_psutil,
            comp.argumento_nome,
            comp.argumento_valor,
            comp.atributo_retorno,
            comp.indice_retorno,
            comp.unidade
        FROM node n
        JOIN cluster c
            ON c.id = n.fk_cluster
        JOIN ambiente_hpc a
            ON a.id = c.fk_ambiente_hpc
        JOIN empresa e
            ON e.id = a.fk_empresa

        JOIN ambiente_hpc a2
            ON a2.fk_empresa = e.id
        JOIN cluster c2
            ON c2.fk_ambiente_hpc = a2.id
        JOIN node n2
            ON n2.fk_cluster = c2.id
        JOIN componente_node cn
            ON cn.fk_node = n2.id
        JOIN componente comp
            ON comp.id = cn.fk_componente

        WHERE n.token_node = '${tokenNode}';
    `;

    return database.executar(instrucaoSql);
}

function listarLimites(idEmpresa) {
    var instrucaoSql = `
    SELECT c.nome AS componente, c.unidade, cn.limite_atencao, cn.limite_critico FROM empresa e 
	JOIN ambiente_hpc a ON a.fk_empresa = e.id
    JOIN cluster cl ON cl.fk_ambiente_hpc = a.id JOIN node n ON n.fk_cluster = cl.id
    JOIN componente_node cn ON cn.fk_node = n.id 
    JOIN componente c ON c.id = cn.fk_componente WHERE e.id = ${idEmpresa};`

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMetricasPorToken,
    listarLimites
}