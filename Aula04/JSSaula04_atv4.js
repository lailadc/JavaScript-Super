/*
Escreva um programa que solicite um número e verifique se ele é
um número primo.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  –  Número primo");

let popup4, pedido4;
let divisores4 = 1;
let primo4 = " apenas "
let numero4 = parseInt(prompt("Informe um número:"));

// Verificação de erro do usuário
while (isNaN(numero4) || numero4 <= 0) {
    pedido4 = "Número inválido!\n";
    pedido4 += isNaN(numero4) ? "Informe um NÚMERO:" : "Informe um número POSITIVO:";
    numero4 = parseInt(prompt(pedido4));
}

popup4 = numero4;
for (let i4 = 1; i4 < numero4; i4++) {
    if (numero4 % i4 == 0) {
        divisores4++;
    }
}

switch (divisores4) {
    default:
        popup4 += " NÃO";
        primo4 = ' ';
    case 2:
        popup4 += ` É um número primo, pois possui${primo4}${divisores4} divisores.`;
        break;
    case 1:
        popup4 = `${numero4} não é um número primo, porém é ESPECIAL.`;
}

console.log(popup4);
alert(popup4);