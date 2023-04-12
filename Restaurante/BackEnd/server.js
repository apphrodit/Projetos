const express = require('express');
const cors = require('cors');

const router = require("./src/routes/restaurante")
const router_cliente = require("./src/routes/cliente")

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/', router_cliente);

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});