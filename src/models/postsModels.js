// Importa a função para conectar ao banco de dados (detalhes em dbConfig.js)
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados 'instalike-back'
    const db = conexao.db("instalike-back");
    // Seleciona a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    // Seleciona o banco de dados 'instalike-back'
    const db = conexao.db("instalike-back");
    // Seleciona a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.insertOne(novoPost);
}
