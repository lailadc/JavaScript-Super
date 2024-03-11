/*
[JS-A06] Crie no seu HTML dois inputs do tipo "number" e um botão. Quando clicado, o botão irá chamar uma função que calcula o IMC (Índice de Massa Corporal) e exibe o resultado na tela. Defina uma função que recebe os valores dos inputs (peso e altura), calcula o IMC e exibe o resultado na tela.


A fórmula do IMC é:

IMC = peso / (altura * altura)
*/

let peso, altura, imc;

const botao = document.querySelector("button")
const inputPeso = document.getElementById("peso")
const inputAltura = document.getElementById("altura")

const resultado = document.getElementById("resultado")
botao.onclick = () => {
    peso = parseFloat(inputPeso.value)
    altura = parseFloat(inputAltura.value.replace(',', '.'))
    imc = peso / (altura * altura)
    resultado.innerText = `IMC: ${imc.toFixed(2)}`
}