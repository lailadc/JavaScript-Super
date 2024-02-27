/*
Escreva uma função que encontre a área e o perímetro de um círculo, de
acordo com o raio fornecido
*/

function infoMatematicas(raio) {
  const PERIMETRO = 2 * Math.PI * raio;
  const AREA = PERIMETRO / 2 * raio;
  let retorno = "INFORMAÇÕES DA CIRCUNFERÊNCIA:\n";
  retorno += `Raio:       ${raio} u.c.\n`;
  retorno += `Área:       ${AREA.toFixed(0)} (u.c.)^2\n`;
  retorno += `Perímetro:  ${PERIMETRO.toFixed(0)} u.c.`;

  return retorno;
}

console.log("ATIVIDADE 03");
alert("Atividade 03  -  Círculo");

const NUMERO3 = Math.round(Math.random() * 10);

console.log(infoMatematicas(NUMERO3));
alert(infoMatematicas(NUMERO3));