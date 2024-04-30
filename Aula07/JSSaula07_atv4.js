/*
Implemente uma função (callback) que receba um número como
parâmetro e informe o cubo desse número.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  -  Cubo");

const cubo4 = (numero, callback) => `${numero}^3 = ${callback(numero)}`;
const calculo4 = (numero) => numero**3;

let mensagem4, resultado4;
let numero4 = prompt("Informe um número:");

while (isNaN(parseInt(numero4)) || numero4 == '') {
    mensagem4 = "Informe um ";
    if (numero4 == '') {
        mensagem4 += "NÚMERO:";
    } else {
        mensagem4 += "número VÁLIDO:";
    }
    numero4 = prompt(mensagem4);
}

numero4 = parseInt(numero4);

resultado4 = cubo4(numero4, calculo4);

console.log(resultado4);
alert(resultado4);