export class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    apresentar(): void {
        let mensagem: string;
        mensagem = `Nome: ${this.nome}, Idade: ${this.idade}, Matéria: ${this.materia}`;
        console.log(mensagem);
    }

    editarCurso(): boolean {
        return true;
    }

}