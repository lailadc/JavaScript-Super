/*
[JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para
ajudar a gerenciar as tarefas domésticas de uma família agitada.
O objetivo é criar um "Gerenciador de Tarefas Domésticas" que permita
que todos os membros da família adicionem, removam e atualizem suas tarefas
diárias, garantindo que tudo seja feito de forma organizada.
*/

const OPCOES =
  "1  -  Adicionar tarefa\n" +
  "2  -  Remover tarefa\n3  -  Atualizar tarefa\n0  -  Encerrar programa\n";
let opcao, membro, mensagem, atividade, visualizar, espacos, i, j, k;
let sair = false;
let membros = ["PAI", "MÃE", "IRMÃ"];
let tarefas = [
  ["trabalhar"],
  ["treinar", "trabalhar"],
  ["treinar", "trabalhar", "estudar"],
];

do {
  // FORMATAÇÃO DA TABELA NO CONSOLE
  visualizar = "";
  espacos = "-----";
  if (membros.length < 4) {
    visualizar += `${espacos}----   M  E  M  B  R  O  S   ----${espacos}\n`;
  } else {
    for (pessoa of membros) {
      visualizar += espacos;
    }
    visualizar += "   M  E  M  B  R  O  S   ";
    for (pessoa of membros) {
      visualizar += espacos;
    }
    visualizar += "\n";
  }
  for (pessoa of membros) {
    espacos = "";
    for (i = 0; i < (15 - pessoa.length) / 2; i++) {
      espacos += " ";
    }
    visualizar += `${espacos}${pessoa}${espacos}`;
  }
  j = 0;
  visualizar += "\n\n";
  for (letra of "TAREFAS") {
    visualizar += `${letra}`;
    for (i = 0; i < membros.length; i++) {
      espacos = "";
      if (j < tarefas[i].length) {
        for (k = 0; k < (15 - tarefas[i][j].length) / 2; k++) {
          espacos += " ";
        }
        visualizar += `${espacos}${tarefas[i][j]}${espacos}`;
      } else {
        for (k = 0; k < 15; k++) {
          espacos += " ";
        }
        visualizar += espacos;
      }
    }
    visualizar += "\n";
    j++;
  }
  console.log(visualizar);
  alert("TABELA NO CONSOLE");

  // INÍCIO DO PROCESSAMENTO
  opcao = prompt(OPCOES + "Informe o número correspondente à opção desejada:");
  switch (opcao) {
    case "1": // ADICIONAR TAREFA
      atividade = prompt("Informe a atividade a ser ADICIONADA:").toUpperCase();

      // ESCOLHENDO MEMBRO DA FAMÍLIA
      mensagem =
        "Informe o familiar desempenhará a atividade de" +
        ` ${atividade.toUpperCase()}:\n`;
      for (i = 0; i < membros.length; i++) {
        mensagem += `   ${i + 1} - ${membros[i]}\n`;
      }
      mensagem += `   ${i + 1} - Adicionar membro`;
      membro = parseInt(prompt(mensagem));
      while (isNaN(membro) || membro < 1 || membro > membros.length + 1) {
        membro = parseInt(prompt(`Opção inválida!\n${mensagem}`));
      }
      membro--;

      // INCLUINDO MEMBRO NOVO SE NECESSÁRIO
      if (membro === membros.length) {
        membros[membro] = prompt(
          `Informe o familiar que executará a tarefa de ${atividade}:`
        ).toUpperCase();
        tarefas[membro] = [];
      }

      // ATRIBUINDO ATIVIDADE A MEMBRO ESCOLHIDO
      tarefas[membro].push(atividade.toLowerCase());

      break;
    case "2": // REMOVER TAREFA
      // ESCOLHENDO MEMBRO DA FAMÍLIA
      mensagem = "Informe o familiar que terá uma tarefa REMOVIDA:\n";
      for (i = 0; i < membros.length; i++) {
        mensagem += `   ${i + 1} - ${membros[i]}\n`;
      }
      mensagem += "   0 - Voltar";
      membro = parseInt(prompt(mensagem));
      while (isNaN(membro) || membro < 0 || membro > membros.length + 1) {
        membro = parseInt(prompt(`Opção inválida!\n${mensagem}`));
      }
      membro--;
      if (membro === -1) {
        continue;
      }

      // ESCOLHENDO ATIVIDADE
      mensagem = `Informe a tarefa de ${membros[membro]} que será removida:\n`;
      for (i = 0; i < tarefas[membro].length; i++) {
        mensagem += `   ${i + 1} - ${tarefas[membro][i].toUpperCase()}\n`;
      }
      mensagem += `   0 - Cancelar ação`;
      atividade = parseInt(prompt(mensagem));
      while (
        isNaN(atividade) ||
        atividade < 0 ||
        atividade > tarefas[membro].length + 1
      ) {
        atividade = parseInt(prompt(`Opção inválida!\n${mensagem}`));
      }
      atividade--;

      // REMOVENDO ATIVIDADE
      if (atividade !== -1) {
        tarefas[membro].pop(atividade);
      }

      break;
    case "3": // ATUALIZAR TAREFA
      // ESCOLHENDO MEMBRO DA FAMÍLIA
      mensagem = "Informe o familiar que terá uma tarefa ATUALIZADA:\n";
      for (i = 0; i < membros.length; i++) {
        mensagem += `   ${i + 1} - ${membros[i]}\n`;
      }
      mensagem += "   0 - Voltar";
      membro = parseInt(prompt(mensagem));
      while (isNaN(membro) || membro < 0 || membro > membros.length + 1) {
        membro = parseInt(prompt(`Opção inválida!\n${mensagem}`));
      }
      membro--;
      if (membro === -1) {
        continue;
      }

      // ESCOLHENDO ATIVIDADE
      mensagem = `Informe a tarefa de ${membros[membro]} que será atualizada:\n`;
      for (i = 0; i < tarefas[membro].length; i++) {
        mensagem += `   ${i + 1} - ${tarefas[membro][i].toUpperCase()}\n`;
      }
      mensagem += `   0 - Cancelar ação`;
      atividade = parseInt(prompt(mensagem));
      while (isNaN(atividade) || atividade < 0 || atividade > tarefas[membro].length + 1) {
        atividade = parseInt(prompt(`Opção inválida!\n${mensagem}`));
      }
      atividade--;

      // ATUALIZANDO ATIVIDADE
      if (atividade !== -1) {
        mensagem = prompt(`Informe a nova atividade de ${membros[membro]} para substituir ${tarefas[membro][atividade].toUpperCase()}:`).toLowerCase();
        tarefas[membro][atividade] = mensagem;
      }
      
      break;
    case "0":
      sair = true;
      alert("Encerrando programa...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (!sair);

console.log("Programa encerrado!");
