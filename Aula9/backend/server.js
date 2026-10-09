// NOSSA API DE CACHORROS 

// Agora as fotos NÂO são mais baixadas automaticamente!
// Elas DEVEM exixtir manualmente na pasta 
// data/fotos

// ROTAS:
// GET/api/cachorros/aleatorios 
// GET/api/cachorros/:raça

// Impoortar o farmework Express para criar o servidor 
const Express = require ("express");
// Importar o CROS para permitir requisições de outros dominios (ex: frontend)
const cors = require ("cors");
// Importa o modulo de arquivos do NODE 
const fs = require("fs");
// Importa ultilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Iporta o arquivo JSON quw contem as raças e fotos 
const cachorros = require("./data/dogs.json");
// crie a aplicação Express
const app = express();
// definir a porta que o servidor vai rodar 
const Port= 3000;
// Habilitar o uso de Cors na aplicação 
app.use(cors())


// SERVIR ARQUIVOS ESTATICOS

// Nos falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL/fotos"
// Exemplo:
// http://Localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") //caminho real na pasta do servidor 
    )
)


// FUNÇÂO AUXILIAR 

// função que recebe um array e retorna um item alatorio dele
function sortear(array) {
    //gera um numero aleatorio entre 0 e o tamanho do array 
    // array.lenght - conta quantos itens existem na lista
    // math.random() - Sorteia um numero decimal entre 0 a 1
    // math.random() * array.length - Multiplica o numero sorteado pela quantidade de itens
    // Math.floor() - tira a parte decimal, arredondando para baixo.
    const i =Math.floor(Math.random() * array.lenght)
     // const i = guarda a posição na variavel i
    // retorna o item sorteado
    return array[i];
}
