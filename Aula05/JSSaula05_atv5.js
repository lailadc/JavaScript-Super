/*
Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
*/

console.log("ATIVIDADE 05");
alert("Atividade 05  -  Média");

let nota5;
let notas5 = [];
let media5 = 0;

for (let i5 = 0; i5 < 4; i5++) {
    nota5 = Math.random() * 10;
    nota5 = parseFloat(nota5.toFixed(2));
    notas5[i5] = nota5;
    media5 += nota5;
}

media5 /= 4;

console.log("Notas:");
console.log(notas5);
console.log("Média:");
console.log(media5);
alert(
    `Notas: ${notas5}\n` +
    `Média: ${media5.toFixed(2)}`
);