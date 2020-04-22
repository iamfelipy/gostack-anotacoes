import React, {useState, useEffect} from "react";

import api from './services/api';

import "./styles.css";

function App() {
  
  const [repositories, setRepositories] = useState([]);
  
  async function getRepositories(){
    let {data} = await api.get('/repositories');
    setRepositories([...data]);
  }

  async function handleAddRepository() {
    const newRepository = {
      title: `New repository ${Date.now()}`,
      url: 'http://hotdogs.com.br',
      techs: []
    };

    const {data} = await api.post('/repositories', newRepository);
    setRepositories([...repositories, data]);
  }
  
  async function handleRemoveRepository(id, index) {
    const request = await api.delete(`/repositories/${id}`);
    let deleteRepository = [...repositories];
    deleteRepository.splice(index, 1);
    setRepositories([...deleteRepository]);
  }

  useEffect(()=>{
    getRepositories();
  },[]);

  return (
    <div>
      <ul data-testid="repository-list">
        {
          repositories.map((repository, index)=>{
            return (
              <li key={repository.id}>
                {`${repository.title}`}
                <button onClick={() => handleRemoveRepository(repository.id, index)}>
                  Remover
                </button>
              </li>
            );
          })
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
