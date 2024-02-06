/*
Faça um programa que leia 20 números inteiros e armazene-os em
um vetor. Armazene os números pares no vetor 'PAR' e os números
ímpares no vetor 'ímpar'. Imprima os três vetores.
*/

console.log("ATIVIDADE 01");
alert("Arividade 01  -  Paridade");

let popup1, numero1;
let numeros1 = [], pares1 = [], impares1 = [];

for (let i1 = 0; i1 < 20; i1++) {
    numero1 = Math.round(Math.random() * 100);
    numeros1[i1] = numero1;

    if (numero1 % 2 === 0) {
        pares1.push(numero1);
    } else {
        impares1.push(numero1);
    }
}

popup1  = `Números: ${numeros1}\n`;
popup1 += `Pares:   ${pares1}\n`;
popup1 += `Ímpares: ${impares1}`;

console.log("Números informados:")
console.log(numeros1);
console.log("Números pares:")
console.log(pares1);
console.log("Números ímpares:")
console.log(impares1);
alert(popup1);
