/*
Faça um programa de implemente um jogo de Craps.
    1.  O jogador lança um par de dados, obtendo
        um valor entre 2 e 12. 
        -   Se, na primeira jogada, você
            tirar 7 ou 11, você um "natural" e ganhou. 
        -   Se você tirar 2, 3 ou 12 na primeira jogada,
            isto é chamado de "craps" e você perdeu.
        -   Se, na primeira jogada, você fez um 4, 5, 6,
            8, 9 ou 10, este é seu "Ponto".
    2.  Seu objetivo agora é continuar jogando os dados
        até tirar este número novamente.
        -   Você perde, no entanto, se tirar um 7 antes
            de tirar este Ponto novamente.
*/

console.log("DESAFIO");
alert("Desafio  -  Jogo Craps");

const dados = () => Math.round(Math.random() * 10) + 2;
const primeiraJogada = dados();
let ponto, jogadas;
let mensagem = `DADOS: ${primeiraJogada}\n`;
let continuar = false;

switch(primeiraJogada){
    case 7:
    case 11:
        mensagem += "Parabéns, você é um NATURAL!";
        break;
    case 2:
    case 3:
    case 12:
        mensagem += "CRAPS... Você perdeu!";
        break;
    default:
        ponto = primeiraJogada;
        mensagem += "Agora você tem seu PONTO. Boa sorte!";
        continuar = true;
}

console.log(mensagem);
alert(mensagem);

if (continuar) {
    do {
        jogadas = dados();

        mensagem = `DADOS: ${jogadas}\n`;
        if (jogadas === 7) {
            mensagem += "Que pena, você perdeu...";
            alert(mensagem);
        } else if (jogadas === ponto) {
            mensagem += "Parabéns, você venceu!!!";
            alert(mensagem);
        } else {
            mensagem += "Você ainda tem chance... jogue novamente!";
            continuar = confirm(mensagem);
        }

        console.log(mensagem);

        if (!continuar) {
            mensagem = "Que pena que desistiu...";
            console.log(mensagem);
            alert(mensagem);
            break;
        }

    } while (jogadas !== 7 && jogadas !== ponto);
}

console.log("FIM DO JOGO");