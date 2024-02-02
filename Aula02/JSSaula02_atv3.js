/*
Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o
preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um
desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.
*/

console.log("ATIVIDADE 03");
alert("Atividade 03  —  Desconto por idade");

const PRECO = parseFloat(prompt("Informe o preço da compra:"));
const IDADE = parseInt(prompt("Informe sua idade:"));

const PAGAR = IDADE < 18 ? PRECO*0.9 : PRECO;

let atv3 = `Sua compra sairá por  R$ ${PAGAR.toFixed(2)}`;
console.log(atv3);
alert(atv3);