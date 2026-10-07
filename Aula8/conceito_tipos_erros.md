<!-- Status Cades (Respostas de servidor) -->

2xx - Sucesso (tudo certo)
   200 - ok (Requisição funcionou)
   201 - Criado (post fundionou)

3xx _ Redicionamento (mudoy de lugar)
   301 - Mudou Permanentemente 


4xx - ERRO DO CLIENTE ( Voce errou)
   400 - Requisição errada 
   401 - Não autorizada (sem login)
   403 - Proibida (login sem permissão)
   404 - Não enontrado
   429 - muitas requisições em pouco tempo

5xx - ERRO DO SERVIDOR (Eles errm)
   500 - Erro interno no servidor
   503 - Servidor indisponivel 

Cenario: Você pede uma pizza!

200 = "aqui esta sua pizza"
404 = "não temos essa pizza"
500 = "o forno queimo"
401 = "só entregamos para clientes"
429 = "muitos pedidos, aguarde"
