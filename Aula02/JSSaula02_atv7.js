/*
Escreva um programa que solicite um número e determine se ele é
um número primo.
*/



console.log("ATIVIDADE 07");
alert("Atividade 07  -  Número primo");

const NUMERO = parseInt(prompt("Informe um número qualquer:"));
let divisores = 0;
let atv7 = `${NUMERO} `;

for (let n = 1; n <= NUMERO; n++) {
    if (NUMERO % n == 0) {
        divisores++;
    }
}

switch (divisores) {
    default:
        atv7 += "não ";
    case 2:
        atv7 += "é um número primo.";
}

console.log(atv7);
alert(atv7);