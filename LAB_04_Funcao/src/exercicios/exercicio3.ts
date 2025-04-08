const numeros: number[] = [10, 20, 30, 40, 50, 60];

function dobrarNumeros(numeros: number[]): number[]{
    let numerosDobrados: Array<number> = [];
    
    for(let i = 0; i < numeros.length; i++){
        numerosDobrados[i] = numeros[i] * 2;
    }

    return numerosDobrados;
}

console.log(dobrarNumeros(numeros));