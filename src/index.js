"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Estudante_1 = require("./Estudante");
const Professor_1 = require("./Professor");
const kauhe = new Estudante_1.Estudante("Kauhe", 29, "Typescript");
const jeff = new Professor_1.Professor("Jefferson", 29, "Typescript");
kauhe.apresentar();
jeff.apresentar();
console.log(kauhe.editarCurso());
console.log(jeff.editarCurso());
