/*
Crie uma arrow function chamada contarVogais que recebe uma
string como argumento e retorna a quantidade de vogais na string.
*/

console.log("ATIVIDADE 02");
alert("Atividade 02  –  Vogais");

const VOGAIS2 = "AEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜ";

const contarVogais2 = (frase) => {
    let vogais = 0;
    let tipo = 'palavra';
    let flexao = 'vogais';
    for (letra of frase.toUpperCase()) {
        for (vogal of VOGAIS2){
            if (letra === vogal) {
                vogais++;
            }
        }
    }

    if (vogais < 2){
        flexao = 'vogal';
    }

    if (frase.includes(' ')){
        tipo = 'frase';
    }

    return `A ${tipo} ${frase.toUpperCase()} contém ${vogais} ${flexao}.`;
}

let frase2 = prompt("Escreva qualquer coisa:");
while (frase2 == '') {
    frase2 = prompt("Escreva ALGUMA coisa:");
}

console.log(contarVogais2(frase2));
alert(contarVogais2(frase2));
