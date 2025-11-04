const express = require('express');

const api = express();

//para a api saber que estamos recebendo e devolvendo informações json
api.use(express.json());

//importar o routes
const ConsultaRoutes = require('./routes/ConsultaRoutes');
api.use('/consulta', ConsultaRoutes);
api.get('/teste', (req, resp) =>{
    resp.send('Testando API');
});

api.listen(3000, () => {
    console.log("API online");
});