
const express = require('express');
const app = express();
app.use(express.json());

let id = 0;

let articles = [];

app.get('/articles', (request, response) => {
    return response.json(articles);
});

app.get('/articles/:id', (request, response) => {
    const {id} = request.params;
    const artigo = articles.find(value => value.id == id);
    return response.json(artigo);
});

app.post('/articles', (request, response) => {
    const body = request.body;
    let newArticles = [];
    newArticles = body.map(article => {
        article.id = ++id;
        return article;
    });
    articles = articles.concat(newArticles);
    return response.json(newArticles);
});

app.put('articles', () => {
    
});

app.delete('/articles/:id', (request, response) => {
    const {id} = request.params;
    const index = articles.findIndex(value => value.id == id);
    const artigoRemovido = articles.splice(index, 1);

    return response.json(artigoRemovido);
});

app.listen(3333, () => {
    console.log('back-end rodando');
});