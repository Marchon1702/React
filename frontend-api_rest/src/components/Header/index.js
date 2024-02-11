import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

// Para o Link funcionar ele deve ser envolvido se alguma forma ao BrowserRouter, neste caso a Função Header em App.js esta sendo envolvida então está tudo certo.
import { Link } from 'react-router-dom';

import { Nav } from '../Header/styled'

export default function Header() {
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24}/>
            </Link>
            <Link to="/login">
                <FaUserAlt size={24}/>
            </Link>
            <Link to="/asas">
                <FaSignInAlt size={24}/>
            </Link>
        </Nav>
    )
}