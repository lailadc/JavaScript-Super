/*
Faça um Programa que leia um vetor de 5 números inteiros e
mostre-os.
*/

console.log("ATIVIDADE 02");
alert("Atividade 02  -  Vetor");

let numero2;
let numeros2 = [];

for (let i2 = 0; i2 < 5; i2++) {
    numero2 = Math.round(Math.random() * 100);
    numeros2[i2] = numero2;
}

console.log("Vetor:");
console.log(numeros2);
alert(`Números: ${numeros2}`);