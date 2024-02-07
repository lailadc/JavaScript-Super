/*
Faça um Programa que leia um vetor de 5 números inteiros e
mostre-os.
*/

console.log("ATIVIDADE 02");
alert("Atividade 02  -  Vetor");

let popup2 = "Elementos do vetor: ";
let numeros2 = [1999, 2015, 2017, 2021, 2024];

console.log(popup2);
for (let i2 = 0; i2 < 5; i2++) {
    console.log(numeros2[i2]);
    popup2 += `  ${numeros2[i2]}`;
}

alert(popup2);