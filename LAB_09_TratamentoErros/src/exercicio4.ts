class Pessoa {
 constructor (
    public nome : string ,
    public email : string ,
    public dataNascimento : string
 ) {}

    validarNome () : void {
        try{
            if(this.nome.startsWith(" ") == false && this.nome.endsWith(" ") == false && this.nome == this.nome.toUpperCase()){
                console.log("Nome válido");
            }else{
                throw new Error("Nome inválido");
            }
            
        } catch(erro){
            console.error(erro);
        }
    }
    
    validarEmail () : void {
        try{
            if(this.email.includes("@") == true && this.email.includes(".com") == true){
                console.log("Email está correto");
            }else{
                throw new Error("Email inválido");
            }
            
        } catch(erro){
            console.error(erro);
        }
    }
    
    validarDataNascimento () : void {
        const data = new Date(this.dataNascimento);
        try{
            if(this.dataNascimento == data.toLocaleDateString("pt-br") && data.getDate() < 1925){
                console.log("Data Correta");
            }else{
                throw new Error("Data inválida");
            }
            
        } catch(erro){
            console.error(erro);
        }
    }
}
         
const pessoa = new Pessoa("JONAS", 'jonas.pinherio@gmail.com', "15-12-2005");

pessoa.validarNome();
pessoa.validarEmail();
pessoa.validarDataNascimento();