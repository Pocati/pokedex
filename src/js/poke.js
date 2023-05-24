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
    body.classList.add("modo-escuro");

    imagemBotaoTrocadeTema.setAttribute("src", "./src/CSS/moon.png");
    body.classList.toggle("modo-escuro");

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
    } else {
        body.classList.add("modo-escuro")
    };
});
