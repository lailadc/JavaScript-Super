/*
Escreva uma programa que irá receber um texto e mostrará no
console se esse texto é um palíndromo ou não. (palíndromos são
palavras que são lidas da mesma forma de trás pra frente) Ex:
arara
*/

console.log("ATIVIDADE 06");
alert("Atvidade 06  -  Palíndromos");

let avesso6 = '', normal6 = '';
let frase6 = prompt("Digite uma palavra/frase:").toUpperCase();
let primeira6, ultima6, popup6;
let palindromo6 = true;
let tipo6 = "a palavra";
let flexao6 = 'a';

for (let letra6 of frase6) {
    switch (letra6) {  // limpando a frase e formatando feedback
        case ' ':
        case ',':
            tipo6 = "a frase";
        case '.':
        case '!':
        case '?':
            normal6 += '';
            break;
        case 'Á':
        case 'À':
        case 'Ã':
        case 'Â':
        case 'Ä':
            normal6 += 'A';
            break;
        case 'É':
        case 'È':
        case 'Ê':
        case 'Ë':
            normal6 += 'E';
            break;
        case 'Í':
        case 'Ì':
        case 'Î':
        case 'Ï':
            normal6 += 'I';
            break;
        case 'Ó':
        case 'Ò':
        case 'Õ':
        case 'Ô':
        case 'Ö':
            normal6 += 'O'
            break;
        case 'Ú':
        case 'Ù':
        case 'Û':
        case 'Ü':
            normal6 += 'U';
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            tipo6 = " número";
            flexao6 = 'o';
        default:
            normal6 += letra6;
    }
}

ultima6 = normal6.length - 1;
for (primeira6 = 0; primeira6 < normal6.length; primeira6++) {
    if (normal6[primeira6] !== normal6[ultima6]) {
        palindromo6 = false;
        break;
    }
    ultima6--;
}

popup6 = `"${frase6}"`;

switch (palindromo6) {
    case false:
        popup6 += " NÃO";
    case true:
        popup6 += ` É um${tipo6} palíndrom${flexao6}.`
}

console.log(popup6);
alert(popup6);