/*
Faça um programa que use a função valorPagamento para determinar o
valor a ser pago por uma prestação de uma conta. O programa deverá
solicitar ao usuário o valor da prestação e o número de dias em atraso e
passar estes valores para a função valorPagamento, que calculará o valor
a ser pago e devolverá este valor ao programa que a chamou. O programa
deverá então exibir o valor a ser pago na tela.
Após a execução o programa deverá voltar a pedir outro valor de
prestação e assim continuar até que seja informado um valor igual a zero
para a prestação. Neste momento o programa deverá ser encerrado,
exibindo o relatório do dia, que conterá a quantidade e o valor total de
prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte
forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando
houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
*/

console.log("ATIVIDADE 07");
alert("Atividade 07  -  Boletos");

const relatorio7 = []; 
let prestacao7, atraso7, dias7, total7, instrucao7, popup7;

const valorPagamento7 = function(prestacao, atraso = 0) {
    let pagar = prestacao;

    if (atraso > 0) {
        pagar *= 103 / 100;
        for (i = 0; i < atraso; i++) {
            pagar *= 100.1 / 100;
        }
    }

    return pagar;
}

while (true) {
    prestacao7 = parseFloat(prompt("Informe o valor da prestação (R$):"));
    while (prestacao7 < 0 || isNaN(prestacao7)) {
        instrucao7 = "Valor inválido!\n";
        if(isNaN(prestacao7)) {
            instrucao7 += "Informe um VALOR para a prestação (R$):";
        } else {
            instrucao7 += "Informe um valor POSITIVO para a prestação (R$):";
        }
        prestacao7 = parseFloat(prompt(instrucao7));
    }

    if (prestacao7 === 0) {
        break;
    }

    instrucao7 = "A prestação já passou da data de vencimento?\n";
    instrucao7 += "   OK    ->  Sim, está atrasada.\n";
    instrucao7 += "Cancelar ->  Não, ainda não venceu."
    atraso7 = confirm(instrucao7);

    if(atraso7) {
        dias7 = parseInt(prompt("Informe há quantos dias a prestação venceu:"));
        while (dias7 <= 0 || isNaN(dias7)) {
            instrucao7 = "Valor inválido!\n";
            if(isNaN(dias7)) {
                instrucao7 += "Informe o NÚMERO DE DIAS que a prestação está atrasada:";
            } else {
                instrucao7 += "Informe a quantidade de dias de ATRASO:";
            }
            dias7 = parseInt(prompt(instrucao7));
        }

        popup7 = valorPagamento7(prestacao7, dias7);
    } else {
        popup7 = valorPagamento7(prestacao7);
    }

    relatorio7.push(popup7);
    alert(`Valor a pagar:  R$ ${popup7.toFixed(2)}`);
}

popup7 = "-------  RELATÓRIO DO DIA  -------\n";
total7 = relatorio7.reduce((a, b) => a + b);

for (i = 0; i < relatorio7.length; i++) {
    popup7 += `    ${i+1}. ---------------  R$ ${relatorio7[i].toFixed(2)}\n`;
}
popup7 += "___________________________________\n";
popup7 += `TOTAL  ---------------  R$ ${total7.toFixed(2)}`;

console.log(popup7);
alert(popup7);