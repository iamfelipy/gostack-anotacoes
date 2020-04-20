const express = require('express');

const app = express();
app.use(express.json());


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

//query params
app.get('/projects', (request, response) => {
    const { titulo, autor } = request.query;
    console.log(titulo);
    console.log(autor);
    
    const mensagem = [
        {
            titulo: 'Origem do conavirus',
            autor: 'joseph'
        },
        {
            titulo: 'Conavirus como lidar',
            autor: 'joseph'
        }
    ];

    return response.json(mensagem);
});

//route params
// app.get('/projects/:id', (request, response) => {
//     const resposta = ['felipy', 'vandel', 'pietra'];
//     let {id}  = request.params;
//     return response.send(`Bem vinda(o), ${resposta[id]}`);
// });

//route params
app.put('/projects/:id', (request, response) => {
    let lista = ['Maionese', 'Chocolate', 'Agua'];
    const { id } = request.params;
    // let removido = lista;

    return response.json(removido);
});

//route params
app.delete('/projects/:id', (request, response) => {
    let user = ['Fernando', 'Maik', 'Jose', ''];
    const { id } = request.params;
    let removido = user.splice(id, 1);

    return response.json(removido);
});

//request body 
app.post('/projects', (request, response) => {
    console.log(request.body);
    return response.send('teste');
});

app.listen(3333, () => {
    console.log('back-end started');
});

//rodar comando node src/index.js para executar ou utilizar o nodemon





