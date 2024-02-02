/*
Escreva um programa que solicite um número inteiro positivo e
faça uma contagem regressiva a partir desse número até 0.
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  –  Contagem regressiva");

let popup3 = '', pedido3 = '';
let numero3 = parseInt(prompt("Informe um número:"));
while (isNaN(numero3) || numero3 <= 0) {
    pedido3 = "Número inválido!\n";
    if (isNaN(numero3)) {
        pedido3 += "Informe um NÚMERO:";
    } else {
        pedido3 += "Informe um número POSITIVO:";
    }
    numero3 = parseInt(prompt(pedido3));
}

for (let i3 = numero3; i3 >= 0; i3--) {
    console.log(i3);
    popup3 += `${i3}  `;
}

alert(popup3);