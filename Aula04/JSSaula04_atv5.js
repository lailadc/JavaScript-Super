/*
Escreva um programa que irá solicitar ao usuário uma palavra e que
imprimirá no console a palavra sem vogais.
*/

console.log("ATIVIDADE 05");
alert("Atividade 05  -  Sem vogais");

const PALAVRA5 = prompt("Digite uma palavra de sua preferência:").toUpperCase();
let palavra5 = '';
let cont5, popup5;

for (let letra5 of PALAVRA5) {
    cont5 = 0;
    for (let vogal5 of "AEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜ") {
        if (letra5 === vogal5) {
            break;
        }
        cont5++;
    }

    if (cont5 === 27){
        palavra5 += letra5;
    }
}

popup5 = `Sem vogais:  ${palavra5}`;

console.log(popup5);
alert(popup5);