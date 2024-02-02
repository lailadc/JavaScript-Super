/*
Peça ao usuário para inserir os comprimentos dos lados de um
triângulo e escreva um programa que determine se o triângulo é
equilátero, isósceles ou escaleno.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  —  Classificando triângulos");

let lados = [];
let classificacao = 'O triângulo é ';

for (let x = 1; x <= 3; x++){
    let lado = parseInt(prompt(`Informe o ${x}º comprimento para o lado de um triângulo:`));
    while (lado <= 0){
        alert(`${lado} não é um comprimento válido.`);
        lado = parseInt(prompt("Informe um valor positivo:"));
    }
    lados.push(lado);
}

lados.sort();

const DESIGUALDADE = lados[0] + lados[1] > lados[2];

if (DESIGUALDADE){
    if(lados[0] == lados[1] && lados[1] == lados[2]){
        classificacao += 'equilátero, pois todos os lados são iguais.';
    } else if (lados[0] == lados[1] || lados[1] == lados[2]){
        classificacao += 'isóceles, pois possui dois lados iguais.';
    } else {
        classificacao += 'escaleno, pois todos os lados são diferentes.';
    }
} else {
    classificacao = `Não é possível existir triângulo de lados ${lados[0]}, ${lados[1]} e ${lados[2]}.`;
}

console.log(classificacao);
alert(classificacao);