let produtos2 : Array<string> = ["Arroz", "Feijão", "Leite", "Pão", "Açucar", "Café", "Oléo"];

let pos: number = produtos2.indexOf("Leite");
produtos2.splice(pos, 1, "Queijo");
produtos2.shift();
produtos2.push("Farinha");

let produtos2Invertido: Array<string> = [...produtos2];
let tamanho: number = produtos2.length;

for(let i = 0; i < produtos2.length; i++){
    
    produtos2Invertido[i] = produtos2[tamanho - 1];
    tamanho--;
}

console.log(produtos2);
console.log(produtos2Invertido);
console.log(produtos2.length);