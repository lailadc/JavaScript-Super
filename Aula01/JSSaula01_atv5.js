/*
Crie um programa que solicite ao usuário que insira um valor em dólares
usando o prompt. Em seguida, converta esse valor para euros (1 dólar =
0,85 euros) e exiba o resultado no console.
*/

console.log("ATIVIDADE 05");
alert("Atividade 05  —  Dólar -> Euro");

const DOLAR = parseFloat(prompt("Informe o valor em USD:"));
const EURO = DOLAR * 0.85;

console.log(`$${DOLAR.toFixed(2)}  ->  €${EURO.toFixed(2)}\n`);
alert(`$${DOLAR.toFixed(2)}  ->  €${EURO.toFixed(2)}\n`);