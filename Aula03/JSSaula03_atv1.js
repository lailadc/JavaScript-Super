/*
Crie um programa que solicita ao usuário um número e, em seguida,
conta regressivamente até zero, imprimindo cada número no console.
O programa deve terminar quando atingir zero.
*/

console.log("ATIVIDADE 01");
alert("Atividade 01  —  Contagem regressiva");

let numero1 = parseInt(prompt("Informe um número:"));
let atv1 = '';

while (numero1 < 0) {
    numero1 = parseInt(prompt("O número precisa ser positivo.\nInforme outro número:"));
}

while (numero1 > 0) {
    console.log(numero1);
    atv1 += `${numero1}  `;
    numero1--;
}

alert(atv1);