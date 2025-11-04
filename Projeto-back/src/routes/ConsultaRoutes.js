//importar o express
const express = require('express');
const rota = express.Router();

//importar o controller
const ConsultaController = require('../controller/ConsultaController');

//importar o arquivo de validação
const ConsultaValida = require('../middlewares/ConsultaValida');


//todas as vezes que chegar uma req do tipo post em /consulta
//vou chamar o ConsultaController
//post para receber
rota.post('/', ConsultaValida, ConsultaController.criar);

module.exports = rota