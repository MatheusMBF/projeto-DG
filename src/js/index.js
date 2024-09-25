//buscar botoes no html
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//identificar o click
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        console.log("clicou");

//desmarcar botao selecionado anterior
        desmarcarBotaoSelecionado();

//marcar botao clicado
        marcarBotaoClicado(botao);

//esconder imagem anterior
        esconderImagemAnterior();

//aparecer imagem do botao clicado
        mostrarImagemSelecionada(indice);

//esconder informacao anterior
        esconderInfoAnterior();

//mostrar informacao do botao clicado
        mostrarInfoSelecionada(indice);
    });
});

function mostrarInfoSelecionada(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInfoAnterior() {
    const informacoesAtiva = document.querySelector("informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAnterior() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoClicado(botao) {
    botao.classList.add("selecionado");
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
