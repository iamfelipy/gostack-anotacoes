import api from './api.js';

function getUsersService(){

    const path = 'http://localhost:3333/users';

    const configRequest = { 
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    cache: 'default' 
                };
    // return API(path, configRequest);
}

export default getUsersService;