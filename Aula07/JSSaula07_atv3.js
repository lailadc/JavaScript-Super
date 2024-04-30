/*
Crie uma função chamada converterTemperatura que recebe uma
temperatura em graus Celsius e uma função de callback para conversão
como argumentos. A função deve aplicar a função de callback à
temperatura e retornar o resultado.
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  -  Celcius -> Fahrenheit");

const converterTemperatura3 = (temperatura, callback) => `${temperatura}ºC = ${callback(temperatura)}ºF`;
const celciusParaFarenheit3 = (celcius) => 9 * celcius / 5 + 32;

let resultado3;
let temperatura3 = prompt("Informe a temperatura em ºC:");

while (isNaN(temperatura3) || temperatura3 == '') {
    temperatura3 = prompt("Informe uma temperatura válida em ºC:");
}

temperatura3 = parseFloat(temperatura3);

resultado3 = converterTemperatura3(temperatura3, celciusParaFarenheit3);

console.log(resultado3);
alert(resultado3);