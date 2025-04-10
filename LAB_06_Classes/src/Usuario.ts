export default class Usuario{
    nome: string
    email: string

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }

    boasVindas(){
        console.log(`Bem vindo(a), ${this.nome}! seu email é ${this.email}`)
    }
}

const user1 = new Usuario("Jonas", "jonas.pinheiro@aluno.ifsp.edu.br")

user1.boasVindas()