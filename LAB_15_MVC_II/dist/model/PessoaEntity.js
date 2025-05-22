"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaEntity = void 0;
class PessoaEntity {
    id;
    nome;
    idade;
    email;
    constructor(id, nome, idade, email) {
        this.id = id ?? 1;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}
exports.PessoaEntity = PessoaEntity;
