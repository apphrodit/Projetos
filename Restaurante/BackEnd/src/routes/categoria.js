const express = require('express');
const router_categoria = express.Router();

const Categoria = require("../controllers/categoria");

router_categoria.post('/categoria/cadastrar', Categoria.cadastrar)
router_categoria.get('/categoria/listar', Categoria.listar)
router_categoria.get('/categoria/listar/:id', Categoria.listar)
router_categoria.put('/categoria/alterar', Categoria.alterar)
router_categoria.delete('/categoria/excluir/:id', Categoria.excluir)

module.exports = router_categoria;