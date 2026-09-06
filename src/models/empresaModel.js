var database = require('../database/config');

function listarParametro(idEmpresa) {
    var instrucaoSql = `
        SELECT DISTINCT
            c.nome,
            c.nome_coluna,
            c.funcao_psutil,
            c.argumento_nome,
            c.argumento_valor,
            c.atributo_retorno,
            c.indice_retorno,
            c.unidade
        FROM empresa e
        JOIN ambiente_hpc a
            ON a.fk_empresa = e.id
        JOIN cluster cl
            ON cl.fk_ambiente_hpc = a.id
        JOIN node n
            ON n.fk_cluster = cl.id
        JOIN componente_node cn
            ON cn.fk_node = n.id
        JOIN componente c
            ON c.id = cn.fk_componente
        WHERE e.id = 1;`

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
    listarParametro,
    listarLimites
}