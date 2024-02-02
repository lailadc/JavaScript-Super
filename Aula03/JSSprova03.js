/*
[JS-A03] Você foi contratado(a) para desenvolver um programa que 
irá auxiliar um professor a calcular algumas estatísticas das notas de seus alunos. 
O programa deve solicitar ao professor o número total de estudantes na turma e, 
em seguida, pedir que ele insira as notas de cada aluno individualmente. 
Após receber todas as notas, o programa deverá calcular a média da turma e 
identificar a maior e a menor nota obtida.

Instruções:
Solicite ao professor que digite o número total de estudantes na turma.
Em seguida, peça que o professor insira a nota de cada aluno individualmente, uma por vez.
Calcule a média da turma somando todas as notas e dividindo pelo número total de estudantes.
Identifique e registre a maior nota obtida na turma.
Ao final, exiba a média da turma e a maior e a menor nota encontrada.

Dicas:
Utilize um loop while para coletar as notas de todos os alunos.
Armazene as notas em uma variável e vá atualizando o valor da soma a cada nova nota inserida.
Compare cada nota com a maior nota atualmente registrada para encontrar a maior nota.
Para calcular a média, divida a soma das notas pelo número total de estudantes.
Exiba os resultados de forma clara e organizada.

Lembre-se de testar o programa com diferentes valores de notas e número de estudantes 
para garantir que ele funcione corretamente em diversas situações. Boa programação!
*/

alert("Estatísticas de turma.");

let nota, maior, menor, resultado;
let media = 0, estudantes = 0;
let qtdd_alunes = parseInt(prompt("Informe a quantidade de estudantes na turma:"));

while (isNaN(qtdd_alunes) || qtdd_alunes <= 0) {
    qtdd_alunes = parseInt(prompt("Número inválido!\nInforme a QUANTIDADE de estudantes na turma:"));
}

while (estudantes < qtdd_alunes) {
    estudantes++;
    nota = parseFloat(prompt(`Informe a ${estudantes}ª nota de ${qtdd_alunes}:`));
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt(`Nota inválida!\nInforme novamente a ${estudantes}ª nota:`));
    }

    media += nota;

    if (estudantes === 1) {
        menor = nota;
        maior = nota;
    } else {
        if (menor > nota) {
            menor = nota;
        }
        if (maior < nota) {
            maior = nota;
        }
    }
}

media /= estudantes;

mensagem  = `Quantidade de estudantes:  ${qtdd_alunes}\n`;
mensagem += `Maior nota da turma:       ${maior.toFixed(1)}\n`;
mensagem += `Menor nota da turma:       ${menor.toFixed(1)}\n`;
mensagem += `Média de notas da turma:   ${media.toFixed(1)}`;

console.log(mensagem);
alert(mensagem);