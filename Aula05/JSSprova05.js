/*
[JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para
ajudar a gerenciar as tarefas domésticas de uma família agitada.
O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita
que todos os membros da família adicionem, removam e atualizem suas tarefas
diárias, garantindo que tudo seja feito de forma organizada.
*/

const OPCOES = "1  -  Adicionar tarefa\n" +
    "2  -  Remover tarefa\n3  -  Atualizar tarefa\n0  -  Encerrar programa\n";
let opcao, membro, mensagem, atividade, i;
let sair = false
let membros = ["pai", "mãe", "irmã"];
let tarefas = [
    ["trabalhar"],
    ["treinar", "trabalhar"],
    ["treinar", "trabalhar", "estudar"]
];

do {
    opcao = prompt(OPCOES + "Informe o número correspondente à opção desejada:");
    switch (opcao) {
        case '1':
            atividade = prompt("Informe a atividade a ser adicionada:").toUpperCase();

            // ESCOLHENDO MEMBRO DA FAMÍLIA
            mensagem = "Informe o familiar desempenhará a atividade de" + 
                ` ${atividade.toUpperCase()}:`;
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
            tarefas[membro].push(atividade.toLowerCase());
        
        
        case '2':
        case '3':
        case '0':
            sair = true
            alert("Encerrando programa...");
        default:
            alert("Opção inválida!");
    }
} while (!sair);