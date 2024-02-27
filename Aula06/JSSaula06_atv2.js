/*
Implemente uma função que receba um número como parâmetro e
informe o quadrado desse número.
*/

function quadrado(numero){
  return `${numero}^2 = ${numero*numero}`;
}

console.log("ATIVIDADE 02");
alert("Atividade 02  -  Quadrado numérico");

const NUMERO2 = Math.round(Math.random() * 10);

console.log(quadrado(NUMERO2));
alert(quadrado(NUMERO2));