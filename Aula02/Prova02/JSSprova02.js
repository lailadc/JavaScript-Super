/*
[JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, 
altura em centímetros e peso de uma pessoa. 
O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, 
considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser 
convertida de centímetros para metros. 
Em seguida, o programa deve classificar o peso com base no IMC calculado, 
de acordo com a tabela a seguir:

Menor que 16: Baixo peso muito grave
De 16 a 16.99: Baixo peso grave
De 17 a 18.49: Baixo peso
De 18.50 a 24.99: Peso normal
De 25 a 29.99: Sobrepeso
De 30 a 34.99: Obesidade grau I
De 35 a 39.99: Obesidade grau II
Maior ou igual a 40: Obesidade grau III

O programa deve exibir o nome da pessoa, o índice de massa corporal calculado 
e a classificação correspondente.
*/


alert("Cálculo do IMC");

const NOME = prompt("Informe seu nome:");
const PESO = parseFloat(prompt("Informe seu peso em kg:"));
let altura = parseFloat(prompt("Informe sua altura em CENTÍMETROS:"));

altura /= 100;

const IMC = PESO / altura**2;
let prova = `${NOME.toUpperCase()},\n\n`;
prova += `IMC: ${IMC.toFixed(1)}\n`;
prova += "Você está com ";

if (IMC < 16){
    prova += "baixo peso muito grave.";
} else if (IMC < 17){
    prova += "baixo peso grave.";
} else if (IMC < 18.5){
    prova += "baixo peso.";
} else if (IMC < 25){
    prova += "o peso normal.";
} else if (IMC < 30){
    prova += "sobrepeso.";
} else if (IMC < 35){
    prova += "obesidade grau I.";
} else if (IMC < 40){
    prova += "obesidade grau II.";
} else {
    prova += "obesidade grau III.";
}

alert(prova);