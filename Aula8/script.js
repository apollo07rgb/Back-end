//=======================================
// API De Cachorros
//=======================================

// Endereço da API que vamos ultilizar 

const url = 'https://dog.ceo/api/breeds/image/random';

// Pegando elementos do html

// - Imagem pelo seu ID
const fotocachorro = document.getElementById('fotocachorro')

// - Botão pelo seu ID

const btnNovaFoto = document.getElementById('btnNovaFoto')

//==========================================
//Função para buscar nova foto
//==========================================

async function buscarfoto() {
    // Fazer uma requisição para a API
    const resposta = await fetch(url);
    // converter a resposta da API para JSON
    const dados = await resposta.json()
    // Mostrar no console o que a API restornou
    console.log(dados)
    // Alteramos o endereço da imagem no HTML
    fotocachorro.src = dados.message;

}

//===========================================
// Botão 
//===========================================
// Quando o usuario clicar no botão 
// Vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarfoto);

buscarfoto();
