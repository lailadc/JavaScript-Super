/* 
Crie um programa que solicite ao usuário seu peso (em kg) e altura
(em metros) e calcule o IMC. Em seguida, informe a categoria de
acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
normal, sobrepeso, etc.).
*/

console.log("ATIVIDADE 02")
alert("Atividade 02  —  Cálculo do IMC")

const PESO = parseFloat(prompt("Informe seu peso em kg:"));
const ALTURA = parseFloat(prompt("Informe sua altura em metros:"));

const IMC = PESO / ALTURA**2;
let atv2 = `IMC: ${IMC.toFixed(1)}\n`;

if (IMC < 18.5){
    atv2 += "Você está abaixo do peso.";
} else if (IMC < 25){
    atv2 += "Você está no peso ideal.";
} else if (IMC < 30){
    atv2 += "Você está levemente acima do peso.";
} else if (IMC < 35){
    atv2 += "Você está com obesidade grau I.";
} else if (IMC < 40){
    atv2 += "Você está com obesidade severa, obesidade grau II.";
} else {
    atv2 += "Você está com obesidade mórbida, obesidade grau III.";
}

console.log(atv2);
alert(atv2);