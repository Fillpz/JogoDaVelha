let tabuleiro = ['','','','','','','','',''];
let turno = 0;
const jogador = ['\u2694\uFE0F','\u2B55'];
 
/* Após carregar toda a DOM e espera um click em uma 
    das casas para executar clickNoQuadrado */
document.addEventListener('DOMContentLoaded', ()=>{
    let casas = document.querySelectorAll('.casa');
    casas.forEach((casa) => {
        casa.addEventListener('click', clickNoQuadrado)
    })
})

// Ao clicar em uma das casas escreve o simbolo e capta o id 
function clickNoQuadrado(evento) {
    let casa = evento.target;
    let idDaCasaString = evento.target.id;
    let idDaCasaInt = converterIdParaInteiro(idDaCasaString);
    
    if(tabuleiro[idDaCasaInt] == '') {
        preencherTabuleiro(idDaCasaInt, jogador[turno]);
        casa.innerText = jogador[turno];
        trocarJogador();
        verificarVencedor();
    }
}

function verificarVencedor() {
    let xGanhou = (
        // Verificando vertical
          (tabuleiro[0] == jogador[0] && tabuleiro[3] == jogador[0] && tabuleiro[6] == jogador[0])
        ||(tabuleiro[1] == jogador[0] && tabuleiro[4] == jogador[0] && tabuleiro[7] == jogador[0])
        ||(tabuleiro[2] == jogador[0] && tabuleiro[5] == jogador[0] && tabuleiro[8] == jogador[0])
    
        // Verificando horizontal
        ||(tabuleiro[0] == jogador[0] && tabuleiro[1] == jogador[0] && tabuleiro[2] == jogador[0])
        ||(tabuleiro[3] == jogador[0] && tabuleiro[4] == jogador[0] && tabuleiro[5] == jogador[0])
        ||(tabuleiro[6] == jogador[0] && tabuleiro[7] == jogador[0] && tabuleiro[8] == jogador[0])
    
        // Verificando diagonal
        ||(tabuleiro[0] == jogador[0] && tabuleiro[4] == jogador[0] && tabuleiro[8] == jogador[0])
        ||(tabuleiro[2] == jogador[0] && tabuleiro[4] == jogador[0] && tabuleiro[6] == jogador[0])
    );
    let oGanhou = (
        // Verificando vertical
        (tabuleiro[0] == jogador[1] && tabuleiro[3] == jogador[1] && tabuleiro[6] == jogador[1])
        ||(tabuleiro[1] == jogador[1] && tabuleiro[4] == jogador[1] && tabuleiro[7] == jogador[1])
        ||(tabuleiro[2] == jogador[1] && tabuleiro[5] == jogador[1] && tabuleiro[8] == jogador[1])
    
        // Verificando horizontal
        ||(tabuleiro[0] == jogador[1] && tabuleiro[1] == jogador[1] && tabuleiro[2] == jogador[1])
        ||(tabuleiro[3] == jogador[1] && tabuleiro[4] == jogador[1] && tabuleiro[5] == jogador[1])
        ||(tabuleiro[6] == jogador[1] && tabuleiro[7] == jogador[1] && tabuleiro[8] == jogador[1])
    
        // Verificando diagonal
        ||(tabuleiro[0] == jogador[1] && tabuleiro[4] == jogador[1] && tabuleiro[8] == jogador[1])
        ||(tabuleiro[2] == jogador[1] && tabuleiro[4] == jogador[1] && tabuleiro[6] == jogador[1])
    );

    if(xGanhou){
        console.log(jogador[0] + 'ganhou');
    } else if(oGanhou){
        console.log(jogador[1] + 'ganhou');
    } else if(tabuleiroCompleto()){
        console.log('Deu velha');
    }
}

function tabuleiroCompleto() {
    return tabuleiro.every(casa => casa !== '');
}

// Inverte o valor do id da div de string para int
function converterIdParaInteiro(id) {
    let idDaCasaInt = parseInt(id);
    return idDaCasaInt;
}

// Preencher o array de posições de acordo com casa e jogador
function preencherTabuleiro(casaClickada, jogador){
    if(tabuleiro[casaClickada] == ''){
        tabuleiro[casaClickada] = jogador;
    }
}

// Inverte o turno de jogador
function trocarJogador() {
    if(turno == 0) {
        turno = 1
    } else {
        turno = 0
    }
}