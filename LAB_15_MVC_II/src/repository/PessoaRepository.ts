import { PessoaEntity } from "../model/PessoaEntity"

export class PessoaRepository{
    private static instance: PessoaRepository
    private pessoaList: PessoaEntity[] = []

    constructor(){}

    static getInstance(){
        if(!this.instance){
            this.instance = new PessoaRepository()
        }
        
        return this.instance
    }

    inserePessoa(pessoa: PessoaEntity): void{
        this.pessoaList.push(pessoa);
    }

    removePessoaPorId(id: number): void{
        const index = this.findIndex(id);
        if(index == -1){
            throw new Error("Id não foi encontrado!!!");
        }
        this.pessoaList.splice(index, 1)
    }

    findById(id: number): PessoaEntity{
        const index = this.findIndex(id)
        return this.pessoaList[index];
    }

    findAll(): PessoaEntity[]{
        return this.pessoaList
    }

    private findIndex(id: number): number{
        return this.pessoaList.findIndex(p => p.id == id);
    }
}