const phrase: string = "Trabalhando com filter";

let palavras: string[] = phrase.split(" ");

const resultado = palavras.filter(item => item.length > 5);

console.log(resultado);