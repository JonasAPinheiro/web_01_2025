export default class Aluno{
    nome: string
    matricula: string
    idade: number


    constructor(nome: string, matricula: string, idade: number){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
    }

    imprimirAluno(){
        console.log(`Nome: ${this.nome}\nMatricula: ${this.matricula}\nIdade: ${this.idade}`);
    }
}

