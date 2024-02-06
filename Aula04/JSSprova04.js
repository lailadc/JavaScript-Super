/*
[JS-A04] Você é um desenvolvedor de software que trabalha em uma equipe especializada 
em criar ferramentas matemáticas para uma empresa do mercado financeiro.
A empresa precisa de uma nova funcionalidade para sua plataforma online,
permitindo que os usuários obtenham informações sobre cálculos matemáticos
importantes relacionados aos investimentos.

Sua tarefa é criar um módulo JavaScript que ofereça aos usuários a possibilidade de
inserir um número inteiro positivo e, em resposta, calcular o fatorial desse número e
também a sequência de Fibonacci até aquele número. Isso ajudará os investidores a realizar
análises mais detalhadas sobre suas decisões financeiras.
*/

alert("Fibonaci & Fatorial");

let numero = parseInt(prompt("Informe um número:"));
let fatorial = 1;
let a0 = 0, a1 = 1;

let mensagem = "Número inválido!\nInforme um ";
while (isNaN(numero) || numero < 0) {
    if (isNaN(numero)) {
        mensagem += "NÚMERO:"
    } else {
        mensagem += "número POSITIVO:"
    }

    numero = parseInt(prompt(mensagem));
    

}