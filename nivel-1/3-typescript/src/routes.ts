import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'felipy@tronxy.com.br',
        password: '123465',
        techs: [
            'Node.js',
            'ReactJS',
            'ReactNative'
        ]
    });


    return response.json({message: 'Hello World'});
}
