/*
Crie um programa que apresente um menu com várias
opções de cálculos geométricos. O usuário deve ser
capaz de escolher uma opção e inserir os valores
necessários para realizar o cálculo correspondente.
Utilize condicionais para direcionar o programa com
base na escolha do usuário.

Opções do Menu:
1. Calcular Área do Triângulo
2. Calcular Área do Retângulo
3. Calcular Volume do Cubo
4. Calcular Área do Círculo
5. Sair
*/



const MENU = "1.  Área do triângulo\n\
2.  Área do Retângulo\n3.  Volume do cubo\n\
4.  Área do círculo\n5.  Sair\n";
let opcao, base, altura, lado, raio, resultado, desafio;
let sair = false;

while (true) {
    opcao = prompt(MENU + "\nInforme a opção desejada:");

    switch (opcao) {
        case '1':
            base = parseInt(prompt("Informe o comprimento da base do triângulo:"));
            altura = parseInt(prompt("Informe o comprimento da altura do triângulo:"));
            resultado = (base * altura) / 2;
            desafio = `Área do triângulo:  ${resultado} (u.m.)^2`;
            break;
        case '2':
            base = parseInt(prompt("Informe o comprimento da base do retângulo:"));
            altura = parseInt(prompt("Informe o comprimento da altura do retângulo:"));
            resultado = base * altura;
            desafio = `Área do retângulo:  ${resultado} (u.m.)^2`;
            break;
        case '3':
            lado = parseInt(prompt("Informe o comprimento do lado do cubo:"));
            resultado = lado**3;
            desafio = `Volume do cubo:  ${resultado} (u.m.)^3`;
            break;
        case '4':
            raio = parseInt(prompt("Informe o comprimento do raio da circunferência:"));
            resultado = 2 * Math.PI * raio;
            desafio = `Área do círculo:  ${resultado.toFixed(2)} (u.m.)^2`;
            break;
        case '5':
            sair = true;
            desafio = "Encerrando programa..."
            break;
        default:
            desafio = "Opção inválida!";
    }

    console.log(desafio);
    alert(desafio);

    if (sair) {
        break;
    }
}

console.log("Programa encerrado.")