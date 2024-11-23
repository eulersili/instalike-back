// Importa o módulo Express para criar um servidor web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express para iniciar o servidor
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
