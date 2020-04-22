
API REST
fluxo requisição e resposta

VERBOS HTTP
GET
POST
    body
PUT
    body
DELETE

o que vem depois da baseURL
http://minhaapi.com/users/1
http://minhaapi.com/company/1/users?page=2
rota, recurso 
paraments
query paraments
header requisão ou resposta

http code
1.x.x informativo
2.x.x sucess
3.x.x redirection
4.x.x client error
5.x.x server error

/*
Métodos HTTP:
GET: Buscar informações
POST: Inserir novas informações
PUT: Atualizar informações
DELETE: Deletar informações
*/

/*
Tipos de parâmetros:
Query params: Filtros e paginação
Route params: Identificar recursos (Atualizar ou editar)
Request Body: Conteúdo na hora de criar ou editar um recurso
*/

/*
middleware
interceptador de requisões, pode parar a requisição ou editar a response e continuar o fluxo para próxima etapa.
*/