/*
Crie uma função anônima que aceite dois números como parâmetros e
retorne a soma deles.
*/

console.log("ATIVIDADE 06");
alert("Atividade 06  -  Soma");

let popup6;
const soma6 = function(a, b) {
    return `${a} + ${b}  =  ${a+b}`;
}

const termoUm6 = Math.round(Math.random() * 10);
const termoDois6 = Math.round(Math.random() * 10);

popup6 = soma6(termoUm6, termoDois6);
console.log(popup6);
alert(popup6);