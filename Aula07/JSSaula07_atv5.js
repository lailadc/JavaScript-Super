/*
Crie uma função que aceita um número e retorna uma função que, por sua
vez, aceita outro número e retorna a soma dos dois.
*/

function definirNumero5(numero1) {
    return (numero2) => numero1 + numero2;
}

console.log("ATIVIDADE 05");
alert("Atividade 05  -  Soma");

let termoUm5, termoDois5, mensagem5, resultado5;

termoUm5 = prompt("Informe o 1º número:");
while (isNaN(parseInt(termoUm5)) || termoUm5 == '') {
    mensagem5 = "Informe um ";
    if (termoUm5 == '') {
        mensagem5 += "NÚMERO:";
    } else {
        mensagem5 += "número VÁLIDO:";
    }
    termoUm5 = prompt(mensagem5);
}
termoUm5 = parseInt(termoUm5);

const somar5 = definirNumero5(termoUm5);

termoDois5 = prompt("Informe o 2º número:");
while (isNaN(parseInt(termoDois5)) || termoDois5 == '') {
    mensagem5 = "Informe um ";
    if (termoDois5 == '') {
        mensagem5 += "NÚMERO:";
    } else {
        mensagem5 += "número VÁLIDO:";
    }
    termoDois5 = prompt(mensagem5);
}
termoDois5 = parseInt(termoDois5);

resultado5 = somar5(termoDois5);
mensagem5 = `${termoUm5} + ${termoDois5}  =  ${resultado5}`;

console.log(mensagem5);
alert(mensagem5);