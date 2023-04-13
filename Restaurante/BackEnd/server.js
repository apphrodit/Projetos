const express = require('express');
const cors = require('cors');

const router = require("./src/routes/restaurante");
const router_cliente = require("./src/routes/cliente");
const router_categoria = require("./src/routes/categoria");
const router_cardapio = require("./src/routes/cardapio");
const router_avaliacao = require("./src/routes/avaliacao");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/', router_cliente);
app.use('/', router_categoria);
app.use('/', router_cardapio);
app.use('/', router_avaliacao);


app.listen(3000, () => {
    console.log("Server Running on port 3000");
});