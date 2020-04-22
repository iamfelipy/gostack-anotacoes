import React, { useState, useEffect } from 'react';

import api from '../services/api.js';

import './index.scss';

function Main(){

    let [users, setUsers] = useState([]);
    let [newUser, setNewUser] = useState({});

    useEffect(() => {
        api.get('users').then(({data})=>{
            setUsers([...data]);
        });
    }, []);

    function handleNewUser({target}){
        const user = {...newUser};
        const id = target.getAttribute('id');
        const value = target.value;

        user[id] = value;
        setNewUser({...user});
    }

    async function btnSendNewUser(){
        const {data} = await api.post('users', newUser);
        setUsers([...users, data]);
    }

    return (
        <div className='wrapper-users'>
            <div className='list-users'>
                {users.map((user)=>{
                    return (
                        <div className='card' key={user.id}>
                            <div>
                                {`Nome: ${user.name}`}
                            </div>
                            <div>
                                {`Age: ${user.age}`}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='add-new-user'>
                <form className='elemento' onChange={handleNewUser}>
                    <div>
                        <input id='name' type='text' />
                    </div>
                    <div>
                        <input id='age' type='number' />
                    </div>
                    <div>
                        <button className='btn' type='button' onClick={btnSendNewUser}>Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Main;