COMO RODAR O PROJETO BAIXADO
instala todas as dependências indicados pelo package.json

### npm install

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package

### npm init

Gerencia as requisições,rotas e URLS,entre outras

### npm install --save express

Rodar o projeto

### node app.js

Instalar a dependência de forma global no cmd da máquina,apenas se não tiver sido instalada antes,e reinicie o PC

### npm install -g nodemon

Se já tiver instalado o nodemon antigamente basta adiciona-lo ao seu projeto

### npm install --save-dev nodemon

Rodar o projeto usando o nodemon e não precisando sempre parar e iniciar para carregar atualizações

### nodemon app.js

Comando no mysql para criar a base de dados

### CREATE DATABASE davi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca JS que facilita o gerenciamento do banco de dados sql

### npm install --save sequelize

Instalar o drive do banco de dados

### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos,configurações e arquivos de migração para banco de dados

### npm install --save-dev sequelize-cli

Iniciar o sequelize-cli e criar o arquivo config

### npx sequelize-cli init

Padrão mvc criado com models,view da página e controllers

Manipular variáveis de ambiente

### npm install dotenv --save

Cria Models para mensagem:Estou gerando uma model com o nome de Messages e seus atributos com as colunas name,email,assunto e conteudo

### npx sequelize-cli model:generate --name Messages --attributes nome:string,email:string,assunto:string,conteudo:string

Executando a migration para criar no banco de dados a tabela de nome Messages

## npx sequelize-cli db:migrate

Para outro computador replicar a base de dados
COMO RODAR O PROJETO BAIXADO
instala todas as dependências indicados pelo package.json

### npm install

Crie a base de dados no MYSQL
Altere as credenciais do bd no arquivo .env

Executar as migrations

### npx sequelize-cli db:migrate

Rodar o projeto com o nodemon

### nodemon app.js

Abra o arquivo no endereço no navegador e acesse a página inicial

### http://localhost:8080

Permitir que a API receba requisição externa

### npm install cors
