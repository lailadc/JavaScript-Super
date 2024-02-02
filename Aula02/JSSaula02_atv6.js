/*
Crie um programa que solicite um número de 1 a 7, representando
o dia da semana. Use uma estrutura switch (ou equivalente) para
imprimir o nome do dia correspondente.
*/


console.log("ATIVIDADE 06");
alert("Atividade 06  -  Dia da semana");

let dia_da_semana = parseInt(prompt("Informe o número equivalente ao dia da semana:"));
let atv6;

switch (dia_da_semana) {
    case 1:
        atv6 = "Domingo";
        break;
    case 2:
        atv6 = "Segunda-feira";
        break;
    case 3:
        atv6 = "Terça-feira";
        break;
    case 4:
        atv6 = "Quarta-feira";
        break;
    case 5:
        atv6 = "Quinta-feira";
        break;
    case 6:
        atv6 = "Sexta-feira";
        break;
    case 7:
        atv6 = "Sábado";
        break;
    default:
        atv6 = "Número inválido!";
}

console.log(atv6);
alert(atv6);