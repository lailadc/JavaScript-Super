/*
Peça ao usuário para inserir um número e escreva um programa que
determine se o número é positivo e par.
*/

console.log("ATIVIDADE 01");
alert("Atividade 01  —  Classificando números");

const NUM = parseInt(prompt("Digite um número:"));
const PARIDADE = NUM % 2 == 0 ? `${NUM} é par ` : `${NUM} é ímpar `;
const POLARIDADE = NUM > 0 ? "e positivo." : (NUM < 0 ? "e negativo." : "neutro.");

let atv1 = PARIDADE + POLARIDADE;

console.log(atv1);
alert(atv1);