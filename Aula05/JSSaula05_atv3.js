/*
Utilizando listas, faça um programa que realize 5 perguntas para uma
pessoa sobre um crime. 

As perguntas são:
    1 - "Telefonou para a vítima?"
    2 - "Esteve no local do crime?"
    3 - "Mora perto da vítima?"
    4 - "Devia para a vítima?"
    5 - "Já trabalhou com a vítima?"

Ao final, o programa deve emitir uma classificação sobre a participação da
pessoa no crime. Se a pessoa responder positivamente a 2 questões, ela
deve ser classificada como "Suspeita"; entre 3 e 4 respostas positivas como
"Cúmplice"; e se responder positivamente a 5 questões, deve ser
classificada como "Assassino". Caso contrário, será classificada como
"Inocente".
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  -  Investigação");

const CLASSIFICACAO3 = ["INOCENTE", "SUSPEITO", "CÚMPLICE", "CÚMPLICE", "o ASSASSINO"];
let perguntas3 = [
    "Telefonou para a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia para a vítima?",
    "Já trabalhou com a vítima?"
];
let confirmacoes3 = -1;
let popup3;

for (let pergunta3 of perguntas3) {
    // INSERÇÃO MANUAL
    /*{    // INÍCIO  <-  comentar|descomentar várias linhas
        resposta3 = confirm(
            pergunta3 + 
            "\n\nAperte:\n" +
            "      OK       ->  Sim\n" +
            "   Cancelar    ->  Não"
        );
    }*/    // FIM  <-  comentar|descomentar várias linhas

    // INSERÇÃO AUTOMÁTICA
    resposta3 = Math.round(Math.random());     // <- comentar|descomentar

    if (resposta3) {
        confirmacoes3++;
    }
}

if (confirmacoes3 < 0) {
    confirmacoes3++;
}

popup3 = `Você é ${CLASSIFICACAO3[confirmacoes3]}.`;

console.log(popup3);
alert(popup3);