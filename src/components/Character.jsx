import * as React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { apiLink } from '../constants/constants';
import NavBar from './NavBar';
import './Character.css';
import { usePagination } from './PaginationContext';
import Footer from './Footer';

const Character = () => {
    const { pageNumber } = usePagination();
    const { id } = useParams();

    let characterId = 0;

    if(pageNumber === 1) {
        characterId = parseInt(id);
    } else {
     characterId = (pageNumber - 1)*10 + parseInt(id);
    }

    console.log('id:', id);
    console.log('characterId:', characterId);

    const url = `${apiLink}/id/${characterId}.json`;
    const { data: character, loading, error } = useFetch(url);
    
    console.log('Character.jsx');
    console.log('pageNumber:', pageNumber);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }
    
    return (
        <>
            <NavBar />
            <div className='character-container'>
                <img src={character.image} alt={character.name} className='character-image'/>
                <div className='character-info'>
                    <h2>{character.name}</h2>
                    <p><strong>Height: </strong>{character.height}</p>
                    <p><strong>Mass: </strong>{character.mass}</p>
                    <p><strong>Gender: </strong>{character.gender ? character.gender : "Unknown"}</p>
                    <p><strong>Homeworld: </strong>{character.homeworld}</p>
                    <p><strong>Species: </strong>{character.species}</p>
                    <p><strong>Age: </strong>{
                    Math.abs(character.born) + character.died ? 
                    `${Math.abs(character.born - character.died)} Years` :
                    'Unknown'}</p>
                    <button className='back-button' onClick={() => window.history.back()}>Back</button>
                 </div>
            </div>
           <Footer />
        </>
    );
}

export default Character;