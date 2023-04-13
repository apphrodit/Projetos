const con = require("../dao/connection");
const Avaliacao = require("../models/avaliacao");


const cadastrar = (req, res) => {
    let avaliacao = new Avaliacao(req.body)
    con.query(avaliacao.create(), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            res.status(500).json(err).end();
    })
}

const listar = (req, res) => {
    let avaliacao = new Avaliacao(req.params)
    con.query(avaliacao.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
    })
}

const alterar = (req, res) => {
    let avaliacao = new Avaliacao(req.body)
    con.query(avaliacao.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let avaliacao = new Avaliacao(req.params)
    con.query(avaliacao.delete(), (err, result) => {
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