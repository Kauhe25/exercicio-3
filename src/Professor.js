"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    apresentar() {
        let mensagem;
        mensagem = `Nome: ${this.nome}, Idade: ${this.idade}, Matéria: ${this.materia}`;
        console.log(mensagem);
    }
    editarCurso() {
        return true;
    }
}
exports.Professor = Professor;
