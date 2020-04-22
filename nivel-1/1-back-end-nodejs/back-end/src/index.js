
const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const logRequest = (request, response, next) => {
    const { method, url } = request;

    const label = `[${method}] ${url}`;

    console.time(label);

    next();

    console.timeEnd(label);

}

function validateUserID(request, response, next) {

    const { id } = request.params;

    if( !isUuid(id) ) {
        return response.status(404).json({error: 'route params invalid'});
    }

    return next();
};

app.use(logRequest);
app.use('/users/:id', validateUserID);

let users = [
    {
        id: uuid(),
        name: 'Felipy',
        age: 21
    },
    {
        id: uuid(),
        name: 'Maik',
        age: 22
    },
    {
        id: uuid(),
        name: 'Jose',
        age: 23
    }
];

app.get('/users', (request, response) => {
    return response.json(users);
});

// app.get('/users/:id', validateUserID, (request, response) => {
app.get('/users/:id', (request, response) => {
    let user;
    const { id } = request.params;
    const index = users.findIndex((value)=> value.id == id);
    
    if( index !== -1 ) {
        user = users[index];
    }else {
        user = {};
    }

    return response.json(user);
});

app.post('/users', (request, response) => {
    const { name, age } = request.body;
    let newUser = { id: uuid(), name, age };
    users.push(newUser);
    return response.json(newUser);
});

app.put('/users/:id', (request, response) => {

    const { id } = request.params;
    const index = users.findIndex((value)=> value.id == id);

    if( index < 0 ) {        
        const message = 'Usuário não encontrado, impossível editar.';
        
        return response.status(400).json( { message } );
    }

    let updateUser = Object.assign(users[index], request.body);
    users.splice(index, 1, updateUser);

    return response.json( users[index] );

});

app.delete('/users/:id', (request, response) => {

    const { id } = request.params;
    const index = users.findIndex((value)=> value.id == id);
    
    if( index < 0 ) {
        const message = 'Usuário não encontrado, impossível remover.';
        
        return response.status(404).json( { message } );
    }
    
    const user = users.splice(index, 1);
    const message = 'Usuário removido com sucesso';

    return response.status(204).send(  );
});

app.listen(3333, () => {
    console.log('back-end started');
});