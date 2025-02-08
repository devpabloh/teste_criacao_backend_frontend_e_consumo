import express from "express"; // aqui estamos importando o modulo do express para criar um servidor web
import cors from "cors"; // importando o módulo cors para permitir requisições de diferentes origens
import db from "./firebase.js"; // importando a configuração do Firebase

const app = express(); // Estamos pegando todos os recursos que tem dentro do express e armazenando na variável app para que possamos usar

app.use(cors()); // Estamos habilitando o CORS para permitir requisições de diferentes origens

app.use(express.json()); // Aqui estamos habilitando o middleware para que o express possa interpretar requisições com JSON

const PORT = 5000; // Estamos criando uma váriavel para armazenar a porta que vamos utilizar

app.listen(PORT, () => { // Estamos iniciando o servidor para escutar requisições na porta definida
    console.log(`Servidor rodando na porta ${PORT}`); // Exibindo uma mensagem no console indicando que o servidor está rodando
});

// Após fazer isso, vamos rodar o servidor utilizando o comando npm run dev

// Agora vamos criar as rotas da API

// Simulando um banco de dados com um array vazio
let dados = [];

// O método POST serve para adicionar novos dados
app.post("/dados", async (requisicao, resposta) => {
    // Criando um novo objeto de dado com um ID único e os dados do corpo da requisição
    const novoDado = requisicao.body;
    // Adicionando o novo dado à coleção "dados" no banco de dados Firebase
    const docRef = await db.collection("dados").add(novoDado);
    // Respondendo com status 201 (Criado) e o novo dado em formato JSON
    resposta.status(201).json({ id: docRef.id, ...novoDado });
});

// O método GET para ver todos os dados
app.get("/dados", async (requisicao, resposta) => {
    const snapshot = await db.collection("dados").get();
    const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    resposta.json(dados);   
});

// O método GET para ver dados específicos
app.get("/dados/:id", async (requisicao, resposta) => {
    // Procurando o dado pelo ID fornecido nos parâmetros da URL
    const doc = await db.collection("dados").doc(requisicao.params.id).get();
    // Se o dado não for encontrado, responder com status 404 (Não Encontrado) e uma mensagem de erro
    if (!doc.exists) {
        return resposta.status(404).json({ message: "Dado não encontrado" });
    }
    // Respondendo com o dado encontrado em formato JSON
    resposta.json({id: doc.id, ...doc.data() });
});

// O método DELETE serve para deletar um dado
app.delete("/dados/:id", async (requisicao, resposta) => {
    // Filtrando o array 'dados' para remover o dado com o ID fornecido nos parâmetros da URL
    await db.collection("dados").doc(requisicao.params.id).delete();
    // Respondendo com uma mensagem de sucesso
    resposta.json({ message: "Dado removido com sucesso" });
});