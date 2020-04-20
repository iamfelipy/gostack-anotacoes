import React from 'react';

import './index.scss';

function Header({nome, idade, childrens}) {
    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;