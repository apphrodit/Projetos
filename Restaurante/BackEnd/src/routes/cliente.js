const express = require('express');
const router_cliente = express.Router();

const Cliente = require("../controllers/cliente");

router_cliente.post('/cliente/cadastrar', Cliente.cadastrar);
router_cliente.get('/cliente/listar', Cliente.listar);
router_cliente.get('/cliente/listar/:id', Cliente.listar);
router_cliente.put('/cliente/alterar', Cliente.alterar);
router_cliente.delete('/cliente/excluir/:id', Cliente.excluir);


module.exports = router_cliente;