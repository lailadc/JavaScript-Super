/*
Crie uma arrow function chamada multiplicar que recebe dois
números como argumentos e retorna o resultado da multiplicação
desses números.
*/

console.log("ATIVIDADE 01");
alert("Atividade 01  –  Multiplicação");

const multiplicar1 = (n1, n2) => `${n1} x ${n2}  =  ${n1 * n2}`;

let a1 = parseInt(prompt("Informe o 1º termo:"));
while (isNaN(a1) || a1 == '') {
    alert("Número inválido!");
    a1 = parseInt(prompt("Informe novamente o 1º termo:"));
}

let b1 = parseInt(prompt("Informe o 2º termo:"));
while (isNaN(b1) || b1 == '') {
    alert("Número inválido!");
    b1 = parseInt(prompt("Informe novamente o 2º termo:"));
}

console.log(multiplicar1(a1, b1));
alert(multiplicar1(a1, b1));