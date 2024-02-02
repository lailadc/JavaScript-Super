/*
Escreva um programa que irá solicitar ao usuário uma palavra e conte o
número de vogais presentes.
*/

console.log("ATIVIDADE 07");
alert("Atividade 07  -  Vogais");

let frase7 = prompt("Digite uma palavra/frase qualquer:").toUpperCase();
let vogais7 = 0;
let tipo7 = "palavra"
let popup7, flexao7;

for (let letra7 of frase7) {
    for (let vogal7 of "AEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜ") {
        if (letra7 === vogal7) {
            vogais7++;
        }
    }

    if (letra7 === " "){
        tipo7 = "frase";
    }
}

if (vogais7 > 1) {
    flexao7 = "is";
} else {
    flexao7 = 'l';
}

popup7 = `A ${tipo7} ${frase7} possui ${vogais7} voga${flexao7}.`;

console.log(popup7);
alert(popup7);