const dados: Array<number | string> = [10, "Azul", 25, "Vermelho", 30, "Verde"];
const valoresNumericos: Array <number> = [];
const valoresTextuais: Array<string> = [];

for(let item of dados){
    if(typeof item == "number"){
        valoresNumericos.push(item);
        console.log(`O ${item} é um ${typeof item}`);
    }
    else{
        valoresTextuais.push(item);
        console.log(`O ${item} é uma ${typeof item}`);
    }
}

console.log(valoresNumericos);
console.log(valoresTextuais);