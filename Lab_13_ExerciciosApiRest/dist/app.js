"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.port ?? 3000;
app.use(express_1.default.json());
const jogadores = [
    {
        id: "1",
        nome: "NeymarJr",
        cpf: "12345678901",
        email: "neymar@example.com",
        telefone: "1199999999",
        posicao: "Atacante"
    },
    {
        id: "2",
        nome: "Messi",
        cpf: "10987654321",
        email: "messi@example.com",
        telefone: "12888888888",
        posicao: "Atacante"
    }
];
app.get("/", (req, res) => {
    res.status(200).send("Olá meu querido mundo novamente");
});
app.get("/api/jogadores", (req, res) => {
    res.status(200).json(jogadores);
});
app.get("/api/jogadores/:id", (req, res) => {
    try {
        const id = req.params.id;
        const jogador = jogadores.find(j => j.id == id);
        if (!jogador) {
            res.status(404).send("Jogador não encontrado");
        }
        res.status(200).json(jogador);
    }
    catch (e) {
        res.status(400).send("Erro ao processar requisição");
    }
});
app.post("/api/jogadores", (req, res) => {
    try {
        const { id, nome, cpf, email, telefone, posicao } = req.body;
        let jogador = {
            id,
            nome,
            cpf,
            email,
            telefone,
            posicao
        };
        jogadores.push(jogador);
        res.status(201).json({ "mensagem": "Jogador cadastrado" });
    }
    catch (e) {
        res.status(500).send("Erro ao cadastrar");
    }
});
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
