import React from 'react';

import './index.scss';
import reactGif from '../Assets/react.gif';

function Header({nome, idade, childrens}) {
    return (
        <header style={{textAlign: 'center'}}>
            <img src={reactGif} style={{width: '100px'}} />
            <nav></nav>
        </header>
    );
}

export default Header;