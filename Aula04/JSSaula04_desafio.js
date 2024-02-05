/*
Neste desafio, você criará um jogo simples de par
ou ímpar usando loops (while), condicionais (if, else),
e operadores lógicos (||).

Regras:
-   O jogo continuará até que o jogador decida parar.
-   Em cada rodada, um dado será lançado.
-   O jogador escolherá se quer apostar em "par"
    ou "ímpar".
-   O resultado do dado será verificado e o vencedor
    será determinado com base na escolha do jogador.
*/

console.log("DESAFIO");
alert("Desafio  -  Ímpar ou par");

let continuar, escolha, dado, resultado, paridade, par;

do {
    dado = Math.round(Math.random() * 5) + 1;  // Números aleatórios de 1 a 6

    par = true;
    paridade = '';
    switch(dado % 2) {
        case 1:
            par = false;
            paridade += "ím";
        case 0:
            paridade += "par";
    }
    
    escolha = parseInt(prompt("Qual será sua aposta?\n\
    1. Ímpar\n\
    2. Par"));
        
    while (isNaN(escolha) || !(escolha === 1 || escolha === 2)) {
        escolha = parseInt(
            prompt(
                "Opção inválida!\n" +
                "Escolha o número correspondente à opção desejada:\n" +
                "   1. Ímpar\n" +
                "   2. Par"
            )
        );
    }

    if ((par && escolha === 2) || (!par && escolha === 1)) {
        resultado = `Parabéns! Você escolheu ${paridade} e `;
    } else {
        resultado = `Que pena... Você escolheu `;
        switch (escolha) {
            case 1:
                resultado += "ím";
            case 2:
                resultado += "par, mas ";
        }
    }

    resultado += `o resultado do dado foi ${dado}, um número ${paridade}.`;

    console.log(resultado);
    alert(resultado);

    continuar = confirm("Deseja continuar?\n\
        OK      ->  continuar\n\
    Cancelar    ->  sair");
} while (continuar);