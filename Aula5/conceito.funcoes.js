// Funcões em JavaScript

// O que é uma função?
// Uma função é um bloco de codigo reutilizavel, criado para executar uma tarefa especifica.

// analogia  SIMPLES!
// Voce vai colocar valores (parametros)
// Ela processa 
// Devolve um resultado (return)

// --------------------------------
// Estrutura basica de uma função
// --------------------------------

// funtion nomeDaFuncao(parametro1, parametro2){
//    //codigo que sera executado 
// return resultado;
//}

// fntion ----> palavra-chave
// nomeDaFunção -----> nome da função 
// parametros ------->  valores que a função recebe 
// return ---> valor que a função devolve 

// 5 EXEMPLOS 

// 1 - Somar dois numeros

function somar(a,b) {
    return a + b;
}
console.log(somar(2,15))

// 2 - Converter real para dolar
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}
console.log (realParaDolar(10,5.20).toFixed(2))

// 3 - Converter dólar para rea
function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}
console.log (dolarParaReal(5,5.20));

// 4 - Aumento de salario (Voce merece 25% de aumento)

function calcularAumento(salario){
    return salario + (salario * 0,25)
}
console.log (calcularAumento(2000));

// Verique se é par ou impar?

function ParOuImpar(numero){
    return numero %2 ===0 ? "par" : "impar";
}
console.log (ParOuImpar(6));
 

