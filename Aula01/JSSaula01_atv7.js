/*
Solicite ao usuário que insira um valor em metros usando o prompt e, em
seguida, converta esse valor para centímetros (1 metro = 100 centímetros) e
exiba o resultado no console.
*/

console.log("ATIVIDADE 07");
alert("Atividade 07  —  Metro -> centímetro");

const METRO = parseFloat(prompt("Informe o valor em metros:"));
const CM = METRO * 100;

console.log(`${METRO}m  ->  ${CM}cm\n`);
alert(`${METRO}m  ->  ${CM}cm\n`);