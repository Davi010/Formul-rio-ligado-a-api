//Incluindo a bibliotexa express para gerenciar as rotas
const express = require("express");
//Incluir a conexão com o banco de dados
const db = require("../db/models/")
//Gerencia apenas as rotas
const router = express.Router();

//Criar rota para cadastro
router.post("/", async (req, res) => {
    //Para receber os dados do insomnia da requisição
    var data = req.body;

    //Salvar no bd
    await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso",
            data: dataMessage
        });
    }).catch(() => {
        return res.json({
            error: false,
            message: "Erro: Mensagem não cadastrada com sucesso"
        });
    });


});

//Exportar a constante router para funcionar no app.js
module.exports = router;