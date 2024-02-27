/*
Escreva uma função que permita contar o número de vogais contidas
em uma string fornecida pelo usuário. Por exemplo, o usuário informa
a string “Beterraba”, e a função retorna o número 4 (há 4 vogais
nessa palavra).
*/

function qtddVogais(palavra) {
    palavra = palavra.toUpperCase();
    let vogais = 0;
    let retorno = `${palavra} `;
    for (caractere of palavra) {
        for (letra of "AEIOUÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜ") {
            if (caractere === letra) {
                vogais++;
                break;
            }
        }
    }

    if (vogais === 0){
        retorno += "não possui vogais.";
    } else {
        retorno += `possui ${vogais} `;
        if (vogais > 1) {
            retorno += "vogais.";
        } else {
            retorno += "vogal.";
        }
    }
    return retorno;
}

console.log("ATIVIDADE 01");
alert("Atividade 01  -  Vogais");

let palavra1 = prompt("Escreva uma palavra/frase:");

console.log(qtddVogais(palavra1));
alert(qtddVogais(palavra1));