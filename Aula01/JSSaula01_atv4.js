/*
Crie um programa que solicite ao usuário que insira o raio de um círculo
usando o prompt e, em seguida, calcule e exiba a área do círculo usando o
console.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  —  Área do círculo");

let mensagem;

const RAIO = parseFloat(prompt("Informe o raio de uma circunferência:"));
const AREA = Math.PI * (RAIO**2);

mensagem = `A área do círculo de raio ${RAIO}u.c. `;
mensagem += `é de aproximadamente ${AREA.toFixed(2)}(u.c.)^2.\n`;

console.log(mensagem);
alert(mensagem);