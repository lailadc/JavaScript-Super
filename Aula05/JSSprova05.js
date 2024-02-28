/*
[JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para
ajudar a gerenciar as tarefas domésticas de uma família agitada.
O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita
que todos os membros da família adicionem, removam e atualizem suas tarefas
diárias, garantindo que tudo seja feito de forma organizada.
*/

const OPCOES = "1  -  Adicionar tarefa\n" +
    "2  -  Remover tarefa\n3  -  Atualizar tarefa\n0  -  Encerrar programa\n";
let opcao, membro, mensagem, atividade, visualizar, espacos, i, j, k;
let sair = false
let membros = ["PAI", "MÃE", "IRMÃ"];
let tarefas = [
    ["trabalhar"],
    ["treinar", "trabalhar"],
    ["treinar", "trabalhar", "estudar"]
];

do {
    visualizar = "---------   M  E  M  B  R  O  S   ---------\n";
    for (pessoa of membros) {
        espacos = '';
        for (i = 0; i < (15 - pessoa.length)/2; i++) {
            espacos += ' ';
        }
        visualizar += `${espacos}${pessoa}${espacos}`;
    }
    j = 0;
    for (letra of "TAREFAS") {
        visualizar += `\n${letra}`;
        for (i = 0; i < membros.length; i++) {
            espacos = '';
            if (j < tarefas[i].length) {
                for (k = 0; k < (15 - tarefas[i][j].length)/2; k++) {
                    espacos += ' ';
                }
                visualizar += `${espacos}${tarefas[i][j]}${espacos}`;
            } else {
                for (k = 0; k < 15; k++) {
                    espacos += ' ';
                }
                visualizar += espacos;
            }
        }
        visualizar += '\n';
        j++;
    }
    console.log(visualizar);
    alert(visualizar);

    opcao = prompt(OPCOES + "Informe o número correspondente à opção desejada:");
    switch (opcao) {
        case '1':  // ADICIONAR TAREFA
            atividade = prompt("Informe a atividade a ser adicionada:").toUpperCase();

            // ESCOLHENDO MEMBRO DA FAMÍLIA
            mensagem = "Informe o familiar desempenhará a atividade de" + 
                ` ${atividade.toUpperCase()}:\n`;
            for (i = 0; i < membros.length; i++) {
                mensagem += `${i+1} - ${membros[i]}\n`
            }
            mensagem += `${i+1} - ADICIONAR MEMBRO`;
            membro = prompt(mensagem);
            while (isNaN(membro) || membro < 1 || membro > membros.length + 1) {
                membro = prompt(`Opção inválida!\n${mensagem}`);
            }
            membro--;

            // INCLUINDO MEMBRO NOVO SE NECESSÁRIO
            if (membro === membros.length) {
                membros[membro] = prompt(
                    `Informe o famiiar que executará a tarefa de ${atividade}:`
                ).toLowerCase();
                tarefas[membro] = [];
            }

            // ATRIBUINDO ATIVIDADE A MEMBRO ESCOLHIDO
            tarefas[membro].push(atividade.toUpperCase());
        
        
        case '2':  // REMOVER TAREFA
        case '3':  // ATUALIZAR TAREFA
        case '0':
            sair = true
            alert("Encerrando programa...");
        default:
            alert("Opção inválida!");
    }
} while (!sair);