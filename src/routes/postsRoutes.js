import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControllers"; 

// Para Windows:
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

// Para Linux e MacOS, somente iss:
// const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Habilita o Express a entender requisições JSON
    app.use(express.json());
    // Rota GET para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota POST para criar um post
    app.post("/posts", postarNovoPost);
    // Rota POST para criar um upload
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;
