const ConsultaModel = require('../model/ConsultaModel');

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
}

module.exports = new ConsultaController();