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

alert("Fibonacci & Fatorial");

let numero = parseInt(prompt("Informe um número:"));
let fatorial = 1;
let an, a0 = 0, a1 = 1;
let mensagem, fibonacci, calculo;

while (isNaN(numero) || numero < 0) {
    mensagem = "Número inválido!\nInforme um ";
    if (isNaN(numero)) {
        mensagem += "NÚMERO:";
    } else {
        mensagem += "número POSITIVO:";
    }
    numero = parseInt(prompt(mensagem));
}

if (numero === 0) {
    mensagem = `${numero}!  =  ${fatorial}\n`;
    mensagem += `Termo zero da sequência de Fibonacci:  a0 = 0`;
} else {
    fibonacci = `Sequência de Fibonacci até o ${numero}º termo:\n`;
    fibonacci += `${a1}`;
    calculo = `${numero}!:  1`;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
        calculo += `x${i}`;

        an = a0 + a1;
        a0 = a1;
        a1 = an;
        fibonacci += `, ${an}`;
    }
    calculo += ` = ${fatorial}`;

    mensagem = calculo + '\n\n' + fibonacci;
}

console.log(mensagem);
alert(mensagem);