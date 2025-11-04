//importar mongoose
const mongoose = require('mongoose');

//definir a url de conexão para o mongo
const url = 'mongodb://localhost:27017/Projeto2';

//preciso passar a url e o objeto para conectar ao mongoose
//objeto = true para ter compatibilidade com outras versões

mongoose.connect(url, {useNewUrlParser: true});

//exportar
module.exports = mongoose;