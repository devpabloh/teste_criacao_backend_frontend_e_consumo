# teste_criacao_backend_frontend_e_consumo
Nesse repositório estou aprendendo e testando como criar um backend com várias rotas , guardar os dados utilizando o firebase e depois consumir os dados no frontend.

1º Criando o backend com node.js e express.

Criar uma pasta para o projeto backend e inicializar um projeto com node.js
mkdir nomedapasta: comando utilizado para criar uma pasta para o projeto, o comando vem seguido do nome que você quer dar a pasta.

cd nomedapasta: comando utilizado para entrar na pasta que acabamos de criar
npm init -y: Esse comando serve para criar o arquivo package.json com as configurações básicas do projeto.

2º Instalando as dependências.

npm install express cors: Aqui estamos usando o node package maneger para gerir a instalação dos pacotes / dependências do express que serve para a gente criar o servidor e o cors que é usado para permitir que o frontend possa ter acesso a API.

npm install --save-dev nodemon: Utilizamos esse comando para instalar o nodemon no ambiente de desenvolvimento -dev, ele serve basicamente para reiniciar o servidor automaticamente quando há mudanças no código.

Após a instalação podemos ir no packege.json na parte dos "scripts" e adicionar scripts para rodar o servidor com nodemon

"scripts":{
    "start": "node server.js",
    "dev": "nodemon server.js"
},

3º Criar o servidor utilizando Express
Criar um arquivo server.js.

