/*
Escreva um programa que imprima os múltiplos de 3 de 1 a 30.
*/

console.log("ATIVIDADE 08");
alert("Atividade 08  -  Múltiplos de 3");

let popup8 = '';

for (let i8 = 1; i8 <= 30; i8++) {
    if (i8 % 3 == 0) {
        console.log(i8);
        popup8 += `${i8}  `;
    }
}

alert(popup8);