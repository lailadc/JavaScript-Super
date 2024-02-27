/*
Crie uma função anônima que simule uma calculadora básica. Ela deve
aceitar dois números e uma operação (adição, subtração, multiplicação,
divisão) como parâmetros e retornar o resultado.
*/

console.log("ATIVIDADE 05");
alert("Atividade 05  -  Calculadora");

const calculadora5 = function(n1, operador, n2) {
    switch(operador) {
        case '+':
            return `${n1} + ${n2}  =  ${n1+n2}`;
        case '-':
            return `${n1} - ${n2}  =  ${n1-n2}`;
        case '*':
            return `${n1} x ${n2}  =  ${n1*n2}`;
        case '/':
            if (n2 === 0) {
                return `${n1} / ${n2}  =  ERROR!`;
            }
            return `${n1} / ${n2}  =  ${n1/n2}`;
        default:
            return 'Operação inválida!';
    }
}

const operadores5 = ['+', '-', '*', '/'];
const termoUm5 = Math.round(Math.random() * 10);
const termoDois5 = Math.round(Math.random() * 10);
let operacao5 = Math.round(Math.random() * 10);
let popup5;

if (operacao5 < 4) {
    operacao5 = operadores5[operacao5];
}

popup5 = calculadora5(termoUm5, operacao5, termoDois5)
console.log(popup5);
alert(popup5);