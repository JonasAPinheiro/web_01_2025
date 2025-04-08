type Funcionario = {
    nome : string ;
    cargo : string ;
};
    
const funcionarios : Array<Funcionario> = [
    { nome : "Marcos", cargo : "Desenvolvedor" } ,
    { nome : "Fernanda", cargo : "Gerente" } ,
    { nome : "Carlos", cargo : "Desenvolvedor" } ,
    { nome : "Joana", cargo : "Analista" }
];

const cargoDesejado : string = "Analista";

const pessoasDesejadas = funcionarios.filter(funcionario => funcionario.cargo == cargoDesejado);

console.log(pessoasDesejadas);
