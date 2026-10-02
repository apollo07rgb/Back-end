//<h2>Ao pressionar as teclas "r", "g" ou "b", mude a cor de fundo da pagina para vermelho, verde ou azul, respectivamente </h2>

document.addEventListener("keydown", function(e){
    if (e.key == "r"){
        document.body.style.backgroundColor = "red"
    }else if (e.key == "g"){
        document.body.syle.backgroundColor = "green"
    }else {
        document.body.style.backgroundColor = "blue"
    }
})