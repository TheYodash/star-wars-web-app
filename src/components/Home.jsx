import * as React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const randomId = Math.floor(Math.random() * 83) + 1;

    return (
        <div className='home'>
            <h1>Welcome to The Known Universe</h1>
            <p>Explore the vast universe of Star Wars characters</p>
            <p>A new hope has arrived. Explore the Star Wars universe and find your place among the stars.</p>
            <div className='button-container'>
                <button >
                    <Link className='show-character-link' to="/characters">Show Characters</Link>
                </button>
                <button >
                    <Link className='show-character-link' to={`/characters/${randomId}`}>Surprise Me</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;