const numerosEx4: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];
const multiploDe3: number[] = [];
const multiploDe5: number[] = [];
const outros: number[] = [];
let maiorOutros: number = 0, menorOutros: number = 200;
let maiorMultiplo3: number = 0, menorMultiplo3: number = 200;
let maiorMultiplo5: number = 0, menorMultiplo5: number = 200;
let somaOutros: number = 0, somaMultiplo3: number = 0, somaMultiplo5: number = 0;
let medianaOutros: number = 0, medianaMultiplo3: number = 0, medianaMultiplo5 = 0


for(let item of numerosEx4){
    if((item % 3 != 0) && (item % 5 !=0)){
        outros.push(item);
        somaOutros += item;

        if(maiorOutros < item){
            maiorOutros = item;
        }

        if(menorOutros > item){
            menorOutros = item;
        }
    }
    else{
        if(item % 3 == 0){
            multiploDe3.push(item);
            somaMultiplo3 += item;

            if(maiorMultiplo3 < item){
                maiorMultiplo3 = item;
            }
    
            if(menorMultiplo3 > item){
                menorMultiplo3 = item;
            }
        }
        
        if(item % 5 == 0){
            multiploDe5.push(item);
            somaMultiplo5 += item;

            if(maiorMultiplo5 < item){
                maiorMultiplo5 = item;
            }
    
            if(menorMultiplo5 > item){
                menorMultiplo5 = item;
            }
        }
    }
}

outros.sort((b, a) => a - b)
multiploDe3.sort((b, a) => a - b);
multiploDe5.sort((b, a) => a - b);

if(outros.length % 2 == 1){
    medianaOutros = outros[Math.floor(outros.length / 2)];
}
else{
    medianaOutros = (outros[outros.length / 2] + (outros[(outros.length / 2) - 1])) / 2;
}

if(multiploDe3.length % 2 == 1){
    medianaMultiplo3 = multiploDe3[Math.floor(multiploDe3.length / 2)];
}
else{
    medianaMultiplo3 = (multiploDe3[multiploDe3.length / 2] + (multiploDe3[(multiploDe3.length / 2) - 1])) / 2;
}

if(multiploDe5.length % 2 == 1){
    medianaMultiplo5 = multiploDe5[Math.floor(multiploDe5.length / 2)];
}
else{
    medianaMultiplo5 = (multiploDe5[multiploDe5.length / 2] + multiploDe5[(multiploDe5.length / 2) - 1]) / 2;
}

console.log(outros);
console.log(multiploDe3);
console.log(multiploDe5);
console.log(menorOutros, maiorOutros);
console.log(menorMultiplo3, maiorMultiplo3);
console.log(menorMultiplo5, maiorMultiplo5);
console.log(`Soma dos outros: ${somaOutros}, soma dos multiplos de 3: ${somaMultiplo3} e soma dos multiplos de 5: ${somaMultiplo5}`);
console.log(`Média dos outros: ${somaOutros / outros.length}, média dos multiplos de 3: ${somaMultiplo3 / multiploDe3.length} e média dos multiplos de 5: ${somaMultiplo5 / multiploDe5.length}`);
console.log(`Mediana dos outros: ${medianaOutros}, mediana dos multiplos de 3: ${medianaMultiplo3} e mediana dos multiplos de 5: ${medianaMultiplo5}`);

