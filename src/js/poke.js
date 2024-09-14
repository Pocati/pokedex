/*O que será feito:

Ao clicar no botão de troca de tema, acionar a classe modo-escuro, aplicando toda a cascata de estilos no body
-passo 1: pegar no JS o elemental HTML correspondente a troca de tema
passo 2: adicionar a classe modo-escuro ao body
passo 3: trocar a imagem de troca de tema para lua

objetivo 2:
fazer a ação contrária, remover o modp-escuro quando o botão for acionado novamente
passo 1: remover a classe modo-escuro do body
passo 2: trocar a imagem do tema para sol*/


const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    // Alterna a classe "modo-escuro" no body
    const modoEscuroEstaAtivo = body.classList.toggle("modo-escuro");

    // Altera a imagem do botão de acordo com o tema ativo
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocadeTema.setAttribute("src", "./imagens/moon.png");
        imagemBotaoTrocadeTema.setAttribute("alt", "imagem da lua");
    } else {
        imagemBotaoTrocadeTema.setAttribute("src", "./imagens/sun.png");
        imagemBotaoTrocadeTema.setAttribute("alt", "imagem do sol");
    }
});