const con = require("../dao/connection");
const Cliente = require("../models/cliente");

const cadastrar = (req, res) => {
    let cliente = new Cliente(req.body)
    con.query(cliente.create(), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            res.status(500).json(err).end();
    })
}

const listar = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
    })
}

const alterar = (req, res) => {
    let cliente = new Cliente(req.body)
    const { id } = req.params;
    con.query(cliente.update(id), (err, result) => {
        if(err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
        }else if (result.affectedRows > 0) {
            res.status(202).end()
        }else{
            res.status(404).end()
        }
    })
}

const excluir = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.delete(), (err, result) => {
        if(result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}