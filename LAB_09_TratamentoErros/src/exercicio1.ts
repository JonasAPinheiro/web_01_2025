//Corrigido

function calcularMedia ( notas : number []) : number{
    let soma = 0;
    for ( let i = 0; i < notas.length ; i ++) {
        soma += notas [i];
    }
    return soma / notas.length;
}