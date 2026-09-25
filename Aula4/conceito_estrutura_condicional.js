//Estruturas Condicionais (Tomando Decisões)
//As estruturas condicionais permitem executar diferentes blocos de codigo dependendo de uma condição 

// if/else - Condicionais 
// If - Verifica se uma condição é verdadeira e executa o codigo dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de codigo

let idade = 18

if (idade >= 18) {
    console.log ("Voce é maior de idade")

} else{

    console.log("Voce é menor de idade")
}

// If, ELSE IF, ELSE (Multiplas Condições)

let idade2 = 10

if (idade2 < 12){
    console.log("Voce é um bby")

} else if (idade2 < 18){
    console.log ("Voce é um adolecente")

}else {
    console.log("Voce é adulto")

}