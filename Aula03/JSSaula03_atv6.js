/*
Calcule a soma dos números de 1 a 50
*/

console.log("ATIVIDADE 06");
alert("Atividade 06  -  Somatório");

let numero6 = 1, soma6 = 0;
let atv6 = '';

while (numero6 <= 50) {
    atv6 += numero6;
    soma6 += numero6;

    if (numero6 === 50) {
        atv6 += `  =  ${soma6}`;
    } else {
        atv6 += " + ";
    }

    numero6++;
}

console.log(atv6);
alert(atv6);
