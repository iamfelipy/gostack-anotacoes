import React from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';

function App(){
    return (
        <>
            <Header nome='felipy' idade='20' />
            <Main />
        </>
    );
}

export default App;