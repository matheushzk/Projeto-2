//chamar o meu model
const ConsultaModel = require('../model/ConsultaModel');

//importar o date-fns
//do date-fns iremos utilizar a função isPast
const {isPast} = require('date-fns');
const ConsultaValida = async(req, resp, next) => {
    //criar as constantes para desestruturação dos dados
    //dados enviados via body da requisição
    const tipo = req.body.tipo;
    const paciente = req.body.paciente
    const descricao = req.body.descricao
    const data = req.body.data

    if(!tipo)
        return resp.status(400).json({erro: 'tipo da consulta obrigatório'})
    else if(!paciente)
        return resp.status(400).json({erro: 'paciente da consulta obrigatório'})
    else if(!descricao)
        return resp.status(400).json({erro: 'descricao da consulta obrigatório'})
    else if(!data)
        return resp.status(400).json({erro: 'data da consulta obrigatório'})
    //validar a data passada
    else if(isPast(new Date(data)))
        return resp.status(400).json({erro: 'Escolha uma data no futuro'})
    else{
        next();
    }
}

module.exports = ConsultaValida;