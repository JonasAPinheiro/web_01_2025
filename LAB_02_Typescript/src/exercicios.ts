// Exercício 1

let idades: number[] = [10, 15, 20, 8, 17, 25];

for(let i = 0; i < idades.length; i++){
    if(idades[i] < 12){
        console.log(`O ${i + 1}° que tem ${idades[i]} anos é criança`);
    }
    else if(idades[i] < 18){
        console.log(`O ${i + 1}° que tem ${idades[i]} anos é adolescente`);
    }
    else{
        console.log(`O ${i + 1}° que tem ${idades[i]} anos é adulto`);
    }
};

// Exercício 2

let nomes: Array<string> = ["Carlos", "Ana", "Pedro", "Mariana"];
let pos = nomes.indexOf("Pedro");
nomes.splice(pos, 1);
nomes.push("João");
nomes.unshift("Beatriz");
console.log(nomes);

// Exercício 3

let listaMista: Array<number | string> = [1, "Maça", 2, "Banana", 3, "Laranja"];
let numeros: number[] = [];
let frutas: string[] = [];

for(let item of listaMista){
    if(typeof item == "number"){
        console.log(`${item} é um ${typeof item}`);
        numeros.push(item);
    }
    else{
        console.log(`${item} é uma ${typeof item}`);
        frutas.push(item);
    }
}

console.log(numeros);
console.log(frutas);