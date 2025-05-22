import express from "express";
import { PessoaController } from "./controller/PessoaController";

const pessoaController = new PessoaController();
const app = express();
app.use(express.json())

const PORT = process.env.PORT ?? 3000;

app.post("/api/pessoa", pessoaController.criarPessoa.bind(pessoaController))

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))