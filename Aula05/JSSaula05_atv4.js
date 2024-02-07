/*
Faça um Programa que leia um vetor de 10 números reais e mostre-os na
ordem inversa.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  -  Decrescente");

let numero4;
let numeros4 = [];

for (let i4 = 0; i4 < 10; i4++) {
    numero4 = Math.random() * 10;
    numeros4[i4] = parseFloat(numero4.toFixed(1));
}

numeros4.sort();
numeros4.reverse();

console.log("Vetor:");
console.log(numeros4);
alert(`Números: ${numeros4}`);