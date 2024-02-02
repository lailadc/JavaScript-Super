/*
Escreva um programa que solicite um número inteiro e imprima a
tabuada desse número de 1 a 10.
*/

console.log("ATIVIDADE 02");
alert("Atividade 02  –  Tabuada");

let numero2 = parseInt(prompt("Informe um número:"));
while (isNaN(numero2)) {
    numero2 = parseInt(prompt("Informe um NÚMERO:"));
}
let popup2 = `A tabuada do ${numero2} é:\n\n`;
let i2;

for (i2 = 1; i2 < 10; i2++) {
    popup2 += ` ${i2} x ${numero2}  =  ${numero2*i2}\n`;
}

popup2 += `${i2} x ${numero2}  =  ${numero2*i2}`;

console.log(popup2);
alert(popup2);