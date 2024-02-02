/*
Crie um programa que solicite ao usuário uma senha. Valide a senha de
acordo com as seguintes regras:

Pelo menos 8 caracteres de comprimento.
Deve conter pelo menos uma letra maiúscula e uma letra minúscula.
Deve incluir pelo menos um número.
Pode conter caracteres especiais, como @, #, $, etc.
*/



console.log("ATIVIDADE 05");
alert("Atividade 5  -  Verificação de senha");

const SENHA = prompt("Informe sua senha:");

let tamanho, maiuscula, minuscula, numero, verificado, relatorio, atv5;
tamanho = maiuscula = minuscula = numero = 0;

console.log(SENHA);
for (const caracter of SENHA) {
    tamanho++;
    for (const letra of "abcdefghijklmnopqrstuvwxyz") {
        if (caracter === letra) {
            minuscula++;
            break;
        }
    }

    for (const letra of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        if (caracter === letra) {
            maiuscula++;
            break; 
        }
    }

    for (const numeral of "0123456789") {
        if (caracter == numeral) {
            numero++;
            break; 
        }
    }

    if (maiuscula > 0 && minuscula > 0 && numero > 0) {
        verificado = true;
    } else {
        verificado = false;
    }
}

relatorio = `${tamanho} caracteres: ${maiuscula} maiúscula(s), ${minuscula} minúscula(s) e ${numero} número(s).`;

if (verificado && tamanho >= 8) {
    atv5 = "Sua senha está forte.";
} else {
    atv5 = "Sua senha não cumpre os requisitos de segurança.";
}

console.log(relatorio);
alert(relatorio);
console.log(atv5);
alert(atv5);