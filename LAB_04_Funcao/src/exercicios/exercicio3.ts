const numeros: number[] = [10, 20, 30, 40, 50];

function dobrarNumeros(numeros: number[]): number[]{
    const numerosDobrados: number[] = numeros.map(numero => numero * 2);
    return numerosDobrados;
}

console.log(dobrarNumeros(numeros));