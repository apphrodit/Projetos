const express = require('express');
const router_avaliacao = express.Router();

const Avaliacao = require("../controllers/avaliacao");

router_avaliacao.post('/avaliacao/cadastrar', Avaliacao.cadastrar)
router_avaliacao.get('/avaliacao/listar', Avaliacao.listar)
router_avaliacao.get('/avaliacao/listar/:id', Avaliacao.listar)
router_avaliacao.put('/avaliacao/alterar', Avaliacao.alterar)
router_avaliacao.delete('/avaliacao/excluir/:id', Avaliacao.excluir)

module.exports = router_avaliacao;