import axios from 'axios';

// const path = 'http://localhost:3333/users';

// const configRequest = { 
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 mode: 'cors',
//                 cache: 'default' 
//             };

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

// async function baseFetchPromise(path, configRequest){
//     return new Promise(async (resolve, reject) => {
//         const response = await fetch(path, configRequest);
    
//         switch(response.status){
//             case 200:
//                 console.log('200');
//                 resolve(response);
//                 break;
//             case 404: 
//                 console.log('404');
//                 reject(response);
//                 break;
//             default:
//                 console.log(response.status);
//                 reject(response);
//                 break;
//         }
        
//     });
// }

// export default baseFetchPromise;
export default api;