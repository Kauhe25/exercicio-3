import { Estudante } from './Estudante'
import { Professor } from './Professor'

const kauhe = new Estudante("Kauhe", 29, "Typescript");
const jeff = new Professor("Jefferson", 29, "Typescript");

kauhe.apresentar();
jeff.apresentar();

console.log(kauhe.editarCurso());
console.log(jeff.editarCurso());