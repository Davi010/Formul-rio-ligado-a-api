//Normaliza o código,ajuda a evitar gambiarra
'use strict';

//Permite trabalhar com o sistema de arquivo do computador
const fs = require('fs');
//Fornece utilitários para trabalhar com caminhos de arquivos e diretorios
const path = require('path');
//Sequelize é um ORM para node.js,com suporte para varios bancos
//ORM mapeamento-onjeto-relacional,tabelas do banco são representadas em classes e os registros das tabelas seriam instâncias dessas classes
const Sequelize = require('sequelize');
//Informações do processo da página atual
const process = require('process');
//Permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);
//Verifica se pode utilizar a variável global ou 'development'
const env = process.env.NODE_ENV || 'development';
//Incluir o arquivo
const config = require(__dirname + '/../config/config.js')[env];
//Criar constante com objeto vazio
const db = {};

//Cria variável que recebe a conexão com o bd
let sequelize;
//Verifica qual a configuraçãõ do bd você deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //Usa as configurações do arquivo "config/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//verificar a conexão com o banco
try{
  console.log("Sucesso");
}
catch(error){
  console.log("Falha",error);
}

//Identifica o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Atribuir a conexão com o banco de dados para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Exporta a instrução que está dentro da constante db
module.exports = db;
