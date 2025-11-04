const ConsultaModel = require('../model/ConsultaModel');
const hoje = new Date();

const {startOfDay, endOfDay} = require('date-fns');

//criar uma classe para que toda a regra seja implamentada dnetro dela
//quando eu quiser chmar uma função será necessáro fazer a chanada di nome da classe.nomedafuncao
class ConsultaController{
    async criar(req, resp){
        //vamos pegar por requisicao tudo que chega do body
        //somente os dados obriogatórios
        const consulta = new ConsultaModel(req.body);
        //esperar a consulta salvar
        await consulta
            .save()// salva no mongo
            .then(resposta => {
                return resp.status(200).json(resposta)
            })//se tudo deu certo eu devolvo um json com as inforamções
            .catch(erro=>{
                return resp.status(500).json(erro)
            })
    }

    async atualizar(req, resp){
        //resgatar os dados da consulta do mongo
        //buscar uma consulta pelo id
        //vamos passar no body da req as solicitações de alteração
        //o próprio mongo identifica se a collection foi atualizada
        //a propriedade new: true --> sempre vai me retornar os dados da consulta atualizado na resposta
        //devolvendo para o servidor uma resposta com a consulta atualizada

        await ConsultaModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
            .then(resposta =>{
                    return resp.status(200).json(resposta);
            })
            .catch(erro =>{
                return resp.status(500).json(erro);
            })
    }

    async listar(req, resp){
    
        //operador in --> estiver entre os tipos que existem na minha collection
        await ConsultaModel.find({'tipo': {'$in': req.body.tipo} })
            .sort('data')
            .then(resposta =>{
                    return resp.status(200).json(resposta);
            })
            .catch(erro =>{
                return resp.status(500).json(erro);
            })
    }

    async consulta(req, resp){

    //operador in --> estiver entre os tipos que existem na minha collection
    await ConsultaModel.findById(req.params.id)
        .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro =>{
            return resp.status(500).json(erro);
        })
    }

    async deletar(req, resp){

        await ConsultaModel.deleteOne({'_id':req.params.id})
        .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro =>{
            return resp.status(500).json(erro);
        })
    }

    async concluida(req, resp){

        await ConsultaModel.findByIdAndUpdate({'_id':req.params.id}, 
            {'termino': req.params.termino},
            {new: true}
        )
        .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro =>{
            return resp.status(500).json(erro);
        })
    }

    async atrasadas(req, resp){
        //operador $lt --> less than --> menor que
        await ConsultaModel.find({'data':{'$lt': hoje}}, {'termino': false})
        .sort('data')
        .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro =>{
            return resp.status(500).json(erro);
        })
    }

    async consultasHoje(req, resp){
        //operador $lt --> less than --> menor que
        await ConsultaModel.find(
            //operador $gte --> grand than equals --> maior que
            //operador $lt
            {'data':{'$gte': startOfDay(hoje), '$lte': endOfDay(hoje)}}
        )
        .sort('data')
        .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro =>{
            return resp.status(500).json(erro);
        })
    }
}

module.exports = new ConsultaController();