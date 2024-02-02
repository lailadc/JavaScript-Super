/*
Peça ao usuário para inserir números continuamente e imprima o
somatório dos números inseridos. O programa deve continuar executando
até que o usuário insira zero.
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  -  Somatório");

let numero3;
let soma3 = 0, termo3 = 1;
let atv3 = '';

do {
    numero3 = parseInt(prompt(`Informe o ${termo3}º número ou 0 para sair:`));
    while (isNaN(numero3)) {
        numero3 = parseInt(
            prompt(`Número inválido!\nInforme novamente o ${termo3}º número ou 0 para sair:`)
        );
    }
    soma3 += numero3;
    atv3 += numero3;
    if (numero3 === 0) {
        atv3 += `  =  ${soma3}`;
    } else {
        atv3 += " + ";
    }
    termo3++;
} while (numero3 !== 0);

console.log(atv3);
alert(atv3);