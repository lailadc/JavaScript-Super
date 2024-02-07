/*
Uma empresa de pesquisas precisa tabular os
resultados da seguinte enquete feita a um grande
quantidade de organizações:

    "Qual o melhor Sistema Operacional para uso em
    servidores?" 

As possíveis respostas são:
    1- Windows Server
    2- Unix
    3- Linux
    4- Netware
    5- Mac OS
    6- Outro

Você foi contratado para desenvolver um
programa que leia o resultado da enquete e
informe ao final o resultado da mesma. O
programa deverá ler os valores até ser informado
o valor 0, que encerra a entrada dos dados. Não
deverão ser aceitos valores além dos válidos para
o programa (0 a 6). Os valores referentes a cada
uma das opções devem ser armazenados num
vetor. Após os dados terem sido completamente
informados, o programa deverá calcular a
percentual de cada um dos concorrentes e
informar o vencedor da enquete. O formato da
saída foi dado pela empresa, e é o seguinte:

    Sistema Operacional Votos %
    ---------------------------
    Windows Server 1500 17%
    Unix 3500 40%
    Linux 3000 34%
    Netware 500 5%
    Mac OS 150 2%
    Outro 150 2%
    ------------------------ Total : 8800

    O Sistema Operacional
    mais votado foi o Unix,
    com 3500 votos,
    correspondendo a 40% dos
    votos.
*/

console.log("DESAFIO");
alert("Desafio  -  Pesquisa");

// INICIALIZAÇÃO  &  DECLARAÇÃO   DAS VARIÁVEIS NECESSÁRIAS
let loops = 0;     // <- comentar|descomentar
let escolha, resultado, porcentagem, vencedor, maior, organizadorSO, organizadorVotos, extra, digitoPar;
let votacao = [0, 0, 0, 0, 0, 0];
let total = 0;
let pergunta = "Qual o melhor Sistema Operacional para uso em servidores?\n";
let opcoes = ["Windows Server", "Unix", "Linux", "Netware", "MacOS", "Outro"];

for (let i = 0; i < 6; i++){
    pergunta += `   ${i+1}. ${opcoes[i]}\n`;
}

pergunta += "   0. Sair";

// REALIZAÇÃO DA PESQUISA
do {
    // INSERÇÃO DOS VOTOS INDIVIDUALMENTE
    //escolha = parseInt(prompt(pergunta));     // <- comentar|descomentar


    // INSERÇÃO AUTOMÁTICA DE 500 VOTOS
    /**/{   // INÍCIO  <-  comentar|descomentar várias linhas
        escolha = Math.round(Math.random() * 5) + 1;
        if (loops === 500) {
            escolha = 0;
        }
        loops++;
    }/**/   // FIM  <-  comentar|descomentar várias linhas

    switch (escolha) {
        default:
            alert("Opção inválida!\nInforme o número correspondente à opção desejada ao digitar.");
        case 0:
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            votacao[escolha - 1]++;
    }
} while (escolha !== 0);

// APURAÇÃO DO TOTAL DE VOTOS
for (let os of votacao) {
    total += os;
}

// APURAÇÃO DE CADA OPÇÃO  &  FORMATAÇÃO DO RESULTADO
// FORMATAÇÃO
resultado = "Sistema Operacional  |  Votos  |  %\n";
resultado += "----------------------------------------\n"

// APURAÇÃO
for (i = 0; i < 6; i++){
    porcentagem = votacao[i] * 100 / total;

    {  // FORMATAÇÃO  
        {   // desnecessária  
            organizadorSO = '';
            for (let j = 0; j < 21 - opcoes[i].length; j++) {
                organizadorSO += ' ';
            }

            organizadorVotos = '';
            digitoPar = `${votacao[i]}`.length % 2 === 0;
            extra = '';
            for (j = 0; j < (9 - `${votacao[i]}`.length)/2; j++) {
                if (digitoPar && j === 0) {
                    continue;
                }
                organizadorVotos += ' ';
            }
            if (digitoPar) {
                extra = ' ';
            }
        }

        // IMPORTANTE
        resultado += `${opcoes[i]}${organizadorSO}|` + 
            `${organizadorVotos}${votacao[i]}${organizadorVotos}${extra}|  ` +
            `${porcentagem.toFixed(0)}%\n`;
    }

    // APURAÇÃO DO MAIS VOTADO
    if (i === 0) {
        maior = votacao[i];
    } else {
        if (votacao[i] > maior) {
            maior = votacao[i];
        }
    }
}

resultado += `----------------------------------------  Total: ${total}\n\n`

vencedor = votacao.indexOf(maior);
resultado += `O Sistema Operacional
mais votado foi o ${opcoes[vencedor]},
com ${maior} votos,
correspondendo a ${(maior / total * 100).toFixed(0)}% dos
votos.`;

console.log(votacao);
console.log(resultado);
alert(resultado);