/*
Peça ao usuário para digitar sua idade usando o prompt e, em seguida,
calcule e exiba o ano de nascimento usando o console.
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  —  Ano de nascimento");

const HOJE = new Date();
const ANO = HOJE.getFullYear();

let idade = parseInt(prompt("Informe sua idade:"));
let aniversario = confirm(`Você já fez aniversário em ${ANO}?`);
let nascimento;

if (aniversario) {
    nascimento = ANO - idade;
} else {
    nascimento = ANO - idade - 1;
}

console.log(`Você nasceu em ${nascimento}.\n`);
alert(`Você nasceu em ${nascimento}.\n`);