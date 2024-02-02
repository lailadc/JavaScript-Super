/*
[JS-A01] Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3).
Calcule a média ponderada das notas e atribua o resultado à variável "media".
Após o cálculo, exiba a média ponderada no console.

OBS:    Para calcular a média ponderada multiplica os valores das notas
        pelos valores dos pesos, e divide pelas somas de todos os pesos. 
        Lembre-se de declarar valores para os pesos e para as notas.
*/

const p1 = parseInt(prompt('Informe o PESO da 1ª nota na média:'));
const p2 = parseInt(prompt('Informe o PESO da 2ª nota na média:'));
const p3 = parseInt(prompt('Informe o PESO da 3ª nota na média:'));

const n1 = parseFloat(prompt('Informe a 1ª nota:'));
const n2 = parseFloat(prompt('Informe a 2ª nota:'));
const n3 = parseFloat(prompt('Informe a 3ª nota:'));

const media = (n1*p1 + n2*p2 + n3*p3) / (p1 + p2 + p3);
console.log(`(${n1}x${p1} + ${n2}x${p2} + ${n3}x${p3}) / (${p1} + ${p2} + ${p3})  =  ${media.toFixed(2)}`);