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
        //validar se existe consulta no mesmo dia e horário
        //criar variavel vazia

        let existe

        //validar se ao atualizar ja existe consulta na data
        if(req.params.id){
            existe = await ConsultaModel
                .findOne({'data': {'$eq': new Date(data)},
                //operador not exist --> $ne
                //ne --> id diferente de QUALQUER coisa no parametro id
                //ele irá comparar com dos outros ids das consultas da collection
                '_id':{'$ne':resp.params.id}
            })
        }
        else{
            //buscar na minha collection a consulta pela mesma data
            //vou usar o campo da data para validação
            existe = await ConsultaModel.findOne({'data':{$eq: new Date(data)}})
        }

        if(existe){
            return resp.status(400).json({erro: 'Já existe consulta para essa data'});
        }

        next();
    }
}

module.exports = ConsultaValida;