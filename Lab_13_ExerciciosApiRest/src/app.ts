import express, {Request, response, Response} from "express";
import { request } from "http";

const app = express();
const port = process.env.port ?? 3000;
app.use(express.json());

type Jogadores = {
    id: string,
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    posicao: string
}

const jogadores: Jogadores[] = [
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
]

app.get("/", (req: Request, res: Response) =>{
    res.status(200).send("Olá meu querido mundo novamente")
})


app.get("/api/jogadores", (req: Request, res: Response) =>{
    res.status(200).json(jogadores);
})

app.get("/api/jogadores/:id", (req: Request, res: Response) =>{
    try{
        const id = req.params.id;
        const jogador = jogadores.find(j => j.id == id)

        if(!jogador){
            res.status(404).send("Jogador não encontrado");
        }

        res.status(200).json(jogador);
        
    }catch(e: unknown){
        res.status(400).send("Erro ao processar requisição");
    }
})

app.post("/api/jogadores", (req: Request, res: Response) =>{
    try{
        const {id, nome, cpf, email, telefone, posicao} = req.body

        let jogador: Jogadores = {
            id,
            nome,
            cpf,
            email,
            telefone,
            posicao
        }

        jogadores.push(jogador);
        res.status(201).json({"mensagem": "Jogador cadastrado"})
    }catch(e: unknown){
        res.status(500).send("Erro ao cadastrar")
    }
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));