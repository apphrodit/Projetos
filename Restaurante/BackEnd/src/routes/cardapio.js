const express = require('express');
const router_cardapio = express.Router();

const Cardapio = require("../controllers/cardapio");

router_cardapio.post('/cardapio/cadastrar', Cardapio.cadastrar)
router_cardapio.get('/cardapio/listar', Cardapio.listar)
router_cardapio.get('/cardapio/listar/:id', Cardapio.listar)
router_cardapio.put('/cardapio/alterar/:id', Cardapio.alterar)
router_cardapio.delete('/cardapio/excluir/:id', Cardapio.excluir)

module.exports = router_cardapio;