//constante para o mongoose
const mongoose = require('../config/db');

//schema --> representação de informações que serão definidas para armazenar no banco de dados
const Schema = mongoose.Schema;

//criar o arquivo de configuração
const consultaSchema = new Schema({
    //as informações armazenadas no banco de dados
    //variáveis da consulta
    tipo:{type: Number, require: true},
    paciente:{type: String, required: true},
    descricao:{type: String, required: true},
    //data no mongo por padrão dia mes ano hora min seg mils.
    data:{type: Date, required: true},
    termino:{type: Boolean, default: false},
    criada:{type: Date, default: Date.now()}
})

//exportar - com a nomenclatura de consulta
module.exports = mongoose.model('Consulta', consultaSchema);