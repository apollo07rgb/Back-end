//======================
// Selecionando Elementos
//======================

//console.log(documnt.getElementById("titulo"));
//para vizualizar no console

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo= document.getElementById("paragrafo");
let imagem= document.getElementById("imageteste");

//Selecionando por classe
let caixas = document.getElementsByClassName("box")

//Mostrar no console
console.log(titulo)
console.log(caixas)
console.log(imagem)

//==========================================
//Função para alterar o Conteudo
//==========================================

function alterar(){
    titulo.innerHTML = "vava the best game!!!!!!!!!!!!!!!"
    subtitulo.innerHTML = "valorant"
}

// alterando elemento de classe
caixas[0],innerText = "Primeiro paragrafo alternado"
caixas[1],innerText = "Segundo paragrafo alternado"

//Alterando imagem

imagem.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/67fbd4c273f3d5e92a18666c6379db09e74b7cda-1920x1080.jpg?accountingTag=VAL&fit=fill&fm=jpg&q=80&w=1541"