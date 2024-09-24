import * as React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">The Known Universe</Link>
            <ul>
                <li className='home-item'><Link to="/">Home</Link></li>
                <li className='char-item'><Link to="/characters">Characters</Link></li>
            </ul>
        </nav>
    );
    }