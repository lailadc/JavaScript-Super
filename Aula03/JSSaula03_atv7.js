/*
Escreva um programa que solicite um número e determine se ele é
um número primo.
*/

console.log("ATIVIDADE 07");
alert("Atividade 07  –  Número primo");

let numero7 = parseInt(prompt("Informe um número:"));
let divisores7 = 0, cont7 = 1;
let atv7;

while (isNaN(numero7) || numero7 < 0) {
    if (isNaN) {
        atv7 = "Informe um número válido:";
    } else {
        atv7 = "Informe um número inteiro e positivo:";
    }
    numero7 = parseInt(prompt(atv7));
}

while (cont7 <= numero7) {
    if (numero7 % cont7 === 0) {
        divisores7 += 1;
    }
    cont7++;
}

atv7 = numero7;

switch (divisores7){
    default:
        atv7 += " não";
    case 2:
        atv7 += " é um número primo.";
}

console.log(atv7);
alert(atv7);