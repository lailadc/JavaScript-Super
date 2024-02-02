/*
Desenvolva um programa que solicita ao usuário que insira suas
notas de uma série de disciplinas. O programa deve calcular e
imprimir a média das notas, o usuário pode continuar adicionando
notas até decidir parar.
*/

console.log("ATIVIDADE 02");
alert('Atividade 02  –  Média de notas');

let nota2, adicionar2;
let contador2 = 0, media2 = 0;
let atv2 = '(';

do {
    nota2 = parseFloat(prompt(`Informe a ${contador2+1}ª nota:`));
    media2 += nota2;
    atv2 += nota2;
    contador2++;
    adicionar2 = confirm(`Deseja adicionar uma ${contador2+1}ª nota?`);
    if (adicionar2) {
        atv2 += " + ";
    } else {
        atv2 += `) / ${contador2}  =  `;
    }
} while (adicionar2);

media2 /= contador2;
atv2 += media2.toFixed(2);

console.log(atv2);
alert(atv2);
