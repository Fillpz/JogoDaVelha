let tabuleiro = ['','','','','','','','',''];
let turno = 0;
const jogador = ['\u2694\uFE0F','\u2B55'];
let resultado = document.querySelector('.resultado');
let botao = document.querySelector('.reiniciar');
botao.addEventListener('click', reiniciarJogo);
let jogoAcabou = false;
 
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
    if(!jogoAcabou){
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
}

// Verificar se algumas das possibilidades de vitória é satisfeita
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

    // Verificar se algum dos jogadores venceu, ou se deu velha
    if(xGanhou){
        resultado.style.display = 'block';
        botao.style.display = 'block';
        resultado.innerText = jogador[0] + ' Venceu!';
        jogoAcabou = true;
    } else if(oGanhou){
        resultado.style.display = 'block';
        botao.style.display = 'block';
        resultado.innerText = jogador[1] + ' Venceu!';
        jogoAcabou = true;
    } else if(tabuleiroCompleto()){
        resultado.style.display = 'block';
        botao.style.display = 'block';
        resultado.innerText = 'Deu velha!';
        jogoAcabou = true;
    }
}

// Verificar se o tabuleiro está completamente preenchido
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

// Reiniciar o jogo
function reiniciarJogo() {
    turno = 0;
    resultado.style.display = 'none';
    botao.style.display = 'none';
    tabuleiro.fill('');
    let casa = document.querySelectorAll('.casa');
    casa.forEach(casa => casa.innerText = '');
    jogoAcabou = false;
}