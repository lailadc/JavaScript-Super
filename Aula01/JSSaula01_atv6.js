/*
Peça ao usuário que insira um preço de um produto usando o prompt. Em
seguida, aplique um desconto de 10% a esse preço e exiba o preço com
desconto no console.
*/

console.log("ATIVIDADE 06");
alert("Atividade 06  —  Desconto");

const PRECO = parseFloat(prompt("Informe o preço da compra:"));
const PAGAR = PRECO * 0.9;

console.log(`Você precisa pagar apenas:  R$ ${PAGAR.toFixed(2)}\n`);
alert(`Você precisa pagar apenas:  R$ ${PAGAR.toFixed(2)}\n`);