"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
    apresentar() {
        let mensagem;
        mensagem = `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`;
        console.log(mensagem);
    }
    editarCurso() {
        return false;
    }
}
exports.Estudante = Estudante;
