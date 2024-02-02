let tabuleiro = ['','','','','','','','',''];
let turno = 0;
const simbolo = ['\u2694\uFE0F','\u2B55']; //Ajustar 
 
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
    if(tabuleiro[idDaCasaInt] == ''){
        casa.innerText = simbolo[turno];
        preencherTabuleiro(idDaCasaInt, simbolo[turno]);
        trocarJogador();
    }
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
    console.log(tabuleiro);
}

// Inverte o turno de jogador
function trocarJogador() {
    if(turno == 0) {
        turno = 1
    } else {
        turno = 0
    }
}