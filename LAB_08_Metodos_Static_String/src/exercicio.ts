class Exercicio{
    static compararStrings(str1: string, str2: string): boolean{
        str1 = str1.toUpperCase();
        str1 = str1.trim();

        str2 = str2.toUpperCase();
        str2 = str2.trim();

        if(str1 == str2){
            return true;
        }else{
            return false;
        }
    }

    static formatar(valor: number): string;
    static formatar(valor: boolean): string;
    static formatar(valor: Date): string;

    static formatar(valor: any){
        if(typeof valor == 'number'){
            valor = valor.toFixed(2)
            return valor.toString();
        }
        else if(typeof valor == "boolean"){
            return valor ? "Sim" : "Não";
        }
        else{
            return typeof valor.toLocaleDateString("pt-br")
        }
    }

    static contarOcorrencias(str: string, ocorrencia:string): number{
        return str.indexOf(ocorrencia);
    }

    static primeirasLetras(str: string): string{
        str.trim();
        let palav: string = "";
        const palavras: string[] = str.split(" ");
        palavras.map((palavra) => {
            palav = palav + " " + palavra[0]
        })
        return palav.trim();
    }

    static removerVogais(){

    }
        
}


// console.log(Exercicio.compararStrings("Hello", "hello"));
// console.log(Exercicio.compararStrings(" camelcase ", "CAMELcase"));
// console.log(Exercicio.compararStrings(" Typescript", "typescript"));
// console.log(Exercicio.compararStrings(" Different ", "Strings"));

console.log(Exercicio.formatar(20.9000));
console.log(Exercicio.formatar(new Date(2023, 9, 5)));
console.log(Exercicio.formatar(true));
console.log(Exercicio.formatar(false));

console.log(Exercicio.contarOcorrencias("banana", "na"));
console.log(Exercicio.primeirasLetras("Javascript Typescript"));