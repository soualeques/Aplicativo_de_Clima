//variaveis
const Botaopesquisar = document.querySelector("#buscar");

//Chave para acesso a API
const Key = "070fea4bf2031e71ff6dbf2891b97bc5";

//função para trabalhar com a API
async function Pesquisar_Cidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then(response => response.json());
    Colocar_Dados_na_Tela(dados)
    console.log(dados)
}   

//função ao clicar aparecer no background a imagem de acordo com a cidade que foi pesquisado e buscar os dados.
    Botaopesquisar.addEventListener('click', function(event) {
        event.preventDefault();
        var inputValue = document.getElementById('pesquisa').value.trim();
        var errorMessage = document.getElementById('error-message');
        if (inputValue === '') {
          errorMessage.textContent = 'Por favor, digite o nome de uma cidade.';
          errorMessage.style.display = 'block';
        } else if (/^\d+$/.test(inputValue)) {
          errorMessage.textContent = 'Por favor, digite o nome de uma cidade, não um número.';
          errorMessage.style.display = 'block';
        } else {
          errorMessage.style.display = 'none';
          // processar a pesquisa
        
        const cidade = document.querySelector("#pesquisa").value;
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?clima&${cidade}")`;
        Pesquisar_Cidade(cidade);
            }
      });
    

function Colocar_Dados_na_Tela(dados){
    document.querySelector("#cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector("#temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector("#condicao").innerHTML = dados.weather[0].description;
    document.querySelector("#umidade").innerHTML ="Umidade: " + dados.main.humidity + "%";
    document.querySelector("#previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}
/* tratamento de erros */
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    exibirClima(data);
  })
  .catch((error) => {
    errorMessage.innerText = `Something went wrong: ${error}`;
    errorMessage.style.display = "block";
  });
