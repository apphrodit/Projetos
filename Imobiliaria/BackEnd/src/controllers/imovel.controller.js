const con = require("../dao/connect");

const listar = (req, res) => {
    let query = "SELECT * FROM imoveis";

    con.query(query, (err, response) => {
        if (err == undefined) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(response).end();
        }
    })
}

const buscar = (req, res) => {
    const { info } = req.params;

    let query = `SELECT * FROM imoveis WHERE codigo LIKE '${info}' OR endereco LIKE '%${info}%'`;

    con.query(query, (err, response) => {
        if (err == undefined) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const adicionar = (req, res) => {
    let { corretor_id, codigo, endereco, valor_venda, valor_aluguel } = req.body;

    valor_venda = (valor_venda != undefined) ? valor_venda : 0;
    valor_aluguel = (valor_aluguel != undefined) ? valor_aluguel : 0;

    if ((valor_venda == 0) && (valor_aluguel == 0)) {
        res.status(400).json({ "msg": "NECESSARIO INSERIR UM VALOR DE VENDA OU ALUGUEL" })
    } else {
        let query = `INSERT INTO imoveis VALUES (DEFAULT, ${corretor_id}, "${codigo}", "${endereco}", ${valor_venda}, ${valor_aluguel}, 1);`;

        con.query(query, (err, response) => {
            if (err == undefined) {
                res.status(200).json(response).end();
            } else {
                res.status(400).json(err).end();
            }
        })
    }

}

const alterarStatus = (req, res) => {
    const { codigo, status } = req.params;

    let query = `UPDATE imoveis SET status_id = ${status} WHERE codigo = "${codigo}"`;

    con.query(query, (err, response) => {
        if (err == undefined) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const imoveisPorCorretor = (req, res) => {
    const { id } = req.params;

    let query = `SELECT i.codigo, i.endereco, i.valor_venda as venda, i.valor_aluguel as valor_aluguel, s.nome
                FROM imoveis i
                INNER JOIN status s
                ON i.status_id = s.id
                WHERE i.corretor_id = ${id}`;

    con.query(query, (err,response) => {
        if(err == undefined) {
            res.status(200).json(response).end()
        }else {
            res.status(400).json(response).end()
        }
    })
}

module.exports = {
    listar,
    buscar,
    adicionar,
    alterarStatus,
    imoveisPorCorretor
}