const express = require('express');
const router = express.Router();

const Restaurante = require("../controllers/restaurante");

router.post('/restaurante/cadastrar', Restaurante.cadastrar);
router.get('/restaurante/listar', Restaurante.listar);
router.get('/restaurante/listar/:id', Restaurante.listar);
router.put('/restaurante/alterar', Restaurante.alterar);
router.delete('/restaurante/excluir/:id', Restaurante.excluir);


module.exports = router;