/*
Faça um programa que peça para 5 pessoas a sua idade, ao final o
programa devera verificar se a média de idade da turma varia entre 0 e 25,
26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa,
conforme a média calculada.
*/

console.log("ATIVIDADE 05");
alert("Atividade 05  -  Classificação de grupo");

let pessoas5 = 0, media5 = 0;
let idade5, atv5;

while (pessoas5 < 5) {
    idade5 = parseInt(prompt(`Informe a idade da ${pessoas5+1}ª pessoa:`));

    while (idade5 < 0 || idade5 > 150) {
        idade5 = parseInt(prompt(`Informe uma idade válida para a ${pessoas5+1}ª pessoa:`));
    }

    media5 += idade5;
    pessoas5++;
}

console.log("Nº de pessoas: " + pessoas5);
console.log("Soma idades: " + media5);
media5 /= pessoas5;

atv5 = `Média de idades: ${media5.toFixed(1)}\n`;

if (media5 > 60) {
    atv5 += "A turma é idosa.";
} else if (media5 > 25) {
    atv5 += "A turma é adulta.";
} else {
    atv5 += "A turma é jovem.";
}

console.log(atv5);
alert(atv5);
