export default class Produto{
    nome : string
    preco : number
    
    constructor (nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    
    mostrarInformacoes (): void {
        console.log(`Nome: ${this.nome}\nPreço: ${this.preco}\n`)
    }
}
// uso da classe
const prod = new Produto ("Notebook", 3500)
prod.mostrarInformacoes()