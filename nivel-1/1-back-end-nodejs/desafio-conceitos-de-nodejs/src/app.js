const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

function validateRepositoryID(request, response, next){
  
  const { id } = request.params;
  const indexRepository = repositories.findIndex( repository => id === repository.id );

  if( !isUuid(id) || indexRepository < 0 ) return response.status(400).json({message: 'Invalid ID'});
  
  return next();
}

app.use('/repositories/:id', validateRepositoryID);

const repositories = [
  {
    id: uuid(),
    title: "Quando comecei no Node.js",
    url: "https://github.com/Rocketseat/unform.git",
    "techs": [
      "NODEJS",
      "REACT"
    ],
    likes: 1000
  },
  {
    id: uuid(),
    title: "A vida de um marciano no brasil",
    url: "https://github.com/Rocketseat/rocketseat-vscode-react-native-snippets.git",
    "techs": [
      "NODEJS",
      "REACT"
    ],
    likes: 22
  }
];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  
  const { title, url, techs } = request.body;

  const newRepository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(newRepository);

  return response.json(newRepository);
});

app.put("/repositories/:id", (request, response) => {
  
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const indexRepository = repositories.findIndex( repository => id === repository.id );

  if( !title || !url || !techs ) {
    return response.json(repositories[indexRepository]);
  }

  repositories[indexRepository] = Object.assign(repositories[indexRepository], {title, url, techs});

  return response.json(repositories[indexRepository]);
});

app.delete("/repositories/:id", (request, response) => {

  const { id } = request.params;

  const indexRepository = repositories.findIndex( repository => id === repository.id );

  repositories.splice(indexRepository, 1);

  return response.status(204).send('');
});

app.post("/repositories/:id/like", (request, response) => {
  
  const { id } = request.params;
  const indexRepository = repositories.findIndex( repository => id === repository.id );

  ++repositories[indexRepository].likes;

  return response.json(repositories[indexRepository]);
});

module.exports = app;
