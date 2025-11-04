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

rota.put('/:id', ConsultaValida, ConsultaController.atualizar)

rota.get('/listar/todas', ConsultaController.listar); //era pra ser /listar/todas, mas ta dando erro --> o erro era a ordem do /listar/:id

rota.get('/listar/:id', ConsultaController.consulta);

module.exports = rota