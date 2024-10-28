export class Estudante {
    nome: string;
    idade: number;
    curso: string;

    constructor(nome: string, idade: number, curso: string){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar(): void {
        let mensagem: string;
        mensagem = `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`;
        console.log(mensagem);
    }

    editarCurso(): boolean {
        return false;
    }

}