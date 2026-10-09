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



// ROTAS DE API 


// ROTA 1 - cachorro aleatorio

appget("api/cachorro/aleatorio", (req, res) => {
// req - request(requisitos) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro 
// res - response(resposta) = é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro


// pegar todas as fotos de todas racas 
// object.values pega os valores do objeto 
// flat transforma tudo em um unico array
const todasAsFotos = Object.values(cachorros).flat();


//sorteia uma foto aleatoria
const item = sortear(todasAsFotos)

//responder para oo cliente em formato JSON
res.json ({
    //status de resposta 
    status: "success",
    // URL da imagem que foi sorteada 
    message: `http://localhost:${PORT}/fotos/${item}`
});
})
// PORTA 2 - Cachorro por raça
// exemplo de acesso :
// htpp://localhost:3000/api/cachorro/husky

app.get("/api/cachorro/:raça", (req,res) =>{
    //pega o paramentro de URL(ex: husky)
    const raça = req.params.raça.toLocaleLowerCase();
    //parms = contém os parametros definidos na URL da rota
    //.raça = acessa o parametro chamado raça.
    //.tolocaleLowerCase() = transforma todas as letras em minuscula 
    if (cachorros[raça]){
    //cachorros[raça]: procurar a raça dentro do objeto "cachorros"
    // !: significa não: nesse caso, verifica se a raça existe ou se seu valor é falso
         //se nao existir, retorna erro 404
         res.status(404).json({
            status: "error",
            message: `Raça "${Raça}" não encontrada`

         })
         //encerra a execução da rota
         return;
    }

    //sorteia uma foto de raça solicitada 
    const item = sortear(cachorros[raça]);

    // retorna a resposta em JSON 
    res.json ({
        status: "success",
        message: `http://localhost:${Port}/fotos/${item}`

    });

});

//INNICIA O SERVIDOR

app.listen(PORT, () => {
 console.log (`Servidor rodando em http://localhost`);
console.log (`coloque as fotos manualmente em: data/fotos/`);

}
)
