//Inclua as bibliotecas:Express para gerenciar as requisições,rotas e urls
const express = require('express');
//Importar a biblioteca que permite conexão externa para a API
const cors = require('cors');
//Chama a função express
const app = express();

//Executando o cors
app.use(cors());
//Preparando a aplicação para recebr um objeto json criando um midleware instrução executada antes da rota
app.use(express.json());
// Para analisar dados do formulário HTML
app.use(express.urlencoded({ extended: true })); 


//Middleware para permitir requisição externa
app.use((req, res, next) => {
    //Permite qualquer endereço fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    //Aceitar determinados tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    //Permitindo o envio de dados para a API
    res.header("Access-Control-Allow-Headers", "Content-Type");
    
    //Por ser um midlleware indique que o processamento continue mesmo se tiver erro
    next();

});
//Incluir as controllers
const messages = require("./controllers/messages.js");
//Criando as rotas
app.use('/message', messages);
//start no projeto deve rodar na porta 8080 e crie um arrow function de callback com console.log
app.listen(8080, () => {
    console.log("Servidor Funcionando: http://localhost:8080");
});