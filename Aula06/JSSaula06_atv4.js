/*
Escreva uma função que verifica se um número fornecido pelo usuário em
um prompt é primo ou não.
*/

function numeroPrimo(numero){
  let divisores = 1;
  let retorno = `${numero}`;
  let formatar = "apenas "
  for (let i = numero; i > 1; i--){
      if (numero % i == 0) {
          divisores++;
      }
  }

  switch (divisores){
      default:
          formatar = "";
          retorno += " NÃO";
      case 2:
          retorno += ` é um número primo, pois possui ${formatar}${divisores} divisores.`;
          break;
      case 1:
          retorno += " é um número especial."
  }

  return retorno;
}

console.log("ATIVIDADE 04");
alert("Atividade 04  -  Número primo");

let mensagem4;
let numero4 = prompt("Informe um número:");

while (isNaN(numero4) || numero4 < 0){
  mensagem4 = "Informe um ";
  if (numero4 < 0){
      mensagem4 += "número POSITIVO:";
  } else {
      mensagem4 += "NÚMERO:";
  }
  numero4 = prompt(mensagem4);
}

console.log(numeroPrimo(numero4));
alert(numeroPrimo(numero4));