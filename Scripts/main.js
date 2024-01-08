//variaveis
const Botaopesquisar = document.querySelector("#buscar");

//função ao clicar aparecer no background a imagem de acordo com a cidade que foi pesquisado
Botaopesquisar.addEventListener("click", () =>
{
    const pesquisa = document.querySelector("#pesquisa").value
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${pesquisa}")`;
})