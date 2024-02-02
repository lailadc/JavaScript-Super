/*
Faça um programa que leia um nome de usuário e a sua senha e não
aceite a senha igual ao nome do usuário, mostrando uma mensagem de
erro e voltando a pedir as informações.
*/

console.log("ATIVIDADE 04");
alert("Atividade 04  -  Usuário e senha");

const USUARIO4 = prompt("Informe seu nome de usuário:");
let senha4 = prompt("Informe sua senha:");
let atv4 = "Cadastro realizado com sucesso!";

while (senha4 === USUARIO4) {
    senha4 = prompt("Sua senha não pode ser igual ao nome de usuário!\nInforme outra senha:");
}

console.log(atv4);
alert(atv4);
