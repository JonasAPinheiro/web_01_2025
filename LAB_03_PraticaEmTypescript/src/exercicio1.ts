//Exercício 1: Contagem de Números Pares e Ímpares

const numeros: Array<number> = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];

const par: Array<number> = [];
const impar: Array<number> = [];
let somaPar: number = 0;
let numeroPar: number = 0;
let comparador: number = 0;
let somaImpar: number = 0;
let maiorPar: number = 0;
let menorPar: number = 100;
let maiorImpar: number = 0;
let menorImpar: number = 100;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        somaPar += numeros[i];
        par.push(numeros[i]);

        if(maiorPar < numeros[i]){
            maiorPar = numeros[i];
        }

        if(menorPar > numeros[i]){
            menorPar = numeros[i];
        }
    }
    else{
        somaImpar += numeros[i];
        impar.push(numeros[i]);

        if(maiorImpar < numeros[i]){
            maiorImpar = numeros[i];
        }

        if(menorImpar > numeros[i]){
            menorImpar = numeros[i];
        }
    }
}

console.log(par.sort());
console.log(impar.sort());
console.log(`A soma dos pares é ${somaPar}`);
console.log(`A soma dos ímpares é ${somaImpar}`)
console.log(`A média dos numéros pares é ${somaPar / par.length}`);
console.log(`A média dos numéros impares é ${somaImpar / impar.length}`);
console.log(`O maior Par é ${maiorPar}`);
console.log(`O menor Par é ${menorPar}`);
console.log(`O maior Impar é ${maiorImpar}`);
console.log(`O menor Impar é ${menorImpar}`);

