import React, { useState } from 'react';

function Main(){

    let [contagem, setContagem] = useState(0);

    function handleContagem(){
        setContagem(++contagem);
    }

    return (
        <>
            <div>{contagem}</div>
            <button onClick={handleContagem}>Clique para adicionar mais 1</button>
        </>
    );
}

export default Main;