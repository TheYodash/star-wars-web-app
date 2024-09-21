import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">The Known Universe</Link>
            <div className='input-wrapper'>
            <FaSearch id="search-icon" />
            <input type="text" placeholder="Search..." />
            </div>
            <ul>
                <li className='home-item'><Link to="/">Home</Link></li>
                <li className='char-item'><Link to="/characters">Characters</Link></li>
            </ul>
        </nav>
    );
    }