export default class Carro{
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarCarro(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\n`)
    }
}

const ferrari = new Carro("Ferrari", "PureBlood", 2024);

ferrari.mostrarCarro();

ferrari.ano = 2020;

ferrari.mostrarCarro();