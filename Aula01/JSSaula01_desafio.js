/* 
Faça um Programa que pergunte quanto você
ganha por hora e o número de horas trabalhadas
no mês. Calcule e mostre o total do seu salário no
referido mês, sabendo-se que são descontados 11%
para o Imposto de Renda, 8% para o INSS e 5% para
o sindicato, faça um programa que nos dê:

1.salário bruto.

2.quanto pagou ao INSS.

3.quanto pagou ao sindicato.

4. salário liquido

5. calcule os descontos e o salário liquido
*/

console.log("DESAFIO");
alert("Desafio  —  Salário: bruto vs. líquido");

let resposta;
const P_HORA = parseFloat(prompt("Informe o VALOR da sua hora trabalhada:"));
const HORAS_TRAB = parseInt(prompt("Informe a QUANTIDADE DE HORAS trabalhadas esse mês:"));

const BRUTO = P_HORA * HORAS_TRAB;
resposta = `Salário bruto:     R$${BRUTO.toFixed(2)}\n`;

const INSS = BRUTO * 0.08;
resposta += `INSS:              R$${INSS.toFixed(2)}\n`;

const SINDICATO = BRUTO * 0.05;
resposta += `Sindicato:         R$${SINDICATO.toFixed(2)}\n`;

const IR = BRUTO * 0.11;
resposta += `Imposto de Renda:  R$${IR.toFixed(2)}\n`;

const LIQUIDO = BRUTO - INSS - SINDICATO - IR;
resposta += "-------------------------------\n";
resposta += `Salário líquido:   R$${LIQUIDO.toFixed(2)}`;

console.log(resposta);
alert(resposta);