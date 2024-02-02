/*
Você foi desafiado a criar um simulador de caixa eletrônico
em JavaScript. O programa deve permitir que o usuário
interaja com sua conta bancária simulada, realizando
operações como verificar o saldo, fazer saques, fazer
depósitos e sair do programa.

Aqui estão os requisitos do programa:
-   O programa deve começar com um saldo inicial de $1000.
-   Utilize um loop while para manter o programa em execução
    até que o usuário escolha sair.
-   A cada iteração do loop, o programa deve
    exibir um menu com as seguintes opções:
    1. Ver Saldo
    2. Fazer Saque
    3. Fazer Depósito
    4. Sair
-   Se o usuário escolher "Ver Saldo", o programa
    deve exibir o saldo atual.
    -   Se o usuário escolher "Fazer Saque", o
        programa deve solicitar o valor do saque.
    -   Certifique-se de validar se o valor é numérico,
        maior que zero e não excede o saldo
        disponível. Se a validação for bem-sucedida,
        atualize o saldo e exiba uma mensagem
        indicando o sucesso da transação.
-   Se o usuário escolher "Fazer Depósito", o
    programa deve solicitar o valor do depósito.
    -   Certifique-se de validar se o valor é numérico e
        maior que zero. 
    -   Se a validação for bem sucedida,
        atualize o saldo e exiba uma mensagem
        indicando o sucesso da transação.
-   Se o usuário escolher "Sair", encerre o programa
    exibindo uma mensagem de despedida.
-   Se o usuário escolher uma opção inválida, exiba
    uma mensagem indicando isso e permita que o
    usuário faça uma nova escolha.
*/



let saldo = 1000;
let sair = false;
let opcao, desafio, valor;

do {
    opcao = prompt("---------------  MENU DE OPÇÕES  ---------------\n\
    1. Ver Saldo\n\
    2. Fazer Saque\n\
    3. Fazer Depósito\n\
    4. Sair\n\
Digite o número equivalente à opção desejada:")
    switch (opcao) {
        case '1':
            desafio = `Saldo atual:  R$ ${saldo.toFixed(2)}`;
            break;
        case '2':
            valor = parseFloat(prompt("Informe o valor a ser sacado: R$"));
            while (isNaN(valor) || valor < 0) {
                valor = parseFloat(prompt("Valor inválido!\nInforme o valor a ser SACADO: R$"));
            }
            if (valor > saldo){
                desafio = "Saldo insuficiente!";
            } else {
                saldo -= valor;
                desafio = `R$ ${valor.toFixed(2)}  retirados com sucesso!`
            }
            break;
        case '3':
            valor = parseFloat(prompt("Informe o valor a ser depositado: R$"));
            while (isNaN(valor) || valor < 0) {
                valor = parseFloat(prompt("Valor inválido!\nInforme o valor a ser DEPOSITADO: R$"));
            }
            saldo += valor;
            desafio = `R$ ${valor.toFixed(2)}  depositados com sucesso!`
            break;
        case '4':
            sair = true;
            desafio = "Encerrando transações..."
            break;
        default:
            desafio = "Opção inválida!";
    }
    console.log(desafio);
    alert(desafio);

} while(!sair);

console.log("Programa encerrado.");
